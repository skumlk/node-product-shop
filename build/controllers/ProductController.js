"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
require("reflect-metadata");
const typedi_1 = __importDefault(require("typedi"));
const ProductService_1 = __importDefault(require("../services/ProductService"));
const httpHelpers = __importStar(require("../helpers/http"));
class ProductController {
    static listProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = typedi_1.default.get(ProductService_1.default); // Service locator
                const data = yield productService.listProducts();
                return httpHelpers.successResponse(res, data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const productService = typedi_1.default.get(ProductService_1.default); // Service locator
                const data = yield productService.getProduct(id);
                return httpHelpers.successResponse(res, data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static deleteProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const productService = typedi_1.default.get(ProductService_1.default); // Service locator
                const data = yield productService.deleteProduct(id);
                return httpHelpers.successResponse(res, data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static importProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productService = typedi_1.default.get(ProductService_1.default); // Service locator
                const data = yield productService.importProducts();
                return httpHelpers.successResponse(res, data);
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.default = ProductController;
