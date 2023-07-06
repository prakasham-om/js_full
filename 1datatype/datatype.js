/**datatype is used to store which type data store with the varibale
 * premitive datatype -7 type datatypes(null,number,symbol,string,boolean,bigint,undefined)
 * 
 * non premitive datatype is object(object have key and value pair)
 */
//premitive :-
let a=null; //null
let b=261523; //num
let c=Symbol("i am a symbol"); //symbol
let d="prakash"; //string
let e=BigInt("5252");//bigint
let f; //undefined
console.log(a,b,c,d,e,f)
//beuity of bigint
let add= BigInt("54")+BigInt("6")
console.log(add);


//non-premitive:-
const item={
    "name":"Prakash",
    "age":24,
    "marritial status":undefined,
    "developer":true

}
console.log(item["marritial status","age"])



//q1 try to add new key in the given object

const data={
    "name":"shiva",
    "age":2,

}
data["mob"]="8787665";
console.log(data)
//data is a refence of object 

//q 2. create a 5 word dictionary

const dictionary={
    hello:"greeting message",
    hello1:"greeting message",
    hello2:"greeting message",
    hello3:"greeting message",
    hello4:"greeting message"

}

console.log(dictionary.hello)