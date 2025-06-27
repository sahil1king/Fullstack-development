const btnConatiner = document.getElementById("btn_container")
const container = document.getElementById("container")
const form=document.getElementById("todo-form")
const clearbtn=document.getElementById("clear")

container.addEventListener("click",async (e)=>{
    console.log(e.target)
    if(e.target.id=="delete"){
        const id=e.target.parentElement.id
        const res =await axios.delete(`http://localhost:4000/todo/${id}`)
        rendertodos(res.data.TODOS)
    }
    if(e.target.id=="complete"){
        const id=e.target.parentElement.id
        const res =await axios.put(`http://localhost:4000/todo/${id}`)
        rendertodos(res.data.TODOS)
    }
})

async function filtertodos(filter) {
    let res = await axios.get("http://localhost:4000/todo/filter",
        {params:{
            filter:filter
        }
})
    rendertodos(res.data.TODOS)
}

btnConatiner.addEventListener("click", (e) =>{
    if(e.target.id == "active" || e.target.id == "all" || e.target.id == "completed"){
        for(let btn of btnConatiner.children){
            btn.classList.remove("bg-green-500")
            btn.classList.remove("text-white")
        };
        e.target.classList.add("bg-green-500");
        e.target.classList.add("text-white");
    }
    if(e.target.id=="active"){
        filtertodos("active")
    }
    else if(e.target.id=="completed"){
        filtertodos("completed")
    }
    else if(e.target.id=="all"){
        filtertodos("all")
    }
})

form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const tasktext=e.target.children[0].value
    if(tasktext.trim().length == 0){
        alert("please enter a valid task")
        return
    }
    let response = await axios.post("http://localhost:4000/add-todo", {task:tasktext})
    e.target.children[0].value=""
    rendertodos(response.data.TODOS)
})

function rendertodos(todos){
    container.innerHTML=""
    for(let todo of todos){
        let div=document.createElement("div")
        div.className="flex w-[90%] justify-between border-2 border-gray-300 p-1 rounded mt-3"
        div.innerHTML=`${todo.task} <div id=${todo.id} class="flex gap-3 "> 
        <button id="complete" class="bg-green-500 px-3 py-1 rounded">
        ${todo.completed?"undo":"complete"}</button>
        <button id="delete" class="bg-red-500  px-2 py-1 rounded">Delete</button> 
        </div>`
        container.appendChild(div)

    }
}

clearbtn.addEventListener("click",async ()=>{
    let res=await axios.delete("http://localhost:4000/clear-complete")
    rendertodos(res.data.TODOS)
})

async function getalltodos(){
    let response = await axios.get("http://localhost:4000/all-todos")
    rendertodos(response.data.TODOS)
}

getalltodos()