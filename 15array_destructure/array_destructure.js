/**
 * array unpack using varible is know as destructure
 * destructure index wise
 */

let fruits=["apple","mango","kiwi","orange"];

let [a,b,c,d]=fruits;

console.log(a)//apple
console.log(b)//mango
console.log(c)//kiwi
console.log(d)//orange

//we can use rest opertor

let [...rest]=fruits
console.log(rest)// print all fruits name

let arr=[[12,22],[222,'rohit'],{hello:'sbsj',aaa:'sggd'}]
console.log(arr[2]);

let [[x,y],[z,l],{hello,aaa}]=arr;

console.log(hello) //sbsj