const fruit="mango";
switch(fruit){
    case 'orange':console.log('orange is 29 per kg');
    break;
    case 'pineapple':console.log('orange is 290 per kg');
    break;
    case 'apple':
    case 'mango':console.log(' apple and mango is 9 per kg'); //expected ouput
    break;
    default:
        console.log('not found mango')
}
 


 