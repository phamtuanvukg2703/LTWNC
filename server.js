import express from "express";
import dotenv from 'dotenv/config'
import myDateTime from "./date";
import getURL from "./getURL";
import viewEngine from "./viewEngine";
const app = express();
const port = process.env.PORT;
const ejs = viewEngine(app);
app.get('/home', (req, res) => {
    res.render("home")
})
app.get('/about', (req, res) => {
    res.render("about")
})
app.get('/ejs', (req, res) => {
    res.render("test")
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World!. Page about')
})
app.get('/date', (req, res) => {
    res.send(myDateTime())
})
app.get('/geturl', (req, res) => {
    res.send(getURL.getPath(req))
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})