/*jshint unused:false*/
'use strict';

var reduce = require('./');
var assert = require('assert');

function test(label, func) {
  try {
    func();
    console.log('(y) %s', label);
  } catch (variable) {
    console.log('(x) %s', label);
    console.log('      %s', variable.message);
  }
}

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

test('find returns that element.', function () {
  var actual = [4, 6, 7, 12].find(isPrime);
  assert.equal(actual, 7);
});

test('findIndex returns the index of that element.', function () {
  var actual = [4, 6, 7, 12].findIndex(isPrime);
  assert.equal(actual, 2);
});

test('reduce returns the summ of all elements.', function () {
  var actual = [4, 6, 7, 12].reduce(function(a, b) {
    return a + b;
  }, 1);
  assert.equal(actual, 30);
});
