/**
 * when we treat a function as a normal value like a varibale
 */

function aa(x){
    x()
}

aa(function(){console.log("i am first calss function")})