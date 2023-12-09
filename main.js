
const ProductManager = require('./ProductManager');

// Se creará una instancia de la clase “ProductManager”
console.log("*********************************************");
console.log("Instancia de la clase ProductManager");
const productManager = new ProductManager("./products.json");
console.log("*********************************************");

// Se declara la funcion getProductData como async para poder usar await de lo contrario devuelve "promise - pending"
async function getProductData() {
    let products = await productManager.getProducts();
    console.log(products);
}

// Se llamará a la funcion run para llamar a las funciones getProducts y addProduct utilizando await, para ejecutar en orden cada test
async function run() {
    // Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
    console.log("Llamada a getProducts:");
    await getProductData();
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

    let newProduct = {
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    };

    await productManager.addProduct(newProduct);
    console.log("*********************************************");

    // Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
    console.log("Llamada a getProducts con productos:");
    await getProductData();
    console.log("*********************************************");

    // Este Caso de test es del primer entregable, lo deje a modo de control.
    // Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
    console.log("Llamada a addProduct Repetido:");

    let repeatedProduct = {
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    };
    await productManager.addProduct(repeatedProduct);
    console.log("*********************************************");

    //Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado.
    // En caso de no existir, debe arrojar un error.
    console.log("Llamada a getProductById 1 (producto existente):");
    console.log(await productManager.getProductById(1));

    console.log("*********************************************");
    // Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto.
    // Se evaluará que no se elimine el id y que sí se haya hecho la actualización.
    console.log("Llamada a updateProduct 1:");
    console.log(await productManager.updateProduct(1,
        {
            title: "producto updated",
            description: "Este es un producto actualizado",
            price: 250,
            thumbnail: "Sin imagen",
            code: "abc123",
            stock: 50
        }));
    console.log("*********************************************");

    // Se llamará al método “deleteProduct”. 
    // Se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
    console.log("Llamada a deleteProduct 1:");
    console.log(await productManager.deleteProduct(1));
    console.log("*********************************************");
}

run();
