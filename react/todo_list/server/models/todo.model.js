const mongoose = require('mongoose');

// const CardSchema = new mongoose.Schema({
//     title: String,
//     description: String,
// }, {timestamps: true});

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:3,
        required: true,
    },
    bgColor: {
        type: String,
    },
    cards: {
        type: Array,
    }
}, {timestamps: true});
module.exports.Todo = mongoose.model('Todo', TodoSchema)