const NoteController = require ('../controllers/note.controller');
module.exports = function(app){
    app.post('/', NoteController.createNote);
    app.get('/', NoteController.getAllNotes);
    app.get('/:id', NoteController.getNote);
    app.put('/:id', NoteController.updateNote);
    app.delete('/:id', NoteController.deleteNote);
    app.get('/search/:query', NoteController.searchNotes);
}