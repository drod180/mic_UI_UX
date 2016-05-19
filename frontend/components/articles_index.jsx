var React = require('react');
var ArticlesIndexItem = require('./articles_index_item');
var ArticlesStore = require('../stores/articles_store');
var ArticlesUtils = require('../utils/articles_utils');
var ArticlesConstants = require('../constants/articles_constants');

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

	componentWillReceiveProps: function (newProps) {
		this.setState({ articles: this._getStateFromStore(newProps.pages) });
	},

  _getStateFromStore: function (pages) {
		if (pages * ArticlesConstants.ARTICLES_PER_PAGE > ArticlesStore.count()) {
			ArticlesUtils.fetchMoreArticles();
		}
		return ArticlesStore.some(pages *
			 ArticlesConstants.ARTICLES_PER_PAGE);
  },

  _onChange: function () {
		this.setState({ articles: this._getStateFromStore(this.props.pages) });
  },

  render: function () {
		var articles = this.state.articles.map(function (article, i) {
			return (<ArticlesIndexItem article={article} key={i} />);
		});
		return (
			<div className="articles-list">
				<ul>{articles}</ul>
			</div>
		);
  }
});

module.exports = ArticlesIndex;
