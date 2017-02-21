Check ECMAScript Version Compatibility
======================================

A small lib that helps check and make sure that your JavaScript will run in chosen ES version environment (defaults to ES5).

## Install

```sh
npm install --save-dev check-ecmascript-version-compatibility
```

## Usage

Here's an example that uses Mocha:

```js
var checkFile = require('check-ecmascript-version-compatibility');

describe('my file', function () {
  it('is ES2016-compliant', function (done) {
    // It can take awhile to parse large files, so you may need to
    // increase your timeouts.
    this.slow(8000);
    this.timeout(10000);

    checkFile('path/to/file.js', 2016, done);
  });
});
```

If you do not pass in a version number, it will default to ES5.

```js
describe('my file', function () {
  it('is ES5-compliant', function (done) {
    // It can take awhile to parse large files, so you may need to
    // increase your timeouts.
    this.slow(8000);
    this.timeout(10000);

    checkFile('path/to/file.js', done);
  });
});
```
