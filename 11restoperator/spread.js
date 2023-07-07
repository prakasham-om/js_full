let a=[1,2,3,4,5,6];

//if we want copy the array 

/* 
  let b=a ----> it's a wrong way it not copy the arrray it refer the array and when we change
  in somthing in b then it will change the parent array
*/

// so spread operator used to copy


let b=[...a]

//object copy 

let obj={name:"jpmorgan"}

let copyobj={...obj};