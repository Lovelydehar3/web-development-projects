// // loops & string
// for(let i=0;i<=3;i++)
// {
//     console.log("I am the king babes")
// }
// for(let j=5;j>=1;j--)
// {
// console.log(j);
// }
// console.log("new");
// i=0;
// while(i<=5){
//     console.log(i);
//     i++;
//     if(i==3)
//     {
//         break;
//     }
// }
for(let i=0;i<=3;i++)
{
    console.log(i);
    if(i==2)
    {
        continue;
    }
    else{
        console.log("yeah")
    }

}
let n=5;
do{
console.log(n);
n++;
}while(n>6)

// strings
let name="lovely ";
let seconf="dehar";
console.log(typeof(name))


let strn= `lovly dehar ain 
dying that easily babes 
you cant let 
me die
ha 
aha`;
let namee =new String("KIng Lovely ");
console.log(namee);

let op="mohit";
let opp=" Yodha";
console.log(op+ opp);
console.log(op.length)
console.log(op.toUpperCase())
// Sub Stringing

let str1= "LOVELY";
console.log(str1[2]);
console.log(str1.substring(0,4));
let sen="hey are you using  whatsapp!";
let newstr= sen.split(" ");
console.log(newstr)
