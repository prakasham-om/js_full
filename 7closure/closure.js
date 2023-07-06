/**
 * You may nest a function within another function. The nested (inner) function is private 
 to its containing (outer) function.
It also forms a closure.
The inner function contains the scope of the outer function.
The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables
of the outer function, while the outer function cannot use the arguments and variables of
the inner function.
 */
 

function outer(x){
    var z=18;
   
    function inner(y){
        console.log(x+y+z);
    
        
        
    }
    return inner
    
}

const clsr=outer(5)(78)



// ex-2

