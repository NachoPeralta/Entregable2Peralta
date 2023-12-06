class ProductManager {
    static lastId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Los datos no pueden estar vacios");
            return;
        }
        if (this.products.some(item => item.code === code)) {
            console.log("El codigo de producto ya existe");
            return;
        }

        const product = {
            id: ++ProductManager.lastId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product);
        console.log("Producto agregado:", product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log("Product not found");
        } else {
            console.log("Product:", product);
        }
        return product;
    }
}

module.exports = ProductManager;