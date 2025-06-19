//Higher Order Functions & Callback functions
    
    //Higher function -- when we pass a function as a arguments(parametres) to another function is called higher order funtion, the another
                         //function is higher order function

    function helper(){
        console.log("helper function is executing...")
        return 10;
    }

    function higherorder(fun){
        console.log("higher order executing...")
        let res = fun();
        return res+5                      //+(res)+5 will convert string into number and return 25
    }

    let result = higherorder(helper)
    console.log(result)

    // let result2 = higherorder(function(){           //function(){} -- is a anonymous function
    //     console.log("this is a anonymous function")
    //     return "20"
    // })     
    // console.log(result2)

    let result2 = higherorder(()=>{           
        console.log("this is a callback function")
        return "20"
    })     
    console.log(result2)
    

    function cd(a,b){
        console.log("call back executing...")
        return a+b
    }

    function parent(a,b,fun){
        console.log("higher order executing...")
        let sum=a+b
        let result=fun(sum,20)
        return result
    }

    let ans2=parent(10,20,cd)
    console.log(ans2)

    let arr=[1,2,3,4,5,6]

    function square(num){
        return num**2
    }

    function cube(num){
        return num**3
    }

    function arr_converter(array,fun){
        let ar=[]
        for(let element of array){
            let powVal=fun(element)
            ar.push(powVal)
        }
        return ar
    }

    let sqArr=arr_converter(arr,square)
    console.log(sqArr)

    let cubArr=arr_converter(arr,cube)
    console.log(cubArr)