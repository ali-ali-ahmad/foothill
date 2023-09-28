const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    link: {
        type: String,
        // validate: {
        //     validator: function(value) {
        //         const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        //         return urlRegex.test(value);
        //     },
        //     message: 'Invalid URL format',
        // },
    }
}, {timestamps: true});
module.exports.Note = mongoose.model('Note', NoteSchema)