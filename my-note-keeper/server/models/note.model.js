const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength:3,
        required: true,
    },
    content: {
        type: String
    }
}, {timestamps: true});
module.exports.Note = mongoose.model('Note', NoteSchema)