const createUser=async()=>{
    let res=await axios.post("http://localhost:3000/user/create",{
        name:"axios",
        email:"axios@gmail.com",
        password:"123456"
    })
    console.log(res.data)
}

createUser()