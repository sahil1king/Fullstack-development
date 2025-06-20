const arrowfun=async()=>{
    console.log("async arrow function")
    // let res=await fetch("https://v2.jokeapi.dev/joke/Any")
    // result=await res.json()
    let result = await axios.get("https://v2.jokeapi.dev/joke/Any")
    res=result.data
    console.log(res)
    console.log("arrow sync function ends here")
}
arrowfun()

