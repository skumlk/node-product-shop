
import * as express from "express";
import productRoutes from "../routes/ProductRoutes";

export default async ({ expressApp } = { expressApp: express.application }) => {
    expressApp.use("/api/products", productRoutes)
}