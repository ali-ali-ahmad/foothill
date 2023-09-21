const {Todo} = require('../models/todo.model');

module.exports.createToDo = async (request, response) => {
    const { title, bgColor, cards, isCompleted } = request.body;

    try {
        const todo = await Todo.create({
            title,
            bgColor,
            cards,
            isCompleted
        });
        if (!todo) {
            return response.status(404).json({ message: 'cant create list' });
        }
        response.json(todo);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.getAllTodo = async (request, response) => {
    try {
        const todos = await Todo.find({});
        if (!todos) {
            return response.status(404).json({ message: 'lists not found' });
        }
        response.json(todos);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.getTodo = async (request, response) => {
    try {
        const todo = await Todo.findOne({ _id: request.params.id });
        if (!todo) {
            return response.status(404).json({ message: 'Todo not found' });
        }
        response.json(todo);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.updateTodo = async (request, response) => {
    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true }
        );
        if (!updatedTodo) {
            return response.status(404).json({ message: 'Todo not found' });
        }
        response.json(updatedTodo);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.deleteTodo = async (request, response) => {
    try {
        const deletedTodo = await Todo.deleteOne({ _id: request.params.id });
        if(!deletedTodo){
            return response.status(404).json({ message: 'Todo not found' });
        }
        response.json(deletedTodo);
    } catch (err) {
        response.status(400).json(err);
    }
}

module.exports.searchTodo = async (request, response) => {
    const query = request.params.query;
    try {
        const searchTodo = await Todo.find({
            'cards.title': { $regex: `^${query}`, $options: 'i' }
        })
        if(!searchTodo){
            return response.status(404).json({ message: 'searched lists not found' });
        }
        response.json(searchTodo);
    } catch (err) {
        response.status(400).json(err);
    }
};

