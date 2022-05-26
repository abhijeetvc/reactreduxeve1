
function demo1(name,callback){
    console.log('Hello, '+ name);
    callback(name)
}

function demo2(name){
    console.log('hiiiiii, '+name);
}

// setTimeout(demo1,3000)
// demo2()

//demo1(demo2)

setTimeout(demo1,3000,'John',demo2)