const express=require('express');
const app=express()
const port=4000

console.log("object")

app.get("/",(req,res)=>{
    res.send("Hii")
})

app.get("/user",(req,res)=>{
    // res.send("Hello")
    let user={
        name:"sahil",
        arr:[1,2,3,"4",true]
    }
    res.json(user)
})



app.listen(port,()=>{
    console.log(`app is started at port ${port}`)
})

