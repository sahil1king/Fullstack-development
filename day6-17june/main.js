console.log("Print hello!")

// let a=5;
// {
//     console.log(a); // will give error because consoled before declaring in bloack{}
//     let a=20; 
//     console.log(a);
// }
// console.log(a);

// var b=5;
// {
//     console.log(b); 
//     var b=20;       // will change the global value because block doesn't work on var
//     console.log(b);
// }
// console.log(b);


//can console the variable before decaring it 
// console.log(temp);  //will give undefined 
// var temp = "this is temp";
// console.log(temp)


//can not console the variable before declaring it 
//console.log(temp2);    // dead temporal zone (unless it is assigned a value)
// let temp2 = "this is temp 2";
// console.log(temp2);

// let arr=[1,2,3,"item 4",true,null,undefined]
// let twodarr=[[1,2,3],[4,5,6]]
// console.log(arr)
// console.log(arr[4])
// console.log(twodarr)
// console.log(twodarr[1][1])


//arr methods

//add item at beginning
arr1=[1,2,3,4,5]
arr1.unshift(0);
console.log(arr1);

//deletes first element 
arr1.shift();
console.log(arr1);

//breaks the array take arguments as index of starting and ending will return sub-array
arr2=[1,2,3,5,6,7,8,9]
let subarr=arr2.slice(1,5);
console.log(subarr);

//it gives three functionality -- deletes from any place, add element in between, replace element from array
//to delete from array
let a=arr2.splice(4,2);
console.log(a)
console.log(arr2)

//to add in Array
let ab=arr2.splice(1,0,10);
console.log(ab);
console.log(arr2)

let straa=arr2.toString();
let stra=arr2.join(" ");
console.log(stra)
console.log(straa)