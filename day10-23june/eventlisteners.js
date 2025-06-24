const h1=document.querySelector("h1")

h1.addEventListener("click",(e)=>{
    console.log(e)              // e is the event object that contains information about the event
    console.log(e.target)       // e.target is the element that triggered the event
    h1.classList.toggle("background")
    console.log("h1 clicked")
})

//event bubling
const input = document.getElementById("textInp")
h1.children[0].addEventListener("mouseover",(e)=>{
    e.stopPropagation()        // stops the event from bubbling up to the parent element
    console.log("span clicked")
    input.value=""
})


input.addEventListener("change",(e)=>{
    console.log(input.value)
    console.log(e.target.value)

})