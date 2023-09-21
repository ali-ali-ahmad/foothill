const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:3,
        required: true,
    },
    bgColor: {
        type: String,
    },
    cards: [
        {
            title: {type: String},
            description: {type: String},
            isCompleted: {type: Boolean}
        }
    ]
}, {timestamps: true});
module.exports.Todo = mongoose.model('Todo', TodoSchema)