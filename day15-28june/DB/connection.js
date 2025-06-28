const mongoose=require("mongoose")

async function connecTODB(){
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("DB connected")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports=connecTODB