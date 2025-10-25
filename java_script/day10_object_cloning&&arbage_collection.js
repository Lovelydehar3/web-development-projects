
// // dynamic nature

// let obj={
//     age:12,
//     height:"143cm",
//     weight:"80Kg"
// }
// console.log(obj)
// obj.color="white";
// console.log(obj)



// // object cloning
// let a={
//     value:12,
//     height:"143cm",
// weight:"80Kg"
    
// }
// // by using ...
// let n={...a};

// console.log(n);

let newobj={
age_:20,
    height_:"143cm",
    weight_:"80Kg"

}


// // by usin object.assing
// let na=Object.assign({},newobj);
// console.log(na);

// let neww= Object.assign({},newobj,a)
// console.log(neww)

// // by using iteration

let  newdes={};

for(let key in newobj)
{
    console.log(key);
    let newkey=key;
    let newvalue=newobj[key];
    newdes[newkey]=newvalue;
    // create a clone
}
// console.log(a)
newobj.age_=25;
console.log(newdes);
console.log(newobj);


// Gabarae collector

// it is varbiale which if not deallowcated can cause memory leak use  delete or free 

//Memory leak when variable is not deallowcated it ocurrs memory we cant control memory leak 
