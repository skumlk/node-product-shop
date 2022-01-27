import { Service } from "typedi";
import { FileArray } from "express-fileupload";
import { v4 as uuid } from "uuid";
import ProductValidationService from "../validation/ProductValidationService";
import ProductModelService from "../models/ProductModelService";
import BrandModelService from "../models/BrandModelService";
import IProductCsvRow from "../interfaces/IProductCsvRow";
import IProduct from "../interfaces/IProduct";
import { readCSV } from "../helpers/csv";
import * as path from 'path';
import { constants } from '../const/common';

import UnauthorizedError from "../errors/UnauthorizedError";
import * as ErrorCodes from "../errors/ErrorCodes"
import BadRequestError from "../errors/BadRequestError";

@Service()
export default class ProductService {

    constructor(
        private productValidationService: ProductValidationService,
        private productModelService: ProductModelService,
        private brandModelService: BrandModelService) { }

    async listProducts() {
        const products = await this.productModelService.list()
        return products;
    }

    async getProduct(productId: string) {
        var { id } = this.productValidationService.getProduct({ id: productId })  // Validates and transform data, throw errors if any     
        const product = await this.productModelService.get(id)
        return product;
    }

    async deleteProduct(productId: string) {
        var { id } = this.productValidationService.deleteProduct({ id: productId })  // Validates and transform data, throw errors if any     
        const product = await this.productModelService.delete(id)
        return product;
    }

    async importProducts(files: FileArray | undefined) {
    
        var { file: csvFile } = this.productValidationService.importProducts({ files })  // Validates and transform data, throw errors if any     

        let filePath = path.resolve(constants.UPLOAD_FOLDER_NAME, uuid()); 
        
        csvFile.mv(filePath);
        var products = await readCSV<IProductCsvRow>(filePath);
    
        var brands = await this.brandModelService.list()
        var brandNames = brands.map(x => x.name)
        var allProductBrandNames = [...new Set(products.map(x => x.brand.toLowerCase()))]
        var newBrands = allProductBrandNames
            .filter(x => !brandNames.includes(x))
            .map((name) => ({ name : name }))
        
        if (newBrands.length) {
            var savedBrands = await this.brandModelService.createMany(newBrands);
            brands = brands.concat(savedBrands)
        }

        var newProducts : IProduct[] = [];
        
        for(var product of products) {
            var brand = brands.find(y => y.name == product.brand)
            if (brand) {
                newProducts.push({ 
                    name: product.name,
                    slug: product.slug,
                    sku: product.sku,
                    brandId: brand.id })
            }
        }
        
        await this.productModelService.createMany(newProducts)
    }
}