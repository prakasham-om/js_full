/**
 * this key used for access the self property of a object
 * that means this key referce to it's parent function
 */

 let car={
    brand: 'range rover',
    model: 'Sports suv',
    color: 'black',
    price: '2cr',
    showroom(){
        console.log(buyer.name+" will buy "+this.brand);
    }
}

let buyer={
    name:"Prakash"
}

car.showroom();

