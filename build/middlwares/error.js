"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequestError_1 = __importDefault(require("../errors/BadRequestError"));
const UnauthorizedError_1 = __importDefault(require("../errors/UnauthorizedError"));
const ValidationError_1 = __importDefault(require("../errors/ValidationError"));
function default_1(error, req, res, next) {
    if (error instanceof ValidationError_1.default)
        res.status(400).send({ success: false, message: error.message });
    else if (error instanceof UnauthorizedError_1.default)
        res.status(401).send({ success: false, message: error.message });
    else if (error instanceof BadRequestError_1.default)
        res.status(400).send({ success: false, message: error.message });
    else
        res.status(500).send({ success: false, message: 'Server Error' });
}
exports.default = default_1;
