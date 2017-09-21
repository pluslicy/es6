require('babel-polyfill');

let map = new Map();
map.set("1001",{name:'terry'});
map.set("1002",{name:'larry'});
for(let[name] of map){
    console.log(name);
}
