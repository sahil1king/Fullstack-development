let num = prompt("enter a number : ")
console.log(num)

if(num==0){
    console.log("its zero")
}
else if(num<0) {
    console.log("less than zero")
} 
else if(num>0) {
    console.log("greater than zero")
}
else{
    console.log("its a word")
}


// (num==0?console.log("its zero"):num>0?console.log("greater than zero"):num<0?console.log("less than zero"):console.log("its a word"))
