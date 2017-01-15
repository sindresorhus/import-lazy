# lazy-req [![Build Status](https://travis-ci.org/sindresorhus/lazy-req.svg?branch=master)](https://travis-ci.org/sindresorhus/lazy-req)

> Require modules lazily


## Install

```
$ npm install --save lazy-req
```


## Usage

```js
// pass in `require` or a custom require function
const lazyReq = require('lazy-req')(require);
const _ = lazyReq('lodash');

// where you would normally do
_.isNumber(2);

// you now instead call it as a function
_().isNumber(2);

// it's cached on consecutive calls
_().isString('unicorn');

// extract lazy variations of the props you need
const members = lazyReq('lodash')('isNumber', 'isString');

// useful when using destructuring assignment in ES2015
const {isNumber, isString} = lazyReq('lodash')('isNumber', 'isString');

// works out of the box for functions and regular properties
const stuff = lazyReq('./math-lib')('sum', 'PHI');
console.log(stuff.sum(1, 2)); // => 3
console.log(stuff.PHI); // => 1.618033
```


## Related

- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [resolve-cwd](https://github.com/sindresorhus/resolve-cwd) - Resolve the path of a module from the current working directory
- [req-from](https://github.com/sindresorhus/req-from) - Require a module from a given path
- [req-cwd](https://github.com/sindresorhus/req-cwd) - Require a module from the current working directory
- [resolve-pkg](https://github.com/sindresorhus/resolve-pkg) - Resolve the path of a package regardless of it having an entry point
- [lazy-value](https://github.com/sindresorhus/lazy-value) - Create a lazily evaluated value
- [define-lazy-prop](https://github.com/sindresorhus/define-lazy-prop) - Define a lazily evaluated property on an object


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
