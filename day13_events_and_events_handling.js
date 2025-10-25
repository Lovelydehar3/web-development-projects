//browser pe harkat event raise baby
//we have to know how to handle an event

// event listner
function click()
{
    h1.style.color="red"
}
let h1= document.querySelector("h1");
h1.addEventListener("click",click)

//select the para first
//action choose karo jaise  click
//phir function
//


//add event
let p= document.querySelector("p");
p.addEventListener("dblclick",function()
{
    p.style.color="green"
})

//remove event
h1.removeEventListener("click",click)
//always try to create function sepate so while removing function isnt a problem



// diiferent events

let p1= document.querySelector("input")
p1.addEventListener("input",function (dets){
    if(dets.data!==null &&dets.data!==" ")
    console.log("Email",dets.data," added sucessfully")
})


// change event tab chalta hai jab input select or area me change ho jaye

let sel= document.querySelector("select");
let he3= document.querySelector("#device")

sel.addEventListener("change",function(dets)
{
    // console.log(dets.target.value)
    he3.textContent=`${dets.target.value} Device is selected`

})