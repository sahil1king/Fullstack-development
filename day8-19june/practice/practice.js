//guess answer of this higher and call back functions question

    // function cb(x){
    //     console.log("callback function", x)
    //     return function(y){
    //         console.log("inner function",y)
    //         return x+y
    //     }
    // }
    // function higher(callback){
    //     console.log("higher order function")
    //     let innerfuc=callback(5)
    //     console.log("this is below call")
    //     return innerfuc(10)
    // }
    // console.log(higher(cb))

//<<----------------------------------------------------------------------------------------->>

    // function cb(x){
    //     console.log("callback function",x)
    //     if(x>10)
    //         return "greater than 10"
    //     else
    //     return "less than or equal to 10"
    // }

    // function higher(callback, value){
    //     console.log("higher order function")
    //     let ans=callback(value)
    //     console.log("this is below call")
    //     return ans
    // }
    // console.log(higher(cb,12))
    // console.log(higher(cb,8))

//<<------------------------------------------------------------------------------------->>

function cb() {
    console.log("callback function");
    return function () {
    console.log("inner function 1");
    return function(){
        console.log("inner function 2");
        return "Final return"
    }
};
}

function higher(callback){
    console.log("higher order function");
    let innerFunc1 = callback();
    console.log("this is below call 1");
    let innerFunc2 = innerFunc1();
    console.log("this is below call 2");
    return innerFunc2();
}
console.log(higher(cb));

