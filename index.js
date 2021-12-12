const express = require('express');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const app = express();
const path = require('path');
const morgan = require('morgan');
const res = require('express/lib/response');


const port = '3000';

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
console.log('express working');

app.get('/', (req, res) => {

    res.render('home', { name: 'shames' });
});


app.listen(port, () => {
    console.log(`listing on ${port}`);
});