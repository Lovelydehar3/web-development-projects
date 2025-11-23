////promises
//////app ek promise banaate ho jo ki do states me se ek state me ja skta hai and wo yaa to resolve hoga ya to reject hoga ab wo kya hoga wo toh wakt hi batayega par code to dono ke liye likhna padega

let pr=new Promise(function (res ,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
      
        if(rn>5) res("Resolved with " +rn)
            else rej("Rejected with " +rn)

    },3000)
});
pr.then(function (val){
  console.log(val);
})
.catch(function(val){
  console.log(val);
})