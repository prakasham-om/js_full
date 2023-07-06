/**
 * loop is important topic in js it used to to print much more line in using a single line of code 
 * type of loop:
 * for loop, for in loop,for of loop,while loop,do while loop
 */

for (let i=0; i<10;i++){
    console.log(i);
}
let j=0;
while( j < 10){
   
    console.log(j)
    j++;
    
}
let z=0
do{
    console.log(z)
    z++;

}while(z < 5)




//print * tringle 
/**
 *        *
 *       * *
 *      * * *
 *     * * * *
 *    * * * * * 
 */

let string="" ;
for(let i=0;i<5;i++){
   
    for( let j=0;j<5;j++){
        string +="*";
        console.log(string);
    }
    string+="" ;
    console.log(string);

    
   


}