'use strict';

const express = require('express');
const router = express.Router();
const help = require('../router_helpers/user.helper');

//gets all the users from the database
router.get('/', async (req, res) => {
    console.log('im called');
    try {
        console.log('will send this:', await help.getAllUsers());
        res.send(await help.getAllUsers());
    } catch (error) {
        log.error(error);
        res.send(error);
    }
});

module.exports = router;