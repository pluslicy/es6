"use strict";

var a = 3;
function test() {
    console.log(a);
    var a = 4;
    console.log(a);
}
test();