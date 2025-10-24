function heloo()
{
console.log("I am Pendulum");
}
function Sequare(a)
{
    console.log(a*a);
}
function sum(a,b){
  let newsum=a+b;
  return newsum;
}
function GetMyName(fisrtname , secondname)
{
    let fullname= fisrtname+" "+secondname;
    return fullname;

}

heloo()
Sequare(3)
sum(5,6)
let umm= sum(1,2);
console.log(umm);
let nme= GetMyName("Lovely","Dehar" );
console.log("Full Name",nme)
 
const Three_power= function(num)
{
    return num*num*num;
}
console.log(Three_power(4));

// Arrow Function

const multip = (x,y)=>
{
let ans =x*y;
return ans;
}
console.log(multip(2,7));
