# import-lazy [![Build Status](https://travis-ci.org/sindresorhus/import-lazy.svg?branch=master)](https://travis-ci.org/sindresorhus/import-lazy)

> Import a module lazily

Version 3.0.0 is exclusively `Proxy`-based (Node 6+). If you want Node <= 5 support use version 2.

## Install

```
$ npm install --save import-lazy
```


## Usage

```js
// Pass in `require` or a custom import function
const importLazy = require('import-lazy')(require);
const _ = importLazy('lodash');

// Instead of referring to its exported properties directly
_.isNumber(2);

// It's cached on consecutive calls
_.isNumber('unicorn');

// It also works using destructuring assignment in ES2015
const {isNumber, isString} = importLazy('lodash');

// Works out of the box for functions and regular properties
const stuff = importLazy('./math-lib');
console.log(stuff.sum(1, 2)); // => 3
console.log(stuff.PHI); // => 1.618033
```


## Related

- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [resolve-pkg](https://github.com/sindresorhus/resolve-pkg) - Resolve the path of a package regardless of it having an entry point
- [lazy-value](https://github.com/sindresorhus/lazy-value) - Create a lazily evaluated value
- [define-lazy-prop](https://github.com/sindresorhus/define-lazy-prop) - Define a lazily evaluated property on an object


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
