 /**
  * execution context is a container where the function's code is executed
    and it create when the function is called,it contains 3 things variable,function
    and lexical env;
    
    and lexical env derive us which data is accessble or not
  */

    function ab(){
        var a=28;
        function bc(){
            var b=9;
        }
    }

    //we can access 'a' in function 'bc' but we can't access 'b' inside 'ab' function that 
    //defined exactly lexical scope