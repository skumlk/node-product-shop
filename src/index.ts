import { config } from "./config/config"
import startup from "./startup/index"
import express from "express"
import { Server } from "http"

let server : Server
const app = express()

async function startServer() {

    console.log("Starting server...")

    try {
        await startup({ expressApp: app });
    } catch (error: any) {
        console.log(error.message)
        return process.exit(1);
    }

    server = app.listen(config.SERVER_PORT, () => {
        console.log("Server Started on port: ", config.SERVER_PORT)
    }).on("error", (err: any) => {
        console.log(err)
    })
}

startServer()
export { app, server }
