import "reflect-metadata";
import * as express from "express";
import Container from "typedi";
import ProductService from "../services/ProductService";
import * as httpHelpers from "../helpers/http";
import ProductController from "./ProductController"

export default class ProductControllerHttpWrapper {

    static async listProducts(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const data = await ProductController.listProducts()
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            next(e)
        }
    }

    static async getProduct(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const { id } = req.params;
            const data = await ProductController.getProduct(id)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            console.log(e)
            next(e)
        }
    }

    static async deleteProduct(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const { id } = req.params;
            const data = await ProductController.deleteProduct(id)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            console.log(e)

            next(e)
        }
    }

    static async importProducts(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const data = await ProductController.importProducts(req.files)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            console.log(e)
            next(e)
        }
    }
}