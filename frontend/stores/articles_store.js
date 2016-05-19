var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ArticlesConstants = require('../constants/articles_constants');

var _articles = [];
var intialArticleCount = 0;
var _filter = localStorage.filter || "";

function _resetArticles(articles) {
  _articles = articles;
	_filterArticles(_filter);
	intialArticleCount = _articles.length;
}

function _addArticles(articles) {
	_articles = _articles.concat(articles);
	_filterArticles(_filter);
}

function _filterArticles(filter) {
	_filter = localStorage.filter = filter;
	_articles.sort(function (a, b) {
		switch (filter) {
			case "words":
				aValue = a.words;
				bValue = b.words;
				break;
			case "time":
				aValue = (new Date(a.publish_at)).valueOf();
				bValue = (new Date(b.publish_at)).valueOf();
				break;
			default:
				aValue = bValue = 0;
		}

		if (aValue > bValue) {
    	return 1;
	  }
	  if (aValue < bValue) {
	    return -1;
	  }
	  return 0;
	});
}

var ArticlesStore = new Store(AppDispatcher);

ArticlesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
      case ArticlesConstants.ARTICLES_RECEIVED:
				_resetArticles(payload.articles);
        ArticlesStore.__emitChange();
        break;
			case ArticlesConstants.MORE_ARTICLES_RECEIVED:
			  if (_articles.length <= intialArticleCount) {
					_addArticles(payload.articles);
					ArticlesStore.__emitChange();
				}
				break;
			case ArticlesConstants.FILTER_ARTICLES:
				_filterArticles(payload.filter);
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
	total = _articles.length < total ? _articles.length : total;
	return _articles.slice(0, total);
};

ArticlesStore.count = function () {
	return _articles.length;
};

module.exports = ArticlesStore;
