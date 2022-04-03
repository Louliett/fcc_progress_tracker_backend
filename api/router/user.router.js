'use strict';

const express = require('express');
const router = express.Router();
const user_helper = require('../route_helpers/user.helper');

//gets all the users from the database
router.get('/', async (req, res) => {
    console.log('im called');
    try {
        console.log('will send this:', await user_helper.getAllUsers());
        res.send(await user_helper.getAllUsers());
    } catch (error) {
        log.error(error);
        res.send(error);
    }
});

module.exports = router;