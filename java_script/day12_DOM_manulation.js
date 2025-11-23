// let study hard buddy
//window

// DOM
//document object model

// window
// object is main parent

//BOM is browser  object model
// browser ke sath communicate

//lets code
//Access
//multiple object

//inner HTML
// its used to set new tages in html page
// get set can are  the properties of inner Html

//outer HTML


//text contact
// also use to set and get elemetnt
//inner text

//let n=document.querySelector("#ye");
// undefined
// n
// <div id=​"ye">​…​</div>​
// let n=document.createElement("h2");
// undefined
// n
// <h2>​</h2>​
// n='hello';
// 'hello'
// let n=document.createElement("h2");
// undefined
// n.textContent="hello pendulum";
// 'hello pendulum'
// n
// <h2>​hello pendulum​</h2>​

//
// ✅ Test JS loading first
console.log("✅ JS file loaded successfully!");

// Simple variable test
let a = 12;
let b = 12;
console.log("b =", b);
a = a + 3;
console.log("a =", a);

// DOM Manipulation
let addDiv = document.getElementById("add");
console.log("addDiv:", addDiv);

// Fixed querySelector for class "ne"
let s = document.querySelector(".ne");
console.log("s:", s);

// Accessing h1
let f = document.querySelector("h1");
console.dir(f);

let h1=document.querySelector("h1")
h1.textContent="this one is different";


let hey=document.querySelector("#hj");
console.dir(hey)
hey.outerText="let end debbate"

//innerHTML changes html(in browser  only you can write like this <p>hey</p> in innnerHTML)
let z=document.querySelector("a")
z.setAttribute( "href","https://www.google.com")

let img= document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1761165308103-c58782f27c59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500")



// create Element
//append after jst body tag or prepend before end of body
let h2=document.createElement("h2");
h2.textContent="hello bhailog";
console.log(h2)
document.body.append(h2);

// remove element
let hf=document.createElement("h1");
hf.textContent="MAi hu JiAAAAn mai hu bada takatvar"
document.querySelector("#add").append(hf);


// manuplate css 
let hh=document.querySelector("h1");
hh.style.color="blue";
hh.classList.add("ne")


// let list=document.querySelectorAll("li")
// list.forEach(function(val){
//     console.log(val.textContent)

// })


let lis=document.querySelectorAll("li")
for(let i=0;i<lis.length;i++)
    {

        console.log(lis[i].textContent)
    }



    let  divi=document.querySelector("div");
    divi.setAttribute("title","its lorem page");


    let bt=document.querySelector("button");
    bt.removeAttribute("disabled")


    let nl=document.createElement("li");
    nl.textContent="app7"
    document.querySelector("ul").append(nl)


    let nimg=document.createElement("img");
    nimg.setAttribute("src","https://images.unsplash.com/photo-1761165308103-c58782f27c59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500");

    document.querySelector("div").append(nimg)
    nimg.classList.add("pleaceholder")
    let lii=document.querySelector("li");
    lii.remove(lii)

   nl.style.backgroundColor="red";

   let li=document.querySelectorAll("ul li:nth-child(2n)")
    li.forEach(function(elem){
   elem.classList.add("color")
    });


    let p=document.querySelectorAll("p");
    p.forEach(function (elem){
        elem.style.fontSize="18px"




    });