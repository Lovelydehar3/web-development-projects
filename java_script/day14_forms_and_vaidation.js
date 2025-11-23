// let nam=document.querySelector("#name");
// let form=document.querySelector("Form")
// let small=document.querySelector("#hid")
//  form.addEventListener("submit",function(dets)
// {
//     dets.preventDefault();
//     if(nam.value.length<=2)
//     {
//         small.style.display="initial"
//     }
//     else{
//         small.style.display="none"
//     }
// })
// let email = document.querySelector("#email").value;

// let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// form.addEventListener("submit", function(){
//     let test=regex.test("lovepreetsingh73437@gmail.com")
//     console.log(test)
   

// })

let email= document.querySelector("#email");
let password= document.querySelector("#password");
let form=document.querySelector("form");


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


form.addEventListener("submit", function(dets){
    dets.preventDefault();
    let emailvalidation=emailRegex.test(email.value);
    let passwordvalidation=passwordRegex.test(password.value);
    let isValid=true;

    if(!emailvalidation)
    {
        
     document.querySelector("#emailerror").style.display="initial"
     isValid=false;

    }
    else{
         document.querySelector("#emailerror").style.display="none"
    }



     if(!passwordvalidation)
    {
        document.querySelector("#passworderror").style.display="initial"
        isValid=false;
    }
else{
    document.querySelector("#passworderror").style.display="none"

}

if(isValid==true)
{
    let result=document.querySelector("#result");
    result.textContent="Everything is valid"
    console.log(result)
}
})

console.dir(email)