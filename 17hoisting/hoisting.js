/**
 * hoisting is a mechanism in javascript which take declaration of variable or
    function to top of the code
    
    var is only keyword where hoisting happen and named function also
    let and const block type so hoisting not happen and one error will come that 
    is 'temporary dead zone'
 */

    b=10;
    console.log(b); //10
    var b;
    //in the above code 'var b' will shift the top of the code

    console.log(x); //undefined
    var x=9;
/**
 * in the above code we will get undefined because
 * console.log(x)
 * var x=9; the execution code will this type so x didn't get any value
            {
                var x;
                console.log(x);
                x=9;
            }
 */
    
    //for function
 
    super_man()  //here we called a function which is not defined but it give out put
   function super_man(){
    console.log("super man have four hand and 10 heads");
   }


