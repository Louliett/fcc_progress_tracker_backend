'use strict';

const User = require('../../mongodb/models/user.model.js');

const user_helper = {
    getAllUsers
}

async function getAllUsers() {
    try {
        const result = await User.find({}, '-_id');
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = user_helper;