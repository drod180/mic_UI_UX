var ArticlesActions = require('../actions/articles_actions');

var ArticlesUtils = {
	fetchArticles: function () {
		var dataReq = new XMLHttpRequest();
		dataReq.addEventListener("load", function () {
			var articles = JSON.parse(this.responseText);
			ArticlesActions.receiveArticles(articles);
		});
		dataReq.open("GET", "data/articles.json", true);
		dataReq.send();
	}
};

module.exports = ArticlesUtils;
