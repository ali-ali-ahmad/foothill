const ListController = require ('../controllers/list.controller');
module.exports = function(app){
    app.post('/', ListController.createList);
    app.get('/', ListController.getAllLists);
    app.get('/:id', ListController.getList);
    app.put('/:id', ListController.updateList);
    app.delete('/:id', ListController.deleteList);
    app.get('/search/:query', ListController.searchList);
}