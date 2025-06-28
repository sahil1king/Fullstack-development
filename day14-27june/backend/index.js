const express=require("express")
const app=express()
const PORT=3000
const path=require("path")
const mongoose =require("mongoose")
const { error } = require("console")
const { type } = require("os")
require('dotenv').config()


app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log(error)
})

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    age:{
        type:Number,
        min:15,
        max:125
    },
    availabel:{
        type:Boolean,
        default:false
    },
    arr:[
        {
            type:String,
        }
    ]
})

const user=mongoose.model("user",userschema)

app.get("/create", async(req,res)=>{
    try{
    let newUser = await user.create({
        name : "sahil",
        email: "sahil@gmail.com",
        arr : ["hi", "hello"]
    })
    console.log(newUser)
    res.json({newUser})
    }catch(error){
        res.status(400).json({message:error.message})
        console.log(error)
    }
})

app.get("/users",async(req,res)=>{
    try{
        let users=await user.find()
        res.status(200).json({users})
    }catch(error){
        console.log(error)
        res.status(400).json({message:error.message})
    }
})

app.get("/update/:id",async (req,res)=>{
    try{
        const id=req.params.id
        await user.updateOne({_id:id,name:"Sahil Bhardwaj"})
    }catch(error){
        res.status(400).json({message:error.message})
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
