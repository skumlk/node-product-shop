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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const _ = __importStar(require("lodash"));
const configOutput = dotenv_1.default.config({ path: path_1.default.resolve(__dirname, `./.${process.env.NODE_ENV}.env`) });
if (configOutput.error)
    throw new Error(".env file is missing");
const required_config_variables = {
    SERVER_PORT: process.env.SERVER_PORT,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY
};
const optional_config_variables = {
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD
};
function validateConfig() {
    for (let key of Object.keys(required_config_variables)) {
        if (_.isEmpty(required_config_variables[key]))
            throw new Error(`Env key ${key} is missing`);
    }
}
const config = Object.assign(Object.assign(Object.assign({}, required_config_variables), optional_config_variables), { validateConfig });
exports.config = config;
