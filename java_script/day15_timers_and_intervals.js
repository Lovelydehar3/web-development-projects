let tm=setTimeout(function(){
    console.log("hello bhai sahab kaise ho")
},5000)
clearTimeout(tm);
let count=  10;
let interval=setInterval(function(){

    if(count>=0)
    {
        console.log(count);
        --count;

    }
    else{
        clearInterval(interval);
    }
},1000)

let progress=document.querySelector(".fill");
let progressbar=document.querySelector("#percent")
let text=document.querySelector(".text")
let seconds=5;
let countt=0;
let time= setInterval(function(){
    if(countt<=99)
    {
        countt++;
        progress.style.width=`${countt}%`;
        progressbar.textContent=countt+"%";

       
      
        
    }
    else{
          text.textContent="Downloaded"
         clearInterval(time)

    }

},(seconds*1000)/100)