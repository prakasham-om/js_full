/**
 imp* A JavaScript function is a block of code designed to perform a particular task.and we can create it once 
   use multiple times in a program file with different value
   we passed aruments and parameter in function
   argument=value passed by function
   parameter=store that value like a variable *****
  
Types of functions in javascript?
1.Named function / function declaration
2.Anonymous function / function expression
4.Immediately invoked function expression. It runs as soon as the browser finds it.
5.Arrow function
Named function :
Named function is the function that we define it in the code and then call it whenever
 we need it by referencing its name and passing some arguments to it. 
 Named functions are useful if we need to call a function many times to pass different values
to it or run it several times.

Here is an example:
write a function name is findOddEven that accept a number abd return
if num is even :even or number is odd:odd
 */

function findOddEven(number){
    (number % 2==0 ) ? console.log("even") :console.log("odd")
}
findOddEven(37)




/**
 * Anonymous function / function expression 
The anonymous functions don’t have names.
They need to be tied to something: variable or an event to run.
 */

let findoddeven=function (number){
    (number % 2==0 ) ? console.log("even") :console.log("odd")
}
findoddeven(84)

/*IIFE

Invoked function expression runs as soon as the browser encounters it.
The benefit of this function is that it runs immediately where it’s located 
in the code and produces a direct output. That means 
it is unaffected by code which appears further down in the script which can be useful.
*/

let iif=(function (){
    console.log("my name is Rohit")
})();


/*Arrow Function:Arrow function must have a return statement and it's similar like 
function expression because we ned to to a variable to declare arrow fun

Arrow functions don’t have their own bindings to this, arguments or super, 
and should not be used as methods.

Arrow functions don’t have access to the new.target keyword.

Arrow functions aren’t suitable for call, apply and bind methods, which generally 
rely on establishing a scope.

Arrow functions cannot be used as constructors.
Arrow functions cannot use yield, within its body.

ex-    const arrowfun=()=>{
       console.log("i am arrow fun")
      }
      arrowfun();


If the function has only one statement, and the statement returns a value, 
then we can remove the brackets and the return keyword.

ex{- const squarenum=(num)=>num*num}

*/


//create a function constructor without closure
 var x=30;
 function functionconstructor(){
    var x=29;
    return new Function ('return x' ) 

 }
 functionconstructor();