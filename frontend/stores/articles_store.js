var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticlesConstants = require('../constants/articles_constants');

var ArticlesStore = new Store(AppDispatcher);

module.exports = ArticlesStore;
