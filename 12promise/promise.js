/**
 * A promise is an object that may produce a single value some time in the future: 
 * either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
 *  A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise
 *  users can attach callbacks to handle the fulfilled value or the reason for rejection.
 * 
 * 
 * 
 * A promise is an object that may produce a single value some time in the future: either
 *  a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise
 *  users can attach callbacks to handle the fulfilled value or the reason for rejection.
 * 
 * 
 * 
 * to eliminate callback hell we used promise .promise have 3 satge
 * and first stage of promise is pending and after target hit fullfield or reject
 */
//we use promose constructor or promise object


//ex promise object
let data=2
let _promise=new Promise((resolve,reject)=>{ //resolve and reject are  function
    setTimeout(()=>{
        reject("err")
       // console.log(data)  
},2000)
})

_promise.then((item)=>{console.log(item)}).catch((err)=>{
    console.log(err);
})




//simple example of promise
let add=new Promise((resolve,reject)=>{
    let a=1+5;
    if(a===6){
     resolve(`suceesful of add a= ${a}`)
 
    }
    else{
     reject(`failed to add`)
    }
 })
 
 add.then((message)=>{
     console.log(message)
 }).catch((message)=>{
     console.log(message)
 })
 