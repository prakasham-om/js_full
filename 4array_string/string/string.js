/**
 * String is sequence of charecter that continuesly store in memory location
 * 
 */

let str="  i am a string        ";

//we can find length using this method

console.log(str.length);

//methos of string
/**
 * we can convert uper and lower case
 * we can cut string size using slice and slice method need argument slice(indexno,...)
 * we can replace everything in data using replace method / but it doen't change the original str
 * trim is a methos in string that can remove extra space in a given string
 * split method return a array
 * charAt() method is used to find element of index
 * includes() used to check element if exist then true otherwise false
 * there are so many methods in js sting
 */

console.log(str.toUpperCase());
console.log(str.slice(3)); // m a string
console.log(str.replace("string", "strange")); // i am a strange
console.log(str.trim()); 
console.log(str.split());//[  i am a string     ]
console.log(str.charAt(5)); //find the element of index
console.log(str.includes("string")) //true

