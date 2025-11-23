class User{
    constructor(name,address,email,username){

        this.name=name;
        this.address=address;
        this.email=email;
        this.username=username;
        this.role="User";

    }
checkrole()
{

    
        let h6=document.createElement("h1");
        h6.textContent="you are :"+`${this.role}`
        document.body.appendChild(h6);
            
        

}
    write(name,address,email,username){

        let h1=document.createElement("h1");
        let h2=document.createElement("h1");
        let h3=document.createElement("h1");
        let h4=document.createElement("h1");
        let h5=document.createElement("h1");

          h1.textContent="Name: "+this.name;
          h2.textContent="Adress: "+this.address;
          h3.textContent="Email: "+this.email;
          h4.textContent="USername: "+this.username;
          h5.textContent="Role: "+`${this.role}`;
          document.body.appendChild(h1);
          document.body.appendChild(h2);
          document.body.appendChild(h3);
          document.body.appendChild(h4);
          document.body.appendChild(h5);

    }

}
class Admin extends User{
    constructor(name,address,email,username){
    super(name,address,email,username)
    this.role="Admin"

    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }
}

let user1=new User("Lovely dehar ","Dirba","lovely123@gmail.com","lovelydehar")
let user2=new User("Lovely singh ","Baghrol","lovely12@gmail.com","lovelySingh")
let user3=new User("Lovely dehar ","Dirba","lovely123456@gmail.com","lovelyDIrbadehar")
let user4=new Admin("Lovely dehar ","Dirba","lovely123456@gmail.com","lovelyDIrbadehar")



//////prototypal Inheritence
let coffe={
    color:"red",
    drink:function(){
        console.log("Gawk Gawk Gawk")
    }

}
let newCoffe= Object.create(coffe)
console.log(newCoffe);
newCoffe.taste="Nooise";
console.log(newCoffe);
