'use strict';

require('polyfill');
var arr = ['terry', 'larry', 'tom'];
arr.forEach(function (item, index) {
    console.log(index, item);
});

var result = Array.from('hello world');
console.log(result);