const btnContainer = document.getElementById("btn-container")
const form = document.getElementById("todo-form");
const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click",async ()=>{
    let res = await axios.delete("http://localhost:4444/clear-complete");
    renderTodos(res.data.Todos);
})

container.addEventListener("click",async (e)=>{
    if(e.target.id=="delete"){
        const id = e.target.parentElement.id;
        const res = await axios.delete(`http://localhost:4444/todo/${id}`)
        renderTodos(res.data.Todos)
    }
    if(e.target.id=="complete"){
        const id = e.target.parentElement.id;
        const res = await axios.put(`http://localhost:4444/todo/${id}`)
        renderTodos(res.data.Todos)
    }
})

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const taskText = e.target.children[0].value;
    if(taskText.trim().length==0){
        alert("Please enter valid task");
        return;
    }

    let result = await axios.post("http://localhost:4444/add-todo",{task:taskText});
    e.target.children[0].value = "";
    renderTodos(result.data.Todos);
})

function renderTodos(todos){
    container.innerHTML="";
    for(let todo of todos){
        let div = document.createElement("div");
        div.className = "flex w-full justify-between border p-2 rounded-md"
        div.innerHTML = `${todo.task} <div id=${todo._id} class="flex gap-2">
            <button id="complete" class="bg-green-500 px-3 py-1">
            ${todo.completed?"Undo":"Complete"}
            </button>
            <button id="delete" class="bg-red-500 px-3 py-1">Delete</button>
        </div>`
        container.append(div);
    }
}

async function getAllTodos(){
    let res = await axios.get("http://localhost:4444/all-todos");
    renderTodos(res.data.Todos)
}

getAllTodos();

async function filterTodos(filter){
    let res = await axios.get("http://localhost:4444/todo/filter",{
        params:{
            filter:filter
        }
    });
    renderTodos(res.data.Todos)
}
btnContainer.addEventListener("click",(e)=>{
    if(e.target.id=="active" || e.target.id=="all" || e.target.id=="completed"){
        for(let btn of btnContainer.children){
            btn.classList.remove("bg-green-500")
            btn.classList.remove("text-white")
        };
        e.target.classList.add("bg-green-500");
        e.target.classList.add("text-white");
    }
    if(e.target.id=="active"){
        filterTodos("active")
    }else if(e.target.id=="completed"){
        filterTodos("completed")
    }else if(e.target.id=="all"){
        filterTodos("all")
    }
    
})