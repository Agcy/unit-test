class Product {
    constructor(id,name,initialQuantity, reorderLevel, price) {
        this.id = id;
        this.name = name;
        this.quantityInStock = initialQuantity
        this.reorderLevel = reorderLevel
        this.price = price;
    }
}


module.exports = Product;