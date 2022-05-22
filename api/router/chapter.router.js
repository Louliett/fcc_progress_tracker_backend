'use strict';

const express = require('express');
const router = express.Router();
const help = require('../router_helpers/chapter.helper');


//gets all the chapters from the database
router.get('/', async(req, res) => {
    try {
        res.send(await help.getAllChapters());
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;