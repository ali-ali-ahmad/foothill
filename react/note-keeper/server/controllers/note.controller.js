const {Note} = require('../models/note.model');

module.exports.createNote = async (request, response) => {
    const { title, content, link } = request.body;

    try {
        const note = await Note.create({
            title,
            content,
            link
        });
        if (!note) {
            return response.status(404).json({ message: 'Cant create note' });
        }
        response.json(note);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.getAllNotes = async (request, response) => {
    try {
        const notes = await Note.find({});
        if (!notes) {
            return response.status(404).json({ message: 'Notes not found' });
        }
        response.json(notes);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.getNote = async (request, response) => {
    try {
        const note = await Note.findOne({ _id: request.params.id });
        if (!note) {
            return response.status(404).json({ message: 'Note not found' });
        }
        response.json(note);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.updateNote = async (request, response) => {
    try {
        const updatedNote = await Note.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true }
        );
        if (!updatedNote) {
            return response.status(404).json({ message: 'Note cant update' });
        }
        response.json(updatedNote);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.deleteNote = async (request, response) => {
    try {
        const deletedNote = await Note.deleteOne({ _id: request.params.id });
        if(!deletedNote){
            return response.status(404).json({ message: 'Note cant be deleted' });
        }
        response.json(deletedNote);
    } catch (err) {
        response.status(400).json(err);
    }
}

module.exports.searchNotes = async(request, response) => {
    const query = request.params.query; 
    const searchRegex = new RegExp(`^${query}`, 'i');

    try {
        const searchedNote = await Note.find({ $or: [{ title: searchRegex }, { content: searchRegex }] })
        if(!searchedNote){
            return response.status(404).json({ message: 'Searched Notes not found' });
        }
        response.json(searchedNote);
    } catch (err) {
        response.status(400).json(err);
    }
};

