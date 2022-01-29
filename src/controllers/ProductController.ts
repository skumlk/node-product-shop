import "reflect-metadata";
import * as express from "express";
import Container from "typedi";
import ProductService from "../services/ProductService";
import * as httpHelpers from "../helpers/http";
import { FileArray } from "express-fileupload";

export default class ProductController {

    static async listProducts() {        
        const productService = Container.get(ProductService) // Service locator
        return await productService.listProducts()
    }

    static async getProduct(id: string) {
        const productService = Container.get(ProductService) // Service locator
        return await productService.getProduct(id)
    }

    static async deleteProduct(id: string) {        
        const productService = Container.get(ProductService) // Service locator
        return await productService.deleteProduct(id)
    }

    static async importProducts(files: FileArray | undefined) {  
        const productService = Container.get(ProductService) // Service locator      
        return await productService.importProducts(files)
    }
}