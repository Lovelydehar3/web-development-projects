// //////////browser pe harkat event raise baby
// //////////we have to know how to handle an event

////////// const { createElement } = require("react");

// // ////////event listner
// function click()
// {
//     h1.style.color="red"
// }
// // let h1= document.querySelector("h1");
// h1.addEventListener("click",click)

// //////////select the para first
// //////////action choose karo jaise  click
// //////////phir function
// //


////////// //add event
// let p= document.querySelector("p");
// p.addEventListener("dblclick",function()
// {
//     p.style.color="green"
// })

// //////////remove event
// // h1.removeEventListener("click",click)
// // always try to create function sepate so while removing function isnt a problem



////////// // diiferent events

// let p1= document.querySelector("input")
// p1.addEventListener("input",function (dets){
//     if(dets.data!==null &&dets.data!==" ")
//     console.log("Email",dets.data," added sucessfully")
// })


////////// // change event tab chalta hai jab input select or area me change ho jaye

// let sel= document.querySelector("select");
// let he3= document.querySelector("#device")

// sel.addEventListener("change",function(dets)
// {
//     // console.log(dets.target.value)
//     he3.textContent=`${dets.target.value} Device is selected`

// })
// let b=document.querySelector("#inpu");
// let inp=document.querySelector("input");

// b.addEventListener("click",function(){
//     inp.click();

// })
// inp.addEventListener("change",function(dets){
    
//     const file=dets.target.files[0];
//     if(file){
//         b.textContent=file.name;
    
   
// }
// })
// let store=document.querySelector("form")
// let inputs=document.querySelectorAll("input")
// let main=document.querySelector("#main")
// let newCard=document.querySelector("#newCard")

// store.addEventListener("submit",function(dets)
// {
//  dets.preventDefault();
// //  let newCard=document.createElement("div")
// // newCard.classList.add("newCard")
// let card=document.createElement("div");
// card.classList.add("card");
// let profile=document.createElement("div");
// profile.classList.add("profile");
// let img=document.createElement("img");
// img.setAttribute("src",inputs[0].value);

// let h2=document.createElement("h2");
// h2.textContent=inputs[1].value;
// let h3=document.createElement("h3");
// h3.textContent=inputs[2].value;
// let p=document.createElement("p");
// p.textContent=inputs[3].value;




// profile.appendChild(img);
// card.appendChild(profile);
// card.appendChild(h2);
// card.appendChild(h3);
// card.appendChild(p);
// newCard.appendChild(card)


// console.log(card)

// });

// let mainnc=document.querySelector("#main");
// mainnc.addEventListener("mouseover", function(){
//     mainnc.style.backgroundColor="yellow"

// })
// mainnc.addEventListener("mouseout",function(){
//     mainnc.style.backgroundColor="red"
// })

// window.addEventListener("mouseover",function(dets)
// {
//     mainnc.style.top=dets.clientY + "px";
//     mainnc.style.left=dets.clientX + "px";


// })



//////event bubbbling


////// main div
///////nav div
/////////links
////////////button

// let na =document.querySelector("#nav")
// na.addEventListener("click",function(){
//     alert("try again please")
// })
// let ul=document.querySelector("ul")
// ul.addEventListener("click",function(dets)
// {
//     // dets.target.style.textDecorationLine="line-through"
//     dets.target.classList.toggle("li")

// })
// let neinput= document.querySelector("input")
// let sepa=document.querySelector("span")
// neinput.addEventListener("input",function()
// {
    

//     let left=20-neinput.value.length
//     if(left>0)
//     {
//     sepa.textContent=left
// neinput.style.color="blue"
// }
// else
//     neinput.style.color="red"


// })