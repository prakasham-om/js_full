/**
 * in filter method only the the true value return 
 */

let arr=[1,2,3,4,5,53,];
let new_Arr=arr.filter((val,indx,arr)=>{
  return val >5 ;

})
console.log(new_Arr);

//find the duplicate no

function findDuplicates(arr1) {
   return  arr1.filter((item, index) => arr1.indexOf(item) !== index);
   // console.log(arr1);
   // return [...new Set(arr11)] // sort method for removing duplicate
}
 
const arr1 = [1,6,2,4,6,7,8,9,8,7,9,5];
const duplicates = findDuplicates(arr1);

console.log(duplicates); 
