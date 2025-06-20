//spread operator --to copy another object/arr values to new object/arr
    let person={
        name:"Sahil",
        age:19,
        skills:["js","react"]
    }

    let person2={
        ...person,
        profession:"dev",           
        home:"panipat"
    }
    console.log(person2)

    let numarr=[1,2,3,4,5,6]
    let numarr2=[...numarr,7,8,9]
    console.log(numarr2)

    let arr=[
        {
            name:"person 1",
            age:20,
        },
        {
            name:"person 2",
            age:17,
        },
        {
            name:"person 3",
            age:18,
        },
        {
            name:"person 4",
            age:16,
        },
        {
            name:"person 5",
            age:22,
        },
    ]

    //add a new key "id" &its value to every object

    //map method
    //map method is used to iterate over an array and return a new array with modified values

    arr=arr.map((obj,index)=>{                  
        return {
            ...obj,
            //name:"changed name",            //overwrite old key's value    
            id:index+1,                       //add new value
            salary:(index+1)*10000
        }
    })
    console.log(arr)

    //filter method
    //filter method is used to iterate over an array and return a new array with all elements that pass the test implemented by the provided function.

    let narr=arr.filter((person)=>{             
        return (person.age>=18)
    })
    console.log(narr)

    //reduce method
    //reduce method is used to iterate over an array and return a single value

    let ar=[1,2,3,4,5,6,7]
    let sum=ar.reduce((accum,num)=>{            //reduce method to sum
        return num+accum
    },0)
    console.log(sum)

    let mul=ar.reduce((accum,num)=>{            //reduce method to multiply
        return num*accum
    },1)

    console.log(mul)
    
    let salsum=arr.reduce((accum,iter)=>{
        return accum+iter.salary
    },0)
    console.log(salsum)

    //find method
    //find method is used to iterate over an array and return only the first element that satisfies the provided testing function.

    let result=arr.find((person)=>{
        return person.age<18
    })
    console.log(result)

    //foreach loop
    //forEach method is used to iterate over an array and execute a provided function once for each array element.

    arr.forEach(element=>{
        console.log(element)
    })