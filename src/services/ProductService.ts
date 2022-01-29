import { Service } from "typedi";
import { FileArray } from "express-fileupload";
import { v4 as uuid } from "uuid";
import { constants } from '../const/common';
import { readCSV } from "../helpers/csv";
import * as path from 'path';
import ProductValidationService from "../validation/ProductValidationService";
import ProductModelService from "../models/ProductModelService";
import BrandModelService from "../models/BrandModelService";
import IProductCsvRow from "../interfaces/IProductCsvRow";
import IProduct from "../interfaces/IProduct";
import NotFoundError from "../errors/NotFoundError";

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
        const { id } = this.productValidationService.getProduct({ id: productId })  // Validates and transform data, throw errors if any     
        const product = await this.productModelService.get(id)

        if (!product){
            throw new NotFoundError("Product Not Found")
        }

        return product;
    }

    async deleteProduct(productId: string) {
        const { id } = this.productValidationService.deleteProduct({ id: productId })  // Validates and transform data, throw errors if any     
        const { count } = await this.productModelService.delete(id)

        if (count == 0){
            throw new NotFoundError("Product Not Found")
        }
    }

    async importProducts(files: FileArray | undefined) {
    
        // Validates and transform data, throw errors if any     
        const { file: csvFile } = this.productValidationService.importProducts({ files }) 

        const filePath = path.resolve(constants.UPLOAD_FOLDER_NAME, uuid()); 
        
        csvFile.mv(filePath);
        const products = await readCSV<IProductCsvRow>(filePath);
    
        let brands = await this.brandModelService.list()
        const brandNames = brands.map(x => x.name)
        const allProductBrandNames = [...new Set(products.map(x => x.brand.toLowerCase()))]
        const newBrands = allProductBrandNames
            .filter(x => !brandNames.includes(x))
            .map((name) => ({ name : name }))
        
        if (newBrands.length) {
            const savedBrands = await this.brandModelService.createMany(newBrands);
            brands = brands.concat(savedBrands)
        }

        const newProducts : IProduct[] = [];
        
        for(const product of products) {
            const brand = brands.find(y => y.name == product.brand)
            if (brand) {
                newProducts.push({ 
                    name: product.name,
                    slug: product.slug,
                    sku: product.sku,
                    brandId: brand.id,
                })
            }
        }
        
        await this.productModelService.createMany(newProducts)
    }
}