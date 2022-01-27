
import express from "express";
const helmet = require("helmet")
const cors = require("cors")
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const bodyparser = require('body-parser')
const fileUpload = require('express-fileupload');

export default async ({ expressApp } = { expressApp: express.application }) => {
    
    expressApp.use(fileUpload({
        createParentPath: true,
        useTempFiles : true,
        tempFileDir : '/tmp/',
        limits: { fileSize: 50 * 1024 * 1024 },
    }));

    expressApp.use(cors());
    expressApp.use(require('morgan')('dev'));
    expressApp.use(helmet());

    expressApp.use(express.json({
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
}