class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        //campos obligarotios
        if (
            title === "" ||
            description === "" ||
            price === "" ||
            thumbnail === "" ||
            code === "" ||
            stock === ""
        ) {
            return "todos los campos son obligatorios";
        }

        let condition = this.products.find((product) => product.code === code);
        condition ? console.log("el producto ya existe") : this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById() {
        let index = this.products.indexOf((dato) => dato.id === id);
        switch (index) {
            case -1:
                return console.log("el producto no existe");
            default:
                return this.products(index);
        }
    }
}

const productManager = new ProductManager();
productManager.addProduct(
    "Sandia",
    "Muy rica",
    600,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fsearch%3Fq%3Dsand%25C3%25ADa&psig=AOvVaw3Xq1ckCHeMHncqkb3NSSHP&ust=1670449660804000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCt1o385fsCFQAAAAAdAAAAABAE",
    "1234",
    5
);
productManager.addProduct(
    "Sandia",
    "Muy rica",
    600,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fsearch%3Fq%3Dsand%25C3%25ADa&psig=AOvVaw3Xq1ckCHeMHncqkb3NSSHP&ust=1670449660804000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCt1o385fsCFQAAAAAdAAAAABAE",
    "1234",
    5
);



