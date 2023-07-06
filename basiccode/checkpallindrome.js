//find a no is pallindrome or not.

let n=121;

let sum=0;
let temp=n

while(n>0){
    let mod=n%10;
    sum=(sum*10)+mod;
    n=Math.round(n/10);
}

if(temp==sum){
    console.log("pallindrom" + sum)
}
else{
    console.log("not pal");
}