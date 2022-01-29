import sinon from 'sinon'
import BrandModelService from '../../../models/BrandModelService';
import ProductModelService from '../../../models/ProductModelService';
import ProductService from "../../../services/ProductService"
import ProductValidationService from '../../../validation/ProductValidationService';
import products from "../../test_data/products";

let productService: ProductService;

beforeEach(() => {
    let productModelService = new ProductModelService();
    let brandModelService = new BrandModelService();

    productService = new ProductService(
        new ProductValidationService(),
        productModelService,
        brandModelService);

});

afterEach(() => {
    sinon.restore()
})

describe('List Products', () => {

    it('should get all products', async () => {
        
        let stub = sinon.stub(ProductModelService.prototype, "list")
        stub.resolves(products);

        let response = await productService.listProducts();
        sinon.assert.calledOnce(stub);
        expect(response).toEqual(products)
    })
});

describe('Get a Products', () => {

    it('Get a single product', async () => {

        var product = products[0]
        let stub = sinon.stub(ProductModelService.prototype, "get")
        stub.resolves(product);

        let response = await productService.getProduct(product.id.toString());
        sinon.assert.calledOnce(stub);
        expect(response).toEqual(product)
    })

    it('Get a single product with invalid id', async () => {

        let stub = sinon.stub(ProductModelService.prototype, "get")
        stub.resolves(products[0]);

        await expect(async () => { await productService.getProduct("test") }).rejects.toThrow()
        sinon.assert.notCalled(stub);
    })
});

describe('Delete a Products', () => {

    it('delete a product', async () => {

        var product = products[0]
        let stub = sinon.stub(ProductModelService.prototype, "delete")
        stub.resolves({count: 1});

        let response = await productService.deleteProduct(product.id.toString());
        sinon.assert.calledOnce(stub);
        expect(response).toBeUndefined()
    })

    it('Get a single product with invalid id', async () => {

        let stub = sinon.stub(ProductModelService.prototype, "delete")
        stub.resolves({count: 1});

        await expect(async () => { await productService.deleteProduct("test") }).rejects.toThrow()
        sinon.assert.notCalled(stub);
    })
});

describe('Import Products', () => {

    it('delete a product', async () => {

        var product = products[0]
        let stub = sinon.stub(ProductModelService.prototype, "delete")
        stub.resolves({count: 1});

        let response = await productService.deleteProduct(product.id.toString());
        sinon.assert.calledOnce(stub);
        expect(response).toBeUndefined()
    })

    it('Get a single product with invalid id', async () => {

        let stub = sinon.stub(ProductModelService.prototype, "delete")
        stub.resolves({count: 1});

        await expect(async () => { await productService.deleteProduct("test") }).rejects.toThrow()
        sinon.assert.notCalled(stub);
    })
});