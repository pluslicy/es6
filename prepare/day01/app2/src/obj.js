let{foo,bar} = {foo:'this is foo',bar:'this is bar'}
console.log(foo,bar);

let{foo:a,bar:b} = {foo:'this is foo',bar:'this is bar'};
console.log(a,b);

var map = new Map();
map.set('first','hello');
map.set('second','world');

for(let [a,b] of map){
    console.log(a,b);
}

var obj = {
    name:"terry",
    age:12,
    gender:'male'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
var obj2 = {
    name:'larry',
    brith:'1998-09-03'
}
Object.assign(obj,obj2);
console.log(obj);
