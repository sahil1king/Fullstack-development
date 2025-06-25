const express=require('express');
const path =require('path');
const app=express()
const PORT=4000

app.use(express.static(path.join(__dirname,"public")))    // this will direct to the public folder
app.use(express.urlencoded({extended:true}))        // this will parse the form data and make it available in req.body
app.use(express.json()) // this will parse the json data and make it available in req.body

// app.use(()=>{
//     console.log("generic middleware")        req will stuck here
// })

app.use((req,res,next)=>{
    console.log("generic middleware")
    next()  //I am telling req that it ho forward(down) to next function
})

app.use("/user",(req,res,next)=>{
    console.log("path specific middleware for '/user' ")
    next()
})

app.get("/contact",(req,res)=>{
    console.log("API hit")
    res.redirect("/contact.html") // redirecting to contact.html file
})

app.get("/user",(req,res)=>{
    // res.send("welcome to user")
    return res.json({Name:"sahil"})
    res.json({Name:"sahil"})        // this line will not execute because of return statement above
})

app.post("/user",(req,res)=>{
    console.log("submitted")
    console.log(req.body)
    res.send("form submitted successfully")
})

// app.get("/user",(req,res)=>{
//     // res.send("welcome again")
//     res.json({Name:"sahil again"})
// })

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/test",(req,res)=>{
    console.log(req.query)
    // res.status(201).send("ok")
    res.status(201).json({
        data:req.query
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
