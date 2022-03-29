"use strict";

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { runInNewContext } = require('vm');

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


//handle incorrect request
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

module.exports = app;