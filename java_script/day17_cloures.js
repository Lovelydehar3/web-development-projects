// //////scope hai  ke app apne created variables and functions kaha tak use kar skte hai

// function abcd(){
//     var a=12;
//     console.log(a)
//     defg()
//     function defg(){
//         console.log(a)
//     }
// }
// abcd()

// /////lexing scoping

// ///////closures hote hau function jo ki  kisi parent ke  andar ho aur andar wala function return ho rha hai and andar wala fucntion parent function ke varable ko use kare

// function abc(){
//     let var1=122;
// return function ()
//     {
//         let var2=var1+var1;
//         console.log(var2)
//     }
// }
// let aa=abc();
// aa()


// function neww(){
//     let c=0;
//     return function newww(){
//         c++;

//         console.log(c);

//     }
// }
// let fn=neww()
// fn();
// fn();
// fn();
// fn();
// let fun=neww()
// fun();
// fun();
// fun();
// fun();


// function ClickLimiter(){
//     let click=0;
//     return function()
//     {
//         if(click<5){
//             click++;
//         console.log("Clicked :", click);
//     }
//     else
//     {
//         console.error("Enough Clicked ")
//     }
// }
// }
// let func=ClickLimiter();
// func();
// func();
// func();
// func();
// func();
// func();

function createToaster(config){
    return function(str){
        let div=document.createElement("div");
        let child=document.querySelector(".child")
        div.className=`child inline-block ${config.theme==="dark"?"bg-gray-800 text-white":"bg-gray-800 text-black"}  px-6 py-3 rounded shadow-lg pointer-events-none `;
        if(config.positionX!=="left"|| config.positionY!=="top")
        {
document.querySelector(".parent").className+=`${config.positionX!=="right"?" right-5":"left-5"} ${config.positionY!=="bottom"?"bottom-5":" top-5"}`;

        }
        div.textContent=str;
        document.querySelector(".parent").appendChild(div)
        setTimeout( function(){
           document.querySelector(".parent").removeChild(div)
        
           
        },config.duration*1000)
    }

}
let toast=createToaster({
    positionX:"left",
    positionY:"top",
    theme:"light",
    duration:3,

});
toast("Hello its Lovepreet Here!");
setTimeout(function(){
    toast("hey Hello its Lovepreet Here!")

},2000)