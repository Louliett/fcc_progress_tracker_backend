"use strict";

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

//routes
const user_router = require('./api/router/user.router');
const chapter_router = require('./api/router/chapter.router');

//database setup
const mongo_host = process.env.MONGO_LOCAL_HOST || MONGO_CLOUD_HOST;
const mongo_port = process.env.MONGO_LOCAL_PORT || MONGO_CLOUD_PORT;
const mongo_database = process.env.MONGO_LOCAL_DB || MONGO_CLOUD_DB;

mongoose.connect(`mongodb://${mongo_host}:${mongo_port}/${mongo_database}`, { useUnifiedTopology: true, useNewUrlParser: true });
const database_connection = mongoose.connection;
database_connection.once('open', ()=>{ console.log("MongoDB connection success"); });
database_connection.on('error', error => console.log(error));

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//api routes
app.use('/users', user_router);
app.use('/chapters', chapter_router);

//handle incorrect request
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

module.exports = app;