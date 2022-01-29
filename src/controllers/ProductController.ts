import "reflect-metadata";
import * as express from "express";
import Container from "typedi";
import ProductService from "../services/ProductService";
import * as httpHelpers from "../helpers/http";

export default class ProductController{

    static async listProducts(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const productService = Container.get(ProductService) // Service locator
            const data = await productService.listProducts()
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            next(e)
        }
    }

    static async getProduct(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const { id } = req.params;
            const productService = Container.get(ProductService) // Service locator
            const data = await productService.getProduct(id)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            console.log(e)
            next(e)
        }
    }

    static async deleteProduct(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const { id } = req.params;
            const productService = Container.get(ProductService) // Service locator
            const data = await productService.deleteProduct(id)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            next(e)
        }
    }

    static async importProducts(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const productService = Container.get(ProductService) // Service locator
            const data = await productService.importProducts(req.files)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            console.log(e)
            next(e)
        }
    }
}