'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    chapters: {
        type: Array
    }
}, {
    collection: 'Users'
});

const User = mongoose.model('User', user_schema);

module.exports = User;