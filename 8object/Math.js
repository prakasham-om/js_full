//math objec t is prebuilt object we can access using property

console.log(Math.PI)

//methods in math obj
//round() : it give rounded value .5 below= previous round no .5 above=next round no

let round=Math.round(1.663)
console.log(round);//2

//floor() / trunc() .//used for remove decimal

let x=Math.floor(3.78927);
console.log(x); //3

let squreroot=Math.sqrt(9);
console.log(squreroot) //3

let power=Math.pow(2,10);
console.log(power); //1024


//min()
 let min=Math.min(4,6,1,6,8,-6,-1);
 console.log(min); //-6
 //mix()
 let max=Math.max(4,6,1,6,8,-6,-1);
 console.log(max); //

 //random()

 let random=Math.random(); //(generate 0-1)
 console.log(random)


 //q. generate random no 0-9

 let ans=Math.floor(Math.random()*10);
 console.log(ans)