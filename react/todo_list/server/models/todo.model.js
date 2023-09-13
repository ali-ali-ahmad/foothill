const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:3,
        required: true,
    },
    description: {
        type: String
    }
}, {timestamps: true});
module.exports.Todo = mongoose.model('Todo', TodoSchema)