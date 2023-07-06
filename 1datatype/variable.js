//variable is like a container using variable we can store num,string,array,object etc.
//javascript is  dynamically type because we can change variable "type" in runtime.
//in javascript there are 3 type of variable
//let,var,const

/* var:-
 var-is also known as global variable,hoisting happens in var and
 we can redeclare and re-assign the value in var
 it's oldest variable means before ES6 it's use know it replace by let
 
 */

var a=10;
console.log(a); //output 10
var a=12 //here a redeclare
console.log(a);//output will 12 
a=19
console.log(a);//update a value

{
    var name="prakash";
    console.log(name);
}
console.log(name);  //name is declare in blockscope but we can access it out of block


//let :-
//let-is also known as functional scope or block scope,hoistion not happen
//we can reassign the value of let we can't redeclare it again     
//hoisting not happen in let  

let b=10;
console.log(b)//output 10
b=15
console.log(b) //we can update let value but we can't redclare
{
    console.log(b)//we can access the outer side declare varible 
    let sname="sahoo";
    console.log(sname);
}
 //console.log(sname); //we can't access the value from the block scope



//const:-
/**
 * we can't update and redclare in const
 * hoisting not happen in constant
 */

const c="constant";
console.log(c);

//question-1:
//create a varibale of type string and try to add numbr to it

let num="23";
let num2=6;
let add=num+num2
console.log(add)

//q2. find typeof the add from above

console.log(typeof(add))

//q 3. can a cost of object in js can you change it to hold a number letter.--> ans :no




