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
import initAPIRoute from "./router/apiRouter";

const app = express();
app.use(session({
    secret: 'keyboard Cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
//gọi session vào tất cả trang home có header
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
viewEngine(app);
app.use(express.static(path.join(__dirname, 'public')))

initAPIRoute(app)

initWebRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})