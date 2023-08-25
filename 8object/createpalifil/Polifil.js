// create own sorting  polifil code

Array.prototype.sorting=function(){
    for(ele=0;ele<this.length-1;ele++){
       if(this[ele] > this[ele+1]){
        let temp=this[ele+1];
          this[ele+1]=this[ele];
          this[ele]=temp;
          ele=-1;
      }
    }
    return this
  }
  
  
  let arr=[97,56,5,2,6,8,232,564,67,3,5,9,4]
  console.log(arr.sorting())
  console.log(arr.sort())
   
  //ele=1 ele1=23
  //temp=23
  //ele1=ele1
  //ele=23
   