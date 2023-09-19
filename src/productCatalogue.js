class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find(
      function (product) {
        return id === product.id;
      })
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  findProductsByNameLike(subString) {
    const matches = this.products.filter(function(product) {
      const position = product.name.search(subString)
      return position !== -1
    } )
    return matches;
  }

// exercise1
  removeProductById(id){
    const matches = this.products.find(product => id === product.id)
    if (matches !== -1) {
      this.products.splice(matches, 1);
      return true;
    }
    return false;
  }


// exercise2
  checkReorder() {
    const productsToReorder = this.products.filter(product => product.quantityInStock <= product.reorderLevel).map(product => product.id);

    return {
      type: "Reorder",
      productIds: productsToReorder
    };
  }

}
module.exports = Catalogue;
