/**
 * In JavaScript, array is a single variable that is used to store different elements.
 * It is often used when we want to store list of elements and access  them by a single variable.
 * 
 * in javascript type of array is a object
 * 
 * we can store multiple type of data type 
 * 
 * always array index no. start from 0
 */

let arr=[23,3,"prakash"];
console.log(arr);



//example
let name=['arun','anand','khagesh','prabin'];
console.log(name[2]);//it will print index two element

//methods of an array

//*push method-used for add element at the end of an array and it can  change original array
//ex--
name.push("prakash");
console.log(name);//print total element of an array['arun','anand','khagesh','prabin','prakash]

//pop_method of anrray is used for delete an element end of an array it can also change orginal arr
//ex--
name.pop();
console.log(name) //['arun','anand','khagesh','prabin']

//unshift_method is used to add element at the starting of index 
//ex---
name.unshift('chandan');
console.log(name);//['chandan','arun','anand','khagesh','prabin']

//shift_method is used to delete element at the starting of index
//ex---
name.shift();
console.log(name);//['arun','anand','khagesh','prabin']

//splice() is used random element delete alse we add and it can change the original array
name.splice(2,1);// it delete one element from  index no.2 
console.log(name);//['arun','anand','prabin']
name.splice(2,1,"jyoti");
console.log(name); //[ 'arun', 'anand', 'jyoti' ] here prabin removed and add jyoti



// slice() create new array with change original array
console.log(name.slice(1)); //[ 'anand', 'jyoti' ] remove index 1 item



//split() in array
//make sentence to aaray
let fr="khalikote autonomous college"
let xyz=fr.split(" ");//it dpend what we pass argument here we pass space ..
console.log(xyz);//['khalikote','autonomous','college']

//join() in an array we can join text and using this method
let mn=name.join("---");
console.log(mn); //arun---anand---prabin

//concat() this method is used for adding two or more array it doesn't change existing array
let lastName=['pradhan','samal','sahu'];
let friend=name.concat(lastName);
console.log(friend); //[ 'arun', 'anand', 'prabin', 'pradhan', 'samal', 'sahu' ]

//sort( )  for sort in alpha betically  it can change original array

console.log(name.sort());
// in sort method we can arrange it accending or decending order using a compare function
//it can change the original
//ex:

let arr1=[13,344,4,23,7,2,76,9,3];
let compare=(a,b)=>{
  return a-b; //for deccending order and 'b-a' used for accending order
}
console.log(arr1.sort(compare)) //[2,3,4,7,9,13,23,76,344] deccending oreder



//reverse method used tp reverse all items

console.log(arr1.reverse()); //[344, 76, 23, 13, 9,7,  4,  3,  2]


//from() used to create a array from other object

let a="raghav";
console.log(Array.from(a)); //[ 'r', 'a', 'g', 'h', 'a', 'v' ]