/**
 * when we need to perform a same operation for each element of a array there we use for each method
 * we can pass three argument forEach(value,index,arr)
 * 
 */
 let arr=[1,2,3,4,5,6,7,8,9];

 arr.forEach((ele)=>{  console.log(ele*ele)});

//for....of loop using this loop we can do the iteration method only for array

for(let i of arr){
    console.log(i) //[1,2,3,4,5,6,7,8,9];
}

//for...in loop using this loop we can find index no
for(let i in arr){
    console.log(i) //[1,2,3,4,5,6,7,8]; index no
}
