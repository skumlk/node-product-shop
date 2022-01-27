"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError {
    constructor(error) {
        this.message = error.message;
    }
    getCode() {
    }
}
exports.default = ValidationError;
