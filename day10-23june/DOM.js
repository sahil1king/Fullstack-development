
// const allparagraphs = document.getElementsByTagName("p");
// console.log(allparagraphs)
// console.log(allparagraphs[1])

// const classelements=document.getElementsByClassName("para")
// console.log(classelements)

// const singleelement = document.getElementById("head2")
// console.log(singleelement)

// const elementsByquery = document.querySelector("p")  //-- for tag name
// console.log(elementsByquery)

// const eleByquery = document.querySelector(".para")  //-- for class name
// console.log(eleByquery)

// const eleByQ = document.querySelector("#head2")     //-- for id name
// console.log(eleByQ)

// const elemByquery = document.querySelectorAll(".para")      //-- can use querySelectorAll for everything
// console.log(elemByquery)

const container=document.getElementById("container")
// console.log(container.innerText)  // innerText gives the text inside the element
// console.log(container.textContent)  // textContent gives the text content of the element with the formatting preserved
// console.log(container.innerHTML)  // innerHTML gives the HTML inside the element

// // container.innerText="This is changed by <h1>JS</h1>"
// // container.innerHTML="This is changed by <h1>JS</h1>"

// console.log(container.id,container.className)
// container.className="background"

// container.setAttribute("id","containerBYJs")  
// console.log(container.id)

// elementsByquery.classList.add("cl5")        //will add the class to the designated tag
// elementsByquery.classList.remove("cl3")     //will remove the class from the designated tag
// elementsByquery.classList.toggle("cl3") //will toggle the class from the designated tag if present it will remove it, if not present it will add it

// console.log(elementsByquery.classList)

// console.log(container.children[1])  // gives all the child elements of the container
// console.log(container.children[1].parentElement)  // gives the parent element of the designated element
// console.log(container.children[1].nextSibling)  // gives the next sibling node of the designated element (can be text node)
// console.log(container.children[1].nextElementSibling)  // gives the next sibling element of the designated element
// console.log(container.children[1].previousElementSibling)  // gives the previous sibling element of the designated element

container.children[1].nextElementSibling.innerText="This is changed by JS"   //accessing the next sibling element and changing its text

const val ="hello paragraph";
const div=document.createElement("div"); //creating a new div element
div.className="cl1 cl2";
div.id="dynamic-container";
div.innerHTML=`<p>${val}</p> <p>${val}2</p>`;



container.append(div)   // will add the div at the end of the container         last+1 index
container.prepend(div) //will add the div at the beginning of the container     at zero index

container.after(div) //will add the div after the designated element
container.before(div) //will add the div before the designated element
console.log(div);