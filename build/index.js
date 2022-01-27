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
const config_1 = require("./config/config");
const index_1 = __importDefault(require("./startup/index"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting server...");
        try {
            yield (0, index_1.default)({ expressApp: app });
        }
        catch (error) {
            console.log(error.message);
            return process.exit(1);
        }
        app.listen(config_1.config.SERVER_PORT, () => {
            console.log("Server Started on port: ", config_1.config.SERVER_PORT);
        }).on("error", (err) => {
            console.log(err);
        });
    });
}
startServer();
exports.default = app;
