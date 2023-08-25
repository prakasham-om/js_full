//means read the index of all element 

let arr=["one","two","three","four","five",86]

//for known total no. of index=arr.lenghth
// let len=arr.length ;
// console.log(len);

// //print index with item
// for (let i=0; i<len;i++){
//  console.log( i +" " +arr[i]);
// }


 //reverse the given array

// for (let i=len; i>=0;i--){
//     console.log(arr[i]);
// }

//find the forth no of index 

//console.log(arr[3]); // four


//travers using forEach
arr.forEach((ele)=>{
    console.log(ele);
})



//travers using for of
for(ele of arr){
    console.log(ele);
}
