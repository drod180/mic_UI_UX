var React = require('react');
var ArticlesIndexItem = require('./articles_index_item');
var ArticlesStore = require('../stores/articles_store');
var ArticlesUtils = require('../utils/articles_utils');

var ArticlesIndex = React.createClass({
	getInitialState : function () {
		return { articles: [] };
  },

  componentDidMount: function () {
    this.articlesStoreToken = ArticlesStore.addListener(this._onChange);
		ArticlesUtils.fetchArticles();
  },

  componentWillUnmount: function () {
		this.articlesStoreToken.remove();
  },

  _getStateFromStore: function () {
		return ArticlesStore.all();
  },

  _onChange: function () {
		this.setState({ articles: this._getStateFromStore() });
  },

  render: function () {
		var articles = this.state.articles.map(function (article, i) {
			return (<ArticlesIndexItem article={article} key={i} />);
		});
		return (
			<div>
				<ul className="articles-list">{articles}</ul>
			</div>
		);
  }
});

module.exports = ArticlesIndex;
