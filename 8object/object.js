/**
 * in javascript everything is object
 * also we can say object is the collectio of key and value pair called property
   and a  property can be a function,array,num,string etc
 * 
   "simply object hold details of one- "

   if  property doesn't contain and we try to access that property then it show undefined
 */
//ex

let obj={
   firstName:"prakash",
    lastName:"sahoo"
}

console.log(obj.firstName)  //property called by . notation

console.log(obj["firstName"])//property called by array notation
//modify property

obj.firstName="Rohit";
console.log(obj.firstName);

//add new property

obj.age=25;

console.log(obj) // op:{ firstName: 'Rohit', lastName: 'sahoo', age: 25 }

//delete property

delete obj.firstName
console.log(obj) // op:{ lastName: 'sahoo', age: 25 }


//iterate in object
/**
 * when we try to iterate a object then we can access the value using array notation
 */

let car={
  brand:"range rover",
  model:"Sports suv",
  color:"black",
  price: "2cr"
}

//for in used to iterate only object
for(let key in car){

    console.log(key+" "+car[key] );  
}

//methods in obj

//ex1. car.showroom =function (){
       // let name="jagadamba car shop banglore";
//     console.log("jagadamba car shop banglore");
// }
// console.log(car)

//ex2. function details(){
//     let name="jagadamba car shop banglore";
//     console.log(name);
// }

// car.showroom=details;
// console.log(car)

//ex3. let car={
//     brand: 'range rover',
//     model: 'Sports suv',
//     color: 'black',
//     price: '2cr',
//     showroom:function (){
//         console.log("hsjdjl;s")
//     }
  

//ex4. let car={
//     brand: 'range rover',
//     model: 'Sports suv',
//     color: 'black',
//     price: '2cr',
//     showroom(){
//         console.log("hsjdjl;s")
//     }
  


//'in' is used for property check of object retutn true/false

console.log("brand" in car) //true