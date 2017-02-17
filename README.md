Check ECMAScript Version Compatibility
======================================

A small lib that helps check and make sure that your JavaScript will run in ES5 environments.

## Install

```sh
npm install --save-dev check-ecmascript-version-compatibility
```

## Usage

Here's an example that uses Mocha:

```js
var checkFile = require('check-ecmascript-version-compatibility');

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
