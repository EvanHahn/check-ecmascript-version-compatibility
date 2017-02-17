'use strict';

var checkFile = require('../check-ecmascript-version-compatibility');
var expect = require('chai').expect;

var es5CompliantFile = './test/fixtures/es5.js';
var es2016File = './test/fixtures/es2016.js';

describe('check-ecmascript-version-compatibility', function () {
  beforeEach(function () {
    this.timeout(2000);
    this.slow(2000);
  });

  it('calls call with no argument if file is ES5-compliant', function (done) {
    checkFile(es5CompliantFile, done);
  });

  it('calls callback with an error if the file passed contains code that is greater than ES5', function (done) {
    checkFile(es2016File, function (err) {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.equal('ArrowFunctionExpression is ES2015, not ES5 compatible');
      done();
    });
  });
});
