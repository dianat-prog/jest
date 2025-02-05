const { resetProducts,  addProduct, removeProduct, getProduct,updateProduct} = require('./product');



//Test crear producto.El primer test que vamos a hacer es el de crear un producto. Para ello, vamos a usar
//  la función **addProduct**. Esta función recibe dos parámetros: el nombre del producto y el precio. 
// Si alguno de los dos parámetros no está definido, la función lanzará un error. Si el producto ya existe, la función también lanzará un error.
describe("Adding", () => {
    
    beforeEach(() => {
        resetProducts();
    });

 
    test("should add a product", () => {
        expect(()=>addProduct( "Móvil",650).toEqual({ nameProd: "Móvil", price: 850 }));
    });

    test('Should show an error if the product name is missing', () => {
     //   expect(() => manager.addProduct(undefined, 500)).toThrow("name and price are required.");
        expect(()=>addProduct( "",650).toThrow('name and price are required.'));
    });

    test('Should show an error if the product price is missing', () => {
        expect(()=>addProduct( "Móvil").toThrow('name and price are required.'));
       });


    test("Should show an error if the product already exists", () => {
      expect(()=>addProduct( "Móvil",650).toThrow('The product already exists.'));
    });
});


//### Test eliminar producto. //El siguiente test que vamos a hacer es el de eliminar un producto. Para ello,
// vamos a usar la función **removeProduct**. Esta función recibe un parámetro: el id del producto. 
// Si el producto no existe, la función lanzará un error.

 
describe("Removing", () => {
      beforeEach(() => {
        resetProducts();
    });

 
    test("should remove a product", () => {
        expect(()=>removeProduct(9999).toThrow("The product does not exist."));
    });

 
});


//### Test obtener producto
//El siguiente test que vamos a hacer es el de obtener un producto. Para ello, vamos a usar la función
//  **getProduct**. Esta función recibe un parámetro: el id del producto. Devuelve un objeto con los datos del producto.
//  Si el producto no existe, la función lanzará un error.
describe("Getting", () => {
    
    beforeEach(() => {
        resetProducts();
    });

    test("should get a product ", () => {
        const product = addProduct("Monitor", 300);
        expect(getProduct(product.idProd)).toStrictEqual(product);
    });

     
});


describe("Updating Products", () => {

    beforeEach(() => {
        resetProducts();

        addProduct( "Laptop", 1000);
        addProduct( "Phone", 500);
        addProduct("Tablet", 300);
    });

  
test("should update a product", () => {
    const updatedProduct = updateProduct(1, "Gaming Laptop", 1200);
    expect(updatedProduct).toEqual({ idProd: 1, nameProd: "Gaming Laptop", price: 1200 });
  });

  test("should fail when updating a product that does not exist", () => {
    expect(() => updateProduct(99, "Nonexistent", 999)).toThrow("Product not found");
  });


  test("should only update the price", () => {
    const updatedProduct = updateProduct(2, undefined , 550);
    expect(updatedProduct).toEqual({ idProd: 2, nameProd: "Phone", price: 550 });
  });

   test("should only update the name", () => {
    const updatedProduct = updateProduct(3, "Updated Tablet", undefined );
    expect(updatedProduct).toEqual({ idProd: 3, nameProd: "Updated Tablet", price: 300 });
  });
}

)