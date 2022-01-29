import express from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import fileUpload from "express-fileupload";
import { graphqlHTTP } from "express-graphql";
import graphqlSchema from "../graphql/index";
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

export default async ({ expressApp } = { expressApp: express.application }) => {

    expressApp.use('/graphql', graphqlHTTP(graphqlSchema))

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