let a=[1,2,3,4,5];

function callref(argu){ 
    let b= argu.push("reffer") //it indicate original value address
    //console.log(b);

}
callref(a)
console.log(a)


//call by value doesn't change the originl value 
/**When a variable is passed as a parameter to a function, if any 
 * changes are made to the parameter, the original variable will 
 * remain unaffected. This is known as call by value and this is 
 * true for all values having a primitive data type.
 * 
 */

let current_value=10;
function callbyValue(argu){
    chngValue=argu+10;
    console.log(chngValue);
}
callbyValue(current_value);
console.log(current_value);