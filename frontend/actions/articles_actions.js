var AppDispatcher = require('../dispatcher/dispatcher');
var ArticlesConstants = require('../constants/articles_constants');

ArticlesActions = {
	receiveArticles: function (articles) {
		AppDispatcher.dispatch({
      actionType: ArticlesConstants.ARTICLES_RECEIVED,
      articles: articles
    });
	},

	receiveMoreArticles: function (articles) {
		AppDispatcher.dispatch({
      actionType: ArticlesConstants.MORE_ARTICLES_RECEIVED,
      articles: articles
    });
	}
};


module.exports = ArticlesActions;
