////

function createBiscuits(){
    this.name="parleG";
    this.price=10;
    this.qty=8;
    this.company="parle";
    this.category="regular";
}
let new1 = new createBiscuits();


function createBiscuits1(name,price,qty,company,category){
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.company=company;
    this.category=category;
}
let new11 = new createBiscuits1("parleG",10,17,"hw","ndje");
let new12 = new createBiscuits1("oreo",20,15,"OReo","yahhh");
let new13 = new createBiscuits1("Fantsey",10,17,"Fantsey","nadia");


function Pencils(name,price,color){
    this.name=name;
    this.price=price;
    this.color=color;
    // this.write=function(){
    //     let h1=document.createElement("h1");
    //     h1.textContent=name ;
    //     h1.style.color=color;
    //     document.body.appendChild(h1);
    // }
}
////agar hun add lrde as  protype field to voh varbale like company  sabhi objects me automatically aa jayegi for example
//----> Pencils.prototype.company="HustleHuze.store";
// ////yeah rahi example
////
/////////// Pencils {name: 'Nakli Natraj', price: 10, color: 'Blue', write: ƒ}
/////////// color
// /////////: 
/////////// "Blue"
// /////////name
/////////// : 
// /////////"Nakli Natraj"
// /////////price
///////////////// : 
// /////////10
///////////////// write
///////////////// : 
///////////////// ƒ ()
///////////////// [[Prototype]]
///////////////// : 
/////////// Object
// /////company
// ////: 
// /////"HustleHuze.store"
Pencils.prototype.write=function(name,price,color){
        let h1=document.createElement("h1");
        let h2=document.createElement("h1")
        h1.textContent="Name:"+this.name ;
        h2.textContent="Price:"+this.price ;
        h1.style.color=this.color;
        h2.style.color=this.color;
        document.body.appendChild(h1);
        document.body.appendChild(h2);
    }

let new21 = new Pencils("Natraj",10,"black");
let new22 = new Pencils("Doms",20,"Red");
let new23 = new Pencils("Nakli Natraj",10,"Blue");



