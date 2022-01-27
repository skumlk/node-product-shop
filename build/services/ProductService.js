"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const ProductValidationService_1 = __importDefault(require("../validation/ProductValidationService"));
const ProductModelService_1 = __importDefault(require("../models/ProductModelService"));
let ProductService = class ProductService {
    constructor(productValidationService, productModelService) {
        this.productValidationService = productValidationService;
        this.productModelService = productModelService;
    }
    listProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productModelService.list();
            return products;
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.productValidationService.getProduct({ id })  //Validates and throw errors if there is     
            const product = yield this.productModelService.get(id);
            return product;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.productValidationService.deleteProduct({ id })  //Validates and throw errors if there is     
            const product = yield this.productModelService.delete(id);
            return { "data": product };
        });
    }
    importProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return { "id": "Not implememnted" };
        });
    }
};
ProductService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [ProductValidationService_1.default,
        ProductModelService_1.default])
], ProductService);
exports.default = ProductService;
