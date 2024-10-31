import express from "express";
import dotenv from 'dotenv/config'
import path from 'path';
import { configDotenv } from "dotenv";
import myDateTime from "./views/date";
import getURL from "./getURL";
import viewEngine from "./viewEngine";
import initWebRoute from "./router/webRouter";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();
app.use(session({
    secret: 'keyboard Cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
viewEngine(app);
app.use(express.static(path.join(__dirname, 'public')))
initWebRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})