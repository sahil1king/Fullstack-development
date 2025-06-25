const express=require('express');
const path =require('path');
const app=express()
const PORT=4000

const TODOS=[
    {task:"this is task 1",
        completed:false
    }
]

app.use(express.static(path.join(__dirname,"public")))    
app.use(express.urlencoded({extended:true}))        
app.use(express.json())

app.get("/all-todos",(req,res)=>{
    res.status(200).json(TODOS)
})

app.get("/add-todo",(req,res)=>{
    res.redirect("addtodoform.html")
})

app.post("/add-todo",(req,res)=>{
    console.log(req.body)
    const task=req.body.task
    TODOS.push({task:task,completed:false})
    res.redirect("/all-todos")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

