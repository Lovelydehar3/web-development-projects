//////koi bhi code js mein line by line chalega aur ye natural  pattern bhi hota hai ko codoe line by line chale bu kabhi kabar aise cases ate hai life mein jaha par apka code wait krta hai and utni der me agla coede chal jaata hai

// console.log("hey 1");
// console.log("hey 2");
// setTimeout(function(){

//     console.log("hey 3");
// },3000)
// console.log("hey 4");
// console.log("hey 5");


/////sync:-jo line by line chale code 
/////async :jo jab chalne ke liye rady ho jaye tab chale
// console.log(Math.floor(Math.random()*10)*1000)
// let var1=(Math.floor(Math.random()*10)*1000)
// function iskoKalDekhenge(fnc){
//     setTimeout(fnc, var1);
//     // setTimeout(()=>
//     //     {
//     //         console.log(fnc)
//     //     },var1)
//     }


// iskoKalDekhenge(function(){
//     console.log("its pendulum babes")
// });
//////when function is sent as parameter is called callbacks

function profileLakerAA(username,cb){
    console.log("Fetching Data.....")
    setTimeout(() => {
        

        cb({_id: 121231,username,age:26,email:"Lovely@123dehar.gmail.com"})
    }, 3000);
}
function sarePostLekeAo(id,cb)
{
    console.log("Fetching posts.....")
setTimeout(()=>
{
cb({_id:id, posts:["hey","hi","there"]})
},3000)
}
function savedPostlao(id,cb){
     console.log("Fetching Saved posts.....")
    
setTimeout(()=>
{
cb({_id:id, saved:[123,123,333,324,432]})
},3000)

}
profileLakerAA("Lovely dehar ", function cb(data){
    console.log(data)
    sarePostLekeAo(data._id,function (posts){ 
        console.log(posts)

     savedPostlao(data._id,function(saved){
        console.log(saved)

    });
 });
});


