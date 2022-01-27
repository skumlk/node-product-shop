"use strict";
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
const express_1 = __importDefault(require("./express"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = __importDefault(require("./middlewares"));
const config_1 = __importDefault(require("./config"));
const express_2 = __importDefault(require("express"));
exports.default = ({ expressApp } = { expressApp: express_2.default.application }) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, config_1.default)({ expressApp }); //This should come first!
    console.log("Config initialized");
    yield (0, express_1.default)({ expressApp });
    console.log("Express initialized");
    yield (0, routes_1.default)({ expressApp });
    console.log("Routes initialized");
    yield (0, middlewares_1.default)({ expressApp });
    console.log("Middlewares initialized");
});
