console.log("Print hello!")

// let a=5;
// {
//     console.log(a); // will give error because consoled before declaring in bloack{}
//     let a=20; 
//     console.log(a);
// }
// console.log(a);

var b=5;
{
    console.log(b); 
    var b=20;       // will change the global value because block doesn't work on var
    console.log(b);
}
console.log(b);


//can console the variable before decaring it 
console.log(temp);  //will give undefined 
var temp = "this is temp";
console.log(temp)


//can not console the variable before declaring it 
//console.log(temp2);    // dead temporal zone (unless it is assigned a value)
let temp2 = "this is temp 2";
console.log(temp2);