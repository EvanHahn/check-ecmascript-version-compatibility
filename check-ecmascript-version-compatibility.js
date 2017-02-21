'use strict'

var parseEcmascriptVersion = require('ecmascript-version-detector').parse
var fs = require('fs')

function checkFile (file, cb) {
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

      if (expressionVersion > 5) {
        cb(new Error(expression.en.name + ' is ES' + expressionVersion + ', not ES5 compatible'))
        return
      }
    }

    cb()
  })
}

module.exports = checkFile
