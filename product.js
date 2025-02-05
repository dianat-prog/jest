let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0


function resetProducts() {
    products = [];
    return products;
}

//El primer test que vamos a hacer es el de crear un producto. Para ello, vamos a usar
//  la función **addProduct**. Esta función recibe dos parámetros: el nombre del producto y el precio. 
// Si alguno de los dos parámetros no está definido, la función lanzará un error. Si el producto ya existe, la función también lanzará un error.
function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error("name and price are required.");
    }

    const productExists = products.some(p => p.nameProd === name);

    if (productExists) {
        throw new Error("product already exists.");
    }

    const newProduct = {idProd: products.length > 0 ? products[products.length - 1].idProd + 1 : 1,nameProd: name, price };
    products.push(newProduct);
    return newProduct;
}

function removeProduct(id){
    const index = products.findIndex(product => product.idProd === id);
    if (index === -1) {
        throw new Error("The product does not exist.");
    }
    products.splice(index, 1);
    return `Product with ID ${id} successfully removed.`;
}
 




function getProduct(id){
    const product =  products.find(product => product.idProd === id);
    //const product =  products.findIndex(product => product.idProd === id);

      
    if (!product) {
        throw new Error("The product does not exist.");
    }
    return product;
}

//Esta función recibe tres parámetros: el id del producto, el nombre del producto y el precio del producto. 
// Si el producto no existe, la función lanzará un error. Si el nombre o el precio no están definidos, 
// la función actualizará el producto con los datos que sí estén definidos.

/*
function updateProduct(id, newNameProd, newPrice) {
    const productIndex = products.findIndex(product => product.idProd === id);

    // Si no existe, lanzar un error
    if (productIndex === -1) {
        throw new Error("Product not found");
    }

    // Actualizar los valores definidos dentro del array
    if (newNameProd !== undefined) {
        products[productIndex].nameProd = newNameProd;
    }
    if (newPrice !== undefined) {
        products[productIndex].price = newPrice;
    }

    return products[productIndex]; 
}**/
function updateProduct(id,newProd, newPrice){
    
    const productIndex = products.findIndex(product => product.idProd === id);


    // Si no existe, lanzar un error
    if (productIndex === -1) {
      throw new Error("Product not found");
    }
  
    // Actualizar los valores definidos dentro del array
    if (newProd !== undefined) {
      products[productIndex].nameProd = newProd ;
      // products[productIndex].nameProd = newProd !== undefined ? newProd :products[productIndex].nameProd;
    }
    if (newPrice !== undefined) {
        // products[productIndex].price = newPrice !== undefined ? newPrice : products[productIndex].price ;
      products[productIndex].price = newPrice ;
    }  
    return products[productIndex]; // Re

}
module.exports ={resetProducts,addProduct,removeProduct,getProduct,updateProduct}
