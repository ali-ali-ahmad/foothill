const TodoController = require ('../controllers/todo.controller');
module.exports = function(app){
    app.post('/', TodoController.createToDo);
    app.get('/', TodoController.getAllTodo);
    app.get('/:id', TodoController.getTodo);
    app.put('/:id', TodoController.updateTodo);
    app.delete('/:id', TodoController.deleteTodo);
}