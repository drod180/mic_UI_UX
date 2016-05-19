var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticlesConstants = require('../constants/articles_constants');

var articles = [];

function _resetArticles(articles) {
  _articles = articles;
}

var ArticlesStore = new Store(AppDispatcher);

ArticlesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case ArticlesConstants.ARTICLES_RECEIVED:
				_resetArticles(payload.articles);
        ArticlesStore.__emitChange();
        break;
      default:
      //no op
    }
};

ArticlesStore.all = function () {
	return _articles.slice(0);
};

module.exports = ArticlesStore;
