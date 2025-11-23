class CreatePen{
    constructor(name,color,price,company){
        this.name=name;
        this.color=color;
        this.price=price;
         this.company=company;


    }
    erase()
{
    document.body.querySelectorAll("h1").forEach((elem)=>{

        if(elem.style.color===this.color)
    {
        elem.remove();
    }
    });

}

}

CreatePen.prototype.write=function(name,color,price,company){
    let h1=document.createElement("h1");
    let h2=document.createElement("h1")
    let h3=document.createElement("h1")
    h1.textContent="Pencil Name: " +this.name;
    h2.textContent="Price: "+this.price;
    h3.textContent="Company: "+this.company;
    h1.style.color=this.color;
    h2.style.color=this.color;
    h3.style.color=this.color;
    document.body.appendChild(h1)
    document.body.appendChild(h2)
    document.body.appendChild(h3)


}
let Pencil1= new CreatePen("Natraj","black", 10,"Natraj")
let Pencil2= new CreatePen("Apsara","yellow", 20,"Apsara")
let Pencil3= new CreatePen("Flair","green", 40,"Flair")
let Pencil4= new CreatePen("Doms","blue", 13,"Doms")
let Pencil5= new CreatePen("Nakli Natraj","red", 5,"Nakli Natraj")
