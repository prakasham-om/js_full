/**
 * A higher-order function is any function that takes one or more functions as arguments,
  which it uses to operate on some data, and/or returns a function as a result.
  
Higher-order functions are meant to abstract some operation that is performed repeatedly.

  The classic example of this is map, which takes an array and a function as arguments.
  map then uses this function to transform each item in the array, returning a new array 
  with the transformed data.
 */

  
function counters(){
  let i=0; 
//console.log(i)
   return function order(){
      
     i++;
     console.log(i)
     

  }
 
}
const counter=counters()

counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();