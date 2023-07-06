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
 */



//ex promise
let data=2
let _promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("err")
       // console.log(data)
},2000)
})

_promise.then((item)=>{console.log(item)}).catch((err)=>{
    console.log(err);
})

//when we fetch api we used this type of promide syntax
 let fetch_data=fetch("api link");
 fetch_data.then((item)=>{
    return item.json()
 }).then((result)=>{console.log(result)}).catch((err)=>console.log(err));


 //finally key is used for 