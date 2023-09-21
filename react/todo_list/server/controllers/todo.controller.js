const {Todo} = require('../models/todo.model');

module.exports.createToDo = (request, response) => {
    const {title, bgColor, cards} = request.body;
    Todo.create({
        title,
        bgColor,
        cards
    })
    .then(todo => response.json(todo))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllTodo = (request, response) => {
    Todo.find({})
        .then(todos => response.json(todos))
        .catch(err => response.status(400).json(err))
}

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

    Todo.find({
        'cards.title': { $regex: `^${query}`, $options: 'i' }
    })
        .then(todos => {
            response.json(todos);
        })
        .catch(err => {
            response.status(400).json(err);
        });
};

