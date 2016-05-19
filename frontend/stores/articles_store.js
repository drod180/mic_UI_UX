var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticlesConstants = require('../constants/articles_constants');

var _articles = [];
var intialArticleCount = 0;

function _resetArticles(articles) {
  _articles = articles;
	intialArticleCount = _articles.length;
}

function _addArticles(articles) {
	if (_articles.length <= intialArticleCount) {
		_articles = _articles.concat(articles);
	}
}

var ArticlesStore = new Store(AppDispatcher);

ArticlesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case ArticlesConstants.ARTICLES_RECEIVED:
				_resetArticles(payload.articles);
        ArticlesStore.__emitChange();
        break;
			case ArticlesConstants.MORE_ARTICLES_RECEIVED:
				_addArticles(payload.articles);
				ArticlesStore.__emitChange();
				break;
      default:
      //no op
    }
};

ArticlesStore.all = function () {
	return _articles.slice(0);
};

ArticlesStore.some = function (total) {
	return _articles.slice(0, total);
};

ArticlesStore.count = function () {
	return _articles.length;
};

module.exports = ArticlesStore;
