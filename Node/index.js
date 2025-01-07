// index.js

const express = require('express');
const app = express();

// const bootstrap = require('bootstrap');
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

// const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/week2', (req, res) => {
    res.render('week2.ejs');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})
