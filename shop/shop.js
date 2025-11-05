type = ["Elektronika", "Apgerbi"]
class Product {
    type;
    name;
    price;

    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }

}

products = [
    new Product(type[0], "Laptops", 1000),
    new Product(type[1], "bikses", 50),
    new Product(type[1], "Soma", 150),
    new Product(type[0], "Telefons", 1100),
    new Product(type[0], "Konsole", 200),
    new Product(type[1], "Cepure", 20),
]


function findProduct(chosenType) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].type === type[chosenType]) {
            console.log(products[i].name);
        }
    }
}

function getPrice(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
}

console.log("------Elektro iekartas----------")
findProduct(0);
console.log("------Apgerbi iekartas----------")
findProduct(1);
console.log("------Kopeja summa----------")
console.log(getPrice(products));