
// Objects

let person ={
    name:"Sahil",
    age:19,
    profession:"developer",
    skills:["soft skills","HTML","solidity"]
}

console.log(person.name)

        //two types of getting a key from objects
console.log(person.profession)
console.log(person["profession"])

//Arithmatics Operators
        //+, -, *, /, **
console.log(Math.pow(2,5))
console.log(2**5)
console.log(Math.sqrt(4))


//Conditional Operators
let a=10
let b="10"
if(a==b)
    console.log(true) //will console true only checks data

if(a===b)
    console.log(true) //will not console because === checkcs data type

if (a===b || a==b)
    console.log(true) // ||  OR operator so one of them should be true

if(a===b && a==b)
    console.log(true)  // && used so both should be correct will not console anything

if((a===b || a==b) || (a===b && a==b))   //true will be consoled after checking condition
    console.log(true)
else
    console.log(false)

if((a===b || a==b) || (a===b && a==b) && (a==b))   //true will be consoled after checking conditions
    console.log("true")
else
    console.log("false")

    //&& (and) has more priority than the OR (||)

//Ternary Operators
(a===b?console.log("true"):console.log("false"))

let result=(a==b?true:false)
console.log(result)

//chaining
    // (a==b?(a===b?console.log("a and b are of same data type")
    //     :console.log("a and b are of different data type")
    //     ):console.log("not equal"))


//Loops

    //For of Loop
    let arr=[1,2,3,4,5]
    for(let element of arr)
        console.log(element)

    for(let keys in arr)
        console.log(keys)

    //For in loop
    let person2={
        name:"Sahil",
        Course:"B.tech",
        RollNo:2401301059
    }

    for(let key in person2)
        console.log(key," --> ",person2[key])   //will not work in person2.key but instead have to use person[key]
