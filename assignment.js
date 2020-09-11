class Fruit {
    constructor(name,quantity,price){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

strawberry = new Fruit("Strawberry",15,10);
pineapples = new Fruit("Pineapples",10,40);
apples = new Fruit("Apples",6,20);
mango = new Fruit("Mango",12,50);
pear = new Fruit("Pear",10,80);

let fruits = [strawberry,pineapples,apples,mango,pear];
 

const displayFinalFruits = (fruits = [strawberry,pineapples,apples,mango,pear],condition = 250) =>{
             
             let totalPrices = fruits.map( (fruit ) => fruit.quantity * fruit.price );

             let finalObjectIndices  = totalPrices.map( (price,i) => {
                if(price > condition){
                    return i;
                }
             });

            finalObjectIndices.filter( index => index != undefined).forEach( index => console.log(fruits[index]));
}

console.log("Final fruits are:");
displayFinalFruits(fruits,250);
