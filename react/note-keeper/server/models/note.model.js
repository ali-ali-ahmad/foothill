const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    backgroundColor: {
        type: String,
    }
}, {timestamps: true});
module.exports.Note = mongoose.model('Note', NoteSchema)