//when a object is create itself called a prototype and that also access some prebuilt prototype
//jab ek abject create hota hai khud usko prototype bulayajatahai uske sathe 
//kuchh propoty o access kar parahai jo prebuilt hota hai e sab ko prototype hi bulayajata hai

let obj={
    name:"Rohit",
    getAge:function(){
      return  this.age //in obj there is no age but we can access it from obj1 using below method
    }
}

let obj1={
    age:23,
    __proto__:obj //we can access name proporty in obj1  (use double underscore and proto)
}
console.log(obj1.name);
console.log(obj1.getAge())
 //or we can use spread
 let obj4={
    name:'khjdjhs'
  }
  let bs={
    ...obj4,
    age:3,

  }
  console.log(bs.name);





//create own prototype very very important

Array.prototype.show=function(){
    return this;
}
const village=['sahabajpur'];

console.log(village.show())  //['sahabajpur]

//convert Array to object
Array.prototype.ConvertIntoObjevt=function(){
    let obj={}
    this.forEach(ele=>obj[ele]=ele)
    return obj;
}

console.log(village.ConvertIntoObjevt());  //{sahabajpur:'sahabjpur}
 


/// create prototype for sorting
let arr=[7,2,5,1,6,2,3]
console.log(arr.sort())

let arr1=[23,345,12,4,45234,1]
//console.log(arr1.sort())

Array.prototype.sorrtss=function(){
    let arr=[];
    this.forEach((ele)=>{
        arr.push(ele)
       
        for(let i=0;i<arr.length;i++){
            if(arr[i] >arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                
                i=-1
            }
            
                    }
    })
    console.log(arr)
    return arr;
}
console.log(arr1.sorrtss())