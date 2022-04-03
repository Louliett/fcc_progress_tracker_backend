'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Number, index: true, unique: true},
    email: { type: String, required: true },
    password: { type: String, required: true},
    username: { type: String },
    chapters: { type: Array }
}, { collection: 'Users' });

const User = mongoose.model('User', userSchema);

module.exports = User;