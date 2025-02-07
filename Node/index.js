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

app.get('/week3', (req, res) => {
    res.render('week3.ejs');
})

app.get('/week4', (req, res) => {
    res.render('week4.ejs');
})

app.get('/week5', (req, res) => {
    res.render('week5.ejs');
})

app.get('/week6', (req, res) => {
    res.render('week6.ejs');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})
