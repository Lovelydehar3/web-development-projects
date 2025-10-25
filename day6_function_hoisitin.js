// function hoisting

    
    myNAme("lovely");
function myNAme(name){
    console.log(name);

}
// in var hoisting vaule doest move 
// console.log(a)
// var a=25;

//  using let and cons
// console.log(age);
// let age=25; cant possible 
// const age=25;
// console.log(n)
// let n=function  hel(){
//     console.log("hey hello guys");
// }


// let a={
//     "name":"lovely dehar",
//     "class":"Upper Class"
// }
// console.log(a);
//  class Human{

//  }
//  Human.h;

// FUnction CAll stack
function d(){
    console.log("hello Babes");
}
function c(){
    d();
}
function b(){
    c();
}
function a(){
    b();
}
a();
//  function is first class  citizen  in js

function reet(fnam,sname){
    console.log(fnam," ",sname);
    greet();
 
}
let greet= function (){
    console.log("hello again and again");
}
reet("Loely ","dehar")

function solve(numberr){
    return  function ( numberr){
        console.log("Square of ",numberr,"is",numberr* numberr )
    }
}
let ans=solve();
let fans=ans(4);

let greett = function(){
    console.log("Namste Duniya ")
}
greett();