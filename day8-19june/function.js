//Functions

    function fun(){
        console.log("Hello World! ")    //will console hello world
    }
    console.log(fun()) //will console undefined

    function fun2(){
        return 10+20;
    }

    console.log(fun2())     //will return 30

    function fun3(a,b){
        return a+b;
    }
    console.log(fun3(2,4))  //will pass the values to the arguments and it will return and console 6

    function fun4(a,b,c){
        return a+b+c;       
    }

    let res=fun4(1,2);      //didn't pass the value of c 
    console.log(res);       //will console NaN because c doesn't have a value (NaN - not a number)

    function fun5(a,b,c=0){     //passing in default arguments
        return a+b+c;       
    }

    let res1=fun5(1,2);      
    console.log(res1);

    function fun6(){
        return{
            name:"hello",
            work:"nothing"
        }
    }
    console.log(fun6())
    

    //Arrow Functions

    //let arr_res=arrowfun()   //will not work because it is arrow function's limitation
    let arrowfun = ()=>{
        console.log("this is arrow function")
        return "return from arrow function"
    }

    let arr_res=arrowfun()
    console.log(arr_res)

    let arrowfun2 = (a,b) => {
        console.log("this is arrow functions with arguments")
        return a+b
    }

    let arr_res2=arrowfun2(1,2)
    console.log(arr_res2)


    //functional overloading

    function func(a,b){
        return a+b
    }

    function func(a,b,c){
        return a+b+c
    }
    let res2=func(2,3,4)
    console.log(res2)

    function func(a,b,c,d){
        return a+b+c+d
    }
    let res3=func(1,2,3,4)
    console.log(res3)

    