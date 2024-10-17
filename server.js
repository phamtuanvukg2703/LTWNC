import express from "express";
import dotenv from 'dotenv/config'
import path from 'path';
import { configDotenv } from "dotenv";
import myDateTime from "./date";
import getURL from "./getURL";
import viewEngine from "./viewEngine";
import initWebRoute from "./router/webRouter";
const app = express();
const port = process.env.PORT;
viewEngine(app);
app.use(express.static(path.join(__dirname, 'public')))
initWebRoute(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})