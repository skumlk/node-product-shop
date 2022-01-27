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
const express_1 = __importDefault(require("express"));
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
exports.default = ({ expressApp } = { expressApp: express_1.default.application }) => __awaiter(void 0, void 0, void 0, function* () {
    expressApp.use(cors());
    expressApp.use(require('morgan')('dev'));
    expressApp.use(helmet());
    expressApp.use(express_1.default.json({
        limit: '15kb'
    }));
    const limiter = rateLimit({
        max: 150,
        windowMs: 60 * 60 * 1000,
        message: 'Too Many Request from this IP, please try again in an hour'
    });
    expressApp.use('/api', limiter);
    expressApp.use(xss());
    expressApp.use(hpp());
});
