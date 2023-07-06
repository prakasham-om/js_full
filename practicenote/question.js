//wtite a javascript code to swap between to number

let a=10;
let b=5;
[a,b]=[b,a]
console.log(a,b);

//other way

function swap(a,b){
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b);
}

swap(10,5);

