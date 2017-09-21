"use strict";

function test() {
    console.log(a);
    var a = 3;
    {
        var b = 4;
    }
    console.log(a, b);
}
test();

//es6 :
function test2() {
    console.log(c);
    var c = 3;
    {
        var d = 4;
    }
    console.log(c);
}
test2();