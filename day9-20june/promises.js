//promise

    // let b=10
    // const promise = new Promise((resolve,reject)=>{
    //     let num=Math.random()*10
    //     if(num<5)
    //         resolve(num)
    //     else
    //         reject(num)
    // })

    // //console.log(promise)  // wrong way to print promise, it will not print the value of promise

    // // to get the value of promise, we need to use then() and catch() methods
    // promise.then((data)=>{
    //     console.log("promise resolved",data)
    // }).catch((error)=>{
    //     console.log("promise rejected",error)
    // })
    // console.log(b)  // this will print the value of b before the promise is resolved or rejected
    // // this is because the promise is asynchronous, it will not block the execution of the code

    // const promise2=new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         console.log("this is a promise which is resolved after 2 seconds")
    //         resolve()
    //     },2000)
    // })
    // console.log(promise2) 

    // promise2.then(()=>{
    //     console.log("promise resolved")
    // })


//chaining promises
const chainpromise=new Promise((resolve,reject)=>{
    let num =Math.random()*100
    if(num<50)
        resolve(num)
    else
        reject(num)
})

chainpromise.then((data)=>{
    if(data<25)
        return `num is less than 25 ${data}`
    else
        return `num is greater than 25 ${data}`
}).then((dta)=>{
    console.log(dta)
}).catch(()=>{
    console.log("object")
})


//async functions
let a=10;
async function fun(){
    console.log("async function")
    

}

const arrowfun=async()=>{
    console.log("async arrow function")
    let res=await fetch("https://v2.jokeapi.dev/joke/Any")
    result=await res.json()
    console.log(result)
    console.log("arrow sync function ends here")
}

fun()
arrowfun()
console.log(a)  // this will print the value of a after the async function is executed
