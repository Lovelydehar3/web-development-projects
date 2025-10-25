// Math 
// we can use it to find min max 

pi=Math.PI;
console.log(pi);
console.log(Math.max(1,2,3,3,42,34234,34,234,1223,434));
console.log(Math.min(123,34,56,5567,343,4554));
console.log(Math.round(2.5));
console.log(Math.floor(1.4))//gives small nearset integer value
console.log(Math.ceil(1.4))//gives big nearset integer value
console.log(Math.abs(-4));
console.log(Math.random());
console.log(Math.sqrt(10));
console.log(Math.pow(2,3))



// Date Object 
// Used to play or work or  deal with dates
let cur=new Date();
console.log(cur);

let curr=new Date("November 15 2005 04:00");
console.log(curr);



let newdate= new Date(2005,10,15,4);
console.log(newdate);

console.log(newdate.getDay())

console.log(newdate.setDate(14));
console.log(newdate);

