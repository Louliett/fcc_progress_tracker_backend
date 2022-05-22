'use strict';

const chapter = require('../../mongodb/models/chapter.model');

const chapter_helper = {
    getAllChapters
}

async function getAllChapters() {
    try {
        const result = await chapter.find({});
        console.log(result[0].courses[0]);
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = chapter_helper;