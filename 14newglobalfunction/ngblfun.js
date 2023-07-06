/**
 * the two new global function are 
 * isFinite and isNaN
 * 
 * isFinite():=return true/false value ,it return true if number other wise false
 * isNaN:will show false when it get number
 * 
 * 
 */

let finite=isFinite(10);
console.log(finite);//true
let finite1=isFinite("a"); //string as argument is always false
console.log(finite1);//false
let finite2=isFinite(undefined); //undefined as argument is always false
console.log(finite2);//false
let finite3=isFinite(b={num:28}); //object as argument is always false 
console.log(finite3);//false


let nan=isNaN(10)
console.log(nan)//false
let nan1=isNaN("A") // when we put argumrnt except num it always give true
console.log(nan1)//true  