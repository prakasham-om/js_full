/**
 *
1. asynchronous(asynch) function is also a callback function,
2.its a non block type function call it means not necessary to execute code one after 
another.
3.asynch is used to handel call back hell function


*/



//asynchronous function example

function a(a){
    console.log("Hiiiii")
    setTimeout(()=>{
        console.log("and I am a developer")
    },1500)
    setTimeout(()=>{
        console.log(a)
    },1000)
    console.log("my name is Prakash")
}
a("salary 8lakh")


//asynch and await are similar like promise it use to handle call back hell


let funasynch= async function aa (...data){
    let fetchdata=data;
   let puredata= await (fetchdata);
   setTimeout((puredata)=>{
    console.log(puredata[1]); 
   },3000,puredata)

}

funasynch("hello","world","i am","the","the best","programing ","language");

 