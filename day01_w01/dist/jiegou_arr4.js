'use strict';

var arr = [1, 2, 3];

var a = arr[0],
    b = arr[1],
    _arr$ = arr[2],
    c = _arr$ === undefined ? '3000' : _arr$,
    _arr$2 = arr[3],
    d = _arr$2 === undefined ? '4000' : _arr$2;

console.log(a);
console.log(b);
console.log(c);
console.log(d);