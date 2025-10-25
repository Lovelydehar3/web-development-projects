// // Variable scoping
// // global Function and Block

// // Global Scope 



// // we can use it anywhere
var age= 15;
console.log(age)

{
console.log(age)
}
if(age<20)
{
  
console.log("hello",age)
}
function sayhello(){
console.log("sya",age)
}
sayhello()


// // // Function Scope
// // // not useable everywhere

function newWorld(){
    var fname="earth";
    console.log("hello ",fname);

}
// newWorld();
//    console.log("hello ",fname);


// //Block Scope
{
    var neew_age=6;


}
    console.log(neew_age)

    // console.log(neww)
let neww=23;
