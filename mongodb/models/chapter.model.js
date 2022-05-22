'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapter_schema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true
    },
    chapter_title: {
        type: String,
    },
    courses: [{
        course_title: {
            type: String
        },
        lessons: [{
            lesson_title: { 
                type: String
            },
            lesson_solution: {
                type: String
            }
        }]
    }]

}, {
    collection: 'Chapters'
});

const chapter = mongoose.model('chapter', chapter_schema);

module.exports = chapter;