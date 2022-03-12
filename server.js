const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static('public'));

// These are the ones that make handlebars work with express
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars")

app.get('/', (req, res) => {
    res.render("homepage")
})

app.get('/login', (req, res) => {
    res.render("login")
})

app.get('/clock', (req, res) => {
    res.render("clock")
})

app.get('/profile', (req, res) => {
    res.render("profile")
})

app.listen(3001, () => {
    console.log("Server is running on PORT 3001!")
})