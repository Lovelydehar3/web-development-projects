// //////this is special keyword,kyuki jaise ki baaki saare keywords ki value ya unka nature same rehta hai this ka nature badal jata ,depend app ise kaha use kar rhe ho
// console.log(this)

// /////method the folowing structure is called method in which object contains a function and this keyword refered as object.
// let obj={
//     MyName:"heisnberg",
//     sayMyName:function(){
//         console.log(this.MyName)
//     }
// }
// obj.sayMyName()
// ////////event handler
// document.querySelector("h1").addEventListener("click",function(){
//     console.log(this)
  
// })
// /////global -> window
// /////function->window
// /////object or metod->object/value of object
// /////event ->element 
// /////class ->Blank object
// function callIt(a,b,c){
//     console.log(this,a,b,c)

// }
// callIt.call()
// callIt.call(obj);
// callIt.call(obj.MyName)
// callIt.call(obj,1,2,3)
// callIt.apply(obj,[4,5,6])////you can only send 2 argument so we use array
// let functi=callIt.bind(obj,7,8,9)////you need to save bind as variable so you can print this
// functi()

