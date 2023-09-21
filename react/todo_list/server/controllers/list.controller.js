const {List} = require('../models/list.model');

module.exports.createList = async (request, response) => {
    const { title, bgColor, cards, isCompleted } = request.body;

    try {
        const list = await List.create({
            title,
            bgColor,
            cards,
            isCompleted
        });
        if (!list) {
            return response.status(404).json({ message: 'Cant create list' });
        }
        response.json(list);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.getAllLists = async (request, response) => {
    try {
        const lists = await List.find({});
        if (!lists) {
            return response.status(404).json({ message: 'Lists not found' });
        }
        response.json(lists);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.getList = async (request, response) => {
    try {
        const list = await List.findOne({ _id: request.params.id });
        if (!list) {
            return response.status(404).json({ message: 'List not found' });
        }
        response.json(list);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.updateList = async (request, response) => {
    try {
        const updatedList = await List.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true }
        );
        if (!updatedList) {
            return response.status(404).json({ message: 'List cant update' });
        }
        response.json(updatedList);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports.deleteList = async (request, response) => {
    try {
        const deletedList = await List.deleteOne({ _id: request.params.id });
        if(!deletedList){
            return response.status(404).json({ message: 'List cant be deleted' });
        }
        response.json(deletedList);
    } catch (err) {
        response.status(400).json(err);
    }
}

module.exports.searchList = async (request, response) => {
    const query = request.params.query;
    try {
        const searchList = await List.find({
            'cards.title': { $regex: `^${query}`, $options: 'i' }
        })
        if(!searchList){
            return response.status(404).json({ message: 'Searched lists not found' });
        }
        response.json(searchList);
    } catch (err) {
        response.status(400).json(err);
    }
};

