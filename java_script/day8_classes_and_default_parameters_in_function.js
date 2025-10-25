class Human{
//     age=20;
// #wt=100;
// ht=173;
age;
#wt;
ht;
constructor(newAge,Height,newWeight){
    this.age=newAge;
    this.ht=Height;
    this.#wt=newWeight;
}
walkking(){
    console.log("i am waling",this.#wt);
}
running(){
    console.log("i am running ");
}

// Getter and Setter
get waluee(){
    return this.#wt;
}
set value(n){
    this.#wt=n;
    
}
}
let obj =new Human(19,143,75);
console.log(obj.ht)
obj.walkking();
console.log(obj.waluee)

// Default Parameter
// this alow to use function with default value 

function sayname(myname="Lovepeet Singh"){
    console.log("My name is",myname)
}

sayname("Lovely dehar");


function nameAgain(firs="love",sec="dehr"){
    console.log("My name is",firs,sec);

}
nameAgain("Parja","Pati")
function solve(value={"age":13,"Height":"143cm"}){
    console.log("Hello Jii",value);

}
solve("bhai")

function solvve(value={"age":13,"Height":"143cm"}){
    console.log("Hello Jii",value);

}
solvve(null)

function solvee(value={"age":13,"Height":"143cm"}){
    console.log("Hello Jii",value);

}
solvee(undefined)


function getAAge(){
    return 180;
}

function  ut(namee,age =getAAge()){
    console.log(namee," ",age)

}
ut("shubh")
