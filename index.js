class ProductManager{
    constructor(){
        this.products=[];
    }
    addProduct(title, description, price, thumbnail, code, stock){
        //code avaibility
        const codeUsed= this.products.find(product =>product.code===code);
        if(codeUsed){
            console.log(`The code '${code}' its already used`);
            return;
        }
        //properties field
        if(!title|| !description|| !price|| !thumbnail|| !code|| !stock){
            console.log('Complete all fields');
            return;
        }
        //id 
        const id= 
        this.products.length===0
        ?1
        :this.products[this.products.length-1].id+1;

        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    getProductsById(id){
        const product= this.products.find((product)=>product.id===id);
        if(product){
            return product;
        }else{
            console.log('Product not found');
            return;
        }
    }

}
//testing

const manager= new ProductManager();
//producto 1 ok
manager.addProduct(
    "fernet",
    "aperitivo",
    1700,
    "no foto",
    "1111",
    1000,
);
//producto 2 sumando id
manager.addProduct(
    "coca",
    "gaseosa",
    500,
    "no foto",
    "1112",
    1000,
);
//producto sin campo completo
manager.addProduct(
    "algo",
    600,
);
//producto con codigo repetido
manager.addProduct(
    "manaos",
    "gaseosa",
    500,
    "no foto",
    "1112",
    1000,
)

console.log(manager.getProducts());
// busqueda por id, introducir id en el campo vacio

const product= manager.getProductsById(/*id*/);
if (product){
    console.log('the product is', product);
}else{
    console.log("Product not found");
}