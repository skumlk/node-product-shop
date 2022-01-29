import ProductController from "../../controllers/ProductController";

var products = function() {
    return ProductController.listProducts()
}

var deleteProduct = function({ id } : {id: string}) {
    return ProductController.deleteProduct(id)
}

export default { products, deleteProduct }