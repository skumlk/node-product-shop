"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
class Validation {
    validate(schema, data, isThrowError = true) {
        const { error } = schema.validate(data);
        if (error)
            if (isThrowError)
                throw new ValidationError_1.default(error);
            else
                return error;
        return true;
    }
}
exports.default = Validation;
