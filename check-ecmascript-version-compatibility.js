'use strict'

var parseEcmascriptVersion = require('ecmascript-version-detector').parse
var fs = require('fs')

var DEFAULT_VERSION = 5

function checkFile (file, version, cb) {
  if (!cb) {
    cb = version
    version = DEFAULT_VERSION
  }

  fs.readFile(file, 'utf8', function (err, data) {
    var i, sections, expression, expressionVersion

    if (err) {
      cb(err)
      return
    }

    sections = parseEcmascriptVersion(data)

    for (i = 0; i < sections.length; i++) {
      expression = sections[i]

      if (expression.selector === "//Program[@sourceType=='module']") { continue }

      expressionVersion = parseInt(expression.version, 10)

      if (expressionVersion > version) {
        cb(new Error(expression.en.name + ' is ES' + expressionVersion + ', not ES' + version + ' compatible'))
        return
      }
    }

    cb()
  })
}

module.exports = checkFile
