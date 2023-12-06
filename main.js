
const ProductManager = require('./ProductManager');

// Se creará una instancia de la clase “ProductManager”
console.log("*********************************************");
console.log("Instancia de la clase ProductManager");
const productManager = new ProductManager();
console.log("*********************************************");

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log("Llamada a getProducts:");
let products = productManager.getProducts();
console.log(products);
console.log("*********************************************");

// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
console.log("Llamada a addProduct:");
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.log("*********************************************");


// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log("Llamada a getProducts con productos:");
console.log(productManager.getProducts());
console.log("*********************************************");

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
console.log("Llamada a addProduct Repetido:");
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.log("*********************************************");

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log("Llamada a getProductById 1 (producto existente):");
productManager.getProductById(1);

console.log("Llamada a getProductById 5 (producto inexistente):");
productManager.getProductById(5);
console.log("*********************************************");
