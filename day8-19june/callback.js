let arr=[1,2,3,4,5,6,7,8,9,10]

//Mapping -->

    //square by map function

    function square(num){
        return num*num
    }

    let sqArr=arr.map(square)
    sqArr=arr.map(function(num){
        return num*num
    })
    sqArr=arr.map((num)=>{
        return num*num
    })
    console.log(sqArr)

//<<============================================================================>>

    //cube my map function
    function cube(num){
        return num**3
    }

    let cuArr=arr.map(cube)
    cuArr=arr.map(function(num){
        return num**3
    })
    sqArr=arr.map((num)=>{
        return num**3
    })
    console.log(cuArr)

//Filter --> to get specific element on the basis of condition

function odd(num){
    return (num%2==1)
}

let oddarr=arr.filter(odd)
console.log(oddarr)

function even(num){
    return (num%2==0)
}

let evenarr=arr.filter(even)
console.log(evenarr)