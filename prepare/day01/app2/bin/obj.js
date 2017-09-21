'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _foo$bar = { foo: 'this is foo', bar: 'this is bar' },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log(foo, bar);

var _foo$bar2 = { foo: 'this is foo', bar: 'this is bar' },
    a = _foo$bar2.foo,
    b = _foo$bar2.bar;

console.log(a, b);

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var _a = _ref2[0];
        var _b = _ref2[1];

        console.log(_a, _b);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var obj = {
    name: "terry",
    age: 12,
    gender: 'male'
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
var obj2 = {
    name: 'larry',
    brith: '1998-09-03'
};
Object.assign(obj, obj2);
console.log(obj);