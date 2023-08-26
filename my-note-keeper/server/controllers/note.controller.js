const {Note} = require('../models/note.model');

module.exports.createNote = (request, response) => {
    const {title, content} = request.body;
    Note.create({
        title,
        content
    })
    .then(note => response.json(note))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllNotes = (request, response) => {
    Note.find({})
        .then(notes => response.json(notes))
        .catch(err => response.status(400).json(err))
}

module.exports.getNotesPage = (request, response) => {
    const page = parseInt(request.query.page) || 1; 
    const limit = parseInt(request.query.limit) || 10;

    const skip = (page - 1) * limit;

    Note.find({})
        .skip(skip)
        .limit(limit)
        .then(notes => response.json(notes))
        .catch(err => response.status(400).json(err));
};


module.exports.getNote = (request, response) => {
    Note.findOne({_id: request.params.id})
        .then(note => response.json(note))
        .catch(err => response.status(400).json(err))
}

module.exports.updateNote = (request, response) => {
    Note.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedNote => response.json(updatedNote))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteNote = (request, response) => {
    Note.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

module.exports.searchNotes = (request, response) => {
    const query = request.params.query; 

    const searchRegex = new RegExp(`^${query}`, 'i');

    Note.find({ $or: [{ title: searchRegex }, { content: searchRegex }] })
        .then(notes => response.json(notes))
        .catch(err => response.status(400).json(err));

};