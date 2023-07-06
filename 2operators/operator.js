/**
 * in javascript operator are used to doing operation like mathematic or compare value
 * ex:
 * arithmetic op->+,-,*,/,%,++,--
 * assignment op: =,+=,-=,*=,/=,%=
 * 
 * comparison op: ==,!=,===,!==,>,<,>=,<=,?
 * 
 * logical operator :  &&,||,!
 * 
 */

//arithmetic
let a=10;
let b=15;
console.log(a+b) //+ op
console.log(a-b) //- op
console.log(a*b) //* op 
console.log(a/b) //(/) op 
console.log(a%b) //% op
console.log(++a,--a)// prefix op
console.log(a++,a--)//postfix op

//assignment
 let c=3;
 c+=6;
 console.log(c)


//comparison op

// == is follow obstract type === follow strict if both are same then it will execute

let x=10,y=19;
if(x!=y){console.log("true comapre")}

let z=10;
if(z===a){console.log("a & z are equal")}