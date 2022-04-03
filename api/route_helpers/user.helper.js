'use strict';

const User = require('../../mongodb/models/user.model.js');

const user_helper = {
    getAllUsers
}

async function getAllUsers() {
    console.log('get all users fired');
    try {
        console.log('im trying fetching');
        const result = await User.find({}, '-_id');
        console.log('fetched this ', result);
        console.log('returning this ', result);
        return result;
    } catch (error) {
        console.log('big errror from gettin all users');
        return error;
    }
}

module.exports = user_helper;