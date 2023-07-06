/**
 * object destructure key based
 * 
 * whene we destrucure a object it most be need a valid key name otherwise undefined show
 */

let obj={
    name:"Prakash",
    email:"rohitsahoo866@gmail.com",
    mob:7750097143
}

let {email}=obj; //here email don't copy first value it depends upon key

console.log(email);


//we can destrure using rest operator
let {...rest}=obj;
console.log(rest); // print all key and value of a object