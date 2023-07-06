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