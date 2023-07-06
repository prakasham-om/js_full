/**
 * in javascript for each nd map method are equal but in map method it can return a new 
    array after perform all of it's operation
 * it also taken 3 arguments 
 */

    let arr=[1,5,11];

    let arr1=arr.map((val,indx,arr)=>{
        console.log(val,indx,arr);//it print val,index,array like: 5 1 [ 1, 5, 11 ]
        return val+indx;
    })
    console.log(arr1);