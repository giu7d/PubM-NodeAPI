//Import's
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const query = require('./query');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', query.getAll);


module.exports = app;