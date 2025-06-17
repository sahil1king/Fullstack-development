//STRING

let str="this is a string";



let s=str.replace("is","in");
console.log(s)

let sa=str.replaceAll("is","in");
console.log(sa)

console.log(str[5])
console.log(str.charAt(5));

console.log(str.startsWith("is"))
console.log(str.endsWith("ing"))
console.log(str.includes("ri"))

str="this is a string";
let arr=str.split(" ")[0]
console.log(arr);
