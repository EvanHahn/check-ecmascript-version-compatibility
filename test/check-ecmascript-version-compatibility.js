"use strict";

var checkFile = require("../check-ecmascript-version-compatibility");
var assert = require("node:assert");

var es5CompliantFile = "./test/fixtures/es5.js";
var es2016File = "./test/fixtures/es2016.js";

describe("check-ecmascript-version-compatibility", function () {
  beforeEach(function () {
    this.timeout(2000);
    this.slow(2000);
  });

  it("calls call with no argument if file is ES5-compliant", function (done) {
    checkFile(es5CompliantFile, done);
  });

  it("calls callback with an error that includes the filename if the file passed contains code that is greater than ES5", function (done) {
    checkFile(es2016File, function (err) {
      assert(err instanceof Error);
      assert.strictEqual(
        err.message,
        `${es2016File}: ArrowFunctionExpression is ES2015, not ES5 compatible`
      );
      done();
    });
  });

  it("allows you to pass an argument for version number to check", function (done) {
    checkFile(es2016File, 2016, done);
  });
});
