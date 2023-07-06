/**
 * 5. Pure functions
A Pure Function is a function (a block of code) that always returns the same result if 
the same arguments are passed.It does not depend on any state or data change 
during a program’s execution.
It only depends on its input arguments.
Pure function does not produce any observable side effects such as network requests or 
data mutation.If a pure function calls a pure function, this isn’t a side effect and 
the calling function is still considered pure.
 */

function pureFun(productprice){
    return productprice*10;
}
pureFun(13)
