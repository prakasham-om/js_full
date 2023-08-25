let arr=[2,1,3,4,7,9,4,6];
arr.sort()
//console.log(arr)
let position=7;
let data
start=0;
end=arr.length-1;

function binary(arr,start,end){
  let avg=(start+end)/2;
   mid=Math.floor(avg)
 //console.log(mid)
  if(arr[mid]===position){
     data=mid
    //console.log(data)
    return true
  }
  else if(arr[mid]<position ){
    binary(arr,mid+1,end);
  }
  else{
    binary(arr,start,mid-1);
  }
}

(binary(arr,start,end))
console.log(data) //6