const NoteController = require ('../controllers/note.controller');
module.exports = function(app){
    app.post('/api/notes', NoteController.createNote);
    app.get('/api/notes', NoteController.getAllNotes);
    app.get('/api/notes/page', NoteController.getNotesPage);
    app.get('/api/notes/:id', NoteController.getNote);
    app.put('/api/notes/:id', NoteController.updateNote);
    app.delete('/api/notes/:id', NoteController.deleteNote);
    app.get('/api/notes/search/:query', NoteController.searchNotes);}