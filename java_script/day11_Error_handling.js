// Error handling
// it is used to overcome or for fixing error in our code
//errors  are events  which are resposible for resistence in code output or we can say problems which stops code for working

//there is two kind of error exist 
//1.compile time error
//Compile time error can easily detected by compiler or code editor before execution we can fix it before exection
// example console.log(x;

// 2.run time  error 
//Run time error cant easily detected by compiler or code editor before execution, we cant fix it before exection we have to 
// for  example
//console.log(2/0);

try{
    console.log("Yeah! we are fixing it  without any cause yeah")
    // // console.log(x);
    console.log("be are not one ind brother")
}
catch(y){
    console.log("is not define pleasee define first ")
    console.log("your erreor",y)
}

// finally Block
// its always run if occures or not occurs
finally{
    console.log("i am ing you cant stop me to execute")
}

// throw
// it used to make custom errors so it is also very important 
// let make our first custom error


try{

    console.log(f);
}
catch(erro){
    throw new Error("Declare krde pehle bhai ")

}