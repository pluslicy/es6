const a = 3 ;
let[b=f(),c] = [,3];
function f(){
    console.log('fff');
    return 4;
}
console.log('b',b);
console.log('c',c);
