"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validation_1 = __importDefault(require("./Validation"));
const joi_1 = __importDefault(require("joi"));
const typedi_1 = require("typedi");
let ProductValidationService = class ProductValidationService extends Validation_1.default {
    createSurvey(data, isThrowError = true) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required()
        });
        return this.validate(schema, data, isThrowError);
    }
};
ProductValidationService = __decorate([
    (0, typedi_1.Service)()
], ProductValidationService);
exports.default = ProductValidationService;
