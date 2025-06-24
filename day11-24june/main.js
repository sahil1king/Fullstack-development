localStorage.setItem("Name","Sahil")
console.log("name: ",localStorage.getItem("Name"))

const obj={
    name: "Sahil",
    arr:["1",2,3,4,5]
}

localStorage.setItem("obj",JSON.stringify(obj))

console.log("storage -",localStorage.getItem("obj"))
let storedobj=JSON.parse(localStorage.getItem("obj"))
console.log(storedobj)
