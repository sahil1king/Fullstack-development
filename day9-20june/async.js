setTimeout(()=>{
    console.log("this comes after 2 seconds")
},2000)             //runs the callback function after 2 seconds(2000ms)    it is called inner callback function

const callback=()=>{
    console.log("this is outer callback function")
}

setTimeout(callback,1000)  //runs the callback function after 1 second(1000ms)   it is called outer callback function

//<<=============================================================================================>>


const id=setInterval(()=>{
    console.log("this function is running every three seconds")
},3000)

// to stop the interval, we can use clearInterval

setTimeout(()=>{
    clearInterval(id)
},3000*4)

