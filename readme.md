# ponyfill-array 
[![Build Status](https://travis-ci.org/cmilhench/ponyfill-array.svg?branch=master)](https://travis-ci.org/cmilhench/ponyfill-array)

> ES6 [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [ponyfills](https://ponyfill.com)


## Install

```
$ npm install ponyfill-array --save
```


## Usage

```js
[4, 6, 7, 12].find(isPrime);
//=> 7
```

```js
[4, 6, 7, 12].findIndex(isPrime);
//=> 2
```

```js
[4, 6, 7, 12].reduce(function(a, b) {
  return a + b;
}, 1);
//=> 30
```

## License

MIT © [Colin Milhench](http://milhen.ch)
