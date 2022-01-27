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
let AuthValidationService = class AuthValidationService extends Validation_1.default {
    login(data, isThrowError = true) {
        const schema = joi_1.default.object({
            email: joi_1.default.string().required().email(),
            password: joi_1.default.string().required().max(255).min(6)
        });
        return this.validate(schema, data, isThrowError);
    }
    register(data, isThrowError = true) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            email: joi_1.default.string().required().email(),
            password: joi_1.default.string().required().max(255).min(6)
        });
        return this.validate(schema, data, isThrowError);
    }
};
AuthValidationService = __decorate([
    (0, typedi_1.Service)()
], AuthValidationService);
exports.default = AuthValidationService;
