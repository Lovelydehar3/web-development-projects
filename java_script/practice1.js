
if(localStorage.getItem("theme"))
    {
document.body.classList.add(localStorage.getItem("theme"))

}
else{
    setDarkorLight()
}


window
.matchMedia("(prefer-color-scheme:dark)")
.addEventListener("change",function(){
    if(!localStorage.getItem("theme"))
{

    setDarkorLight();
}
})


let button=document.querySelector("#toggle-btn")
button.addEventListener("click",function(){
    if(document.body.classList.contains("dark"))
        {
          document.body.classList.add("light")
        document.body.classList.remove("dark")
        localStorage.setItem("Theme","Light")
        }
    else{
        document.body.classList.add("dark")
        document.body.classList.remove("Light")
        localStorage.setItem("theme","Dark")
    }
    
})
function setDarkorLight(){
    if(window.matchMedia("(prefer-color-scheme:dark)").matches){
        document.body.classList.add("dark")
        document.body.classList.remove("light")

    }
    else{

       document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}
setDarkorLight()
