let obje =
{
    "name":" Lovely dehar ",
    "Class": "CSE",
    "Roll NO": 2315143,
    age:19,
    height:5.4,
    hello :() =>{
        console.log("MAi hu papa, is duniya ka papa");

}
}
console.log(obje)
console.log(obje["name"])
obje.hello()
t=typeof(obje);
console.log(t);

// Array
 let arr=[1,2,3,4,52,2];
 let i=0;
 while(i<6){
 console.log(arr[i]);
 i++;
 }
 arr.pop();
 arr.shift();
 arr.unshift("lOvely dehar");
 arr.push(23);
 arr.push(32);
 console.log(arr);
 console.log(arr.slice(3,6));
arr.splice(1,3,"PApa");
console.log(arr);
let n=[1,3,4,6];

let l=n.map((number)=>
{
    return number*number;
})
console.log(l);

   n.map((number)=>
{
   console.log(number+1);
})

let x=[2,3,5,7,4,6,8];

let answer=x.filter((num)=>{
    if(num%2==0)
    {
        return true;
}
    else{
       return false;
    }

})
console.log(answer);
let answ=x.filter((nu)=>{
return nu%2==0;
})
console.log(answ);

let  y=[1,2,null,'Lovely','dehar',3]
let newa=y.filter((value)=>{
    if(typeof(value)=='string')
    {
        return true;
    }
    else{
        return false;
    }
}
)
console.log(newa);

// reduce
let a=[10,20,30,40];
let ansa=a.reduce((acc,curr)=>{
    return acc+curr;

},0)
console.log(ansa)

// Sort
let ar=[4,1,2,9,8,7,5,3]
ar.sort();
console.log(ar);
ar.sort()

console.log(ar.sort((a, b) => b - a));   // decending


console.log(ar.sort((a, b) => a - b));   // ascending

let newarr=[10,20,30];
// print
newarr.forEach((value,index )=> {
    console.log("Numer:",value ,"Index:",index);
    
});


for(let key in obje)
{
    console.log(key);
}
for(let key in obje)
{
    console.log(key," ",obje[key]);
}
let array=[1,2,3,4,5]
for(let value in array)
{
    console.log(value)
}

function Sum(aar){
    let len =array.length;
    let sum=0;
    for(let index=0;index<len;index++){
        sum=sum+array[index];
}
    return sum;
}
le=Sum();
console.log(le);
