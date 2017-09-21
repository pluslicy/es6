function test(){
    console.log(a);
    var a = 3;
    {
        var b = 4;
    }
    console.log(a,b);
}
test()
    
//es6 :
function test2(){
    console.log(c);
    let c = 3;
    {
        let d = 4;
    }
    console.log(c);
}
test2();
