/**
 * reduce method pick the element of array from left to right and conver it a single value;
 * we pass two arguments(accumulator,value)
 */
let arr=[1,2,4,4,5,3];
//let reduce=arr.reduce((acc,val)=>{return acc+val},intialvalue);
let reduce=arr.reduce((acc,val)=>{return acc+val},9);  //the total arrray is=19 and intail value 9 total=28
console.log(reduce)



 


