const {Todo} = require('../models/todo.model');

module.exports.createToDo = (request, response) => {
    const {title, description} = request.body;
    Todo.create({
        title,
        description
    })
    .then(note => response.json(note))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllTodo = (request, response) => {
    Todo.find({})
        .then(todos => response.json(todos))
        .catch(err => response.status(400).json(err))
}

module.exports.getTodosPage = (request, response) => {
    const page = parseInt(request.query.page) || 1; 
    const limit = parseInt(request.query.limit) || 10;

    const skip = (page - 1) * limit;

    Todo.find({})
        .skip(skip)
        .limit(limit)
        .then(todos => response.json(todos))
        .catch(err => response.status(400).json(err));
};


module.exports.getTodo = (request, response) => {
    Todo.findOne({_id: request.params.id})
        .then(todo => response.json(todo))
        .catch(err => response.status(400).json(err))
}

module.exports.updateTodo = (request, response) => {
    Todo.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedTodo => response.json(updatedTodo))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteTodo = (request, response) => {
    Todo.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

module.exports.searchTodo = (request, response) => {
    const query = request.params.query; 

    const searchRegex = new RegExp(`^${query}`, 'i');

    Todo.find({ $or: [{ title: searchRegex }, { content: searchRegex }] })
        .then(Todos => response.json(Todos))
        .catch(err => response.status(400).json(err));

};