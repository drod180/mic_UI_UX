var React = require('react');
var ArticlesConstants = require('../constants/articles_constants');
var ArticlesStore = require('../stores/articles_store');
var ArticlesActions = require('../actions/articles_actions');

var ArticlesHeader = React.createClass({
	getInitialState : function () {
		return { count: 0 };
  },

	componentDidMount: function () {
    this.articlesStoreToken = ArticlesStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
		this.articlesStoreToken.remove();
  },

	_getStateFromStore: function () {
		return ArticlesStore.count();
  },

  _onChange: function () {
		this.setState({ count: this._getStateFromStore() });
  },

	_filterWords: function () {
		ArticlesActions.filterArticles("words");
	},

	_filterTime: function () {
		ArticlesActions.filterArticles("time");
	},

	render: function () {
		var count = this.state.count <
			(this.props.pages * ArticlesConstants.ARTICLES_PER_PAGE) ?
			this.state.count : this.props.pages * ArticlesConstants.ARTICLES_PER_PAGE;

		return (
			<div className="articles-header">
				<h4>{"Unpublished Articles " + "(" + count + ")"}</h4>
				<h4>Authors</h4>
				<h4 onClick={this._filterWords}>Words</h4>
				<h4 onClick={this._filterTime}>Submitted</h4>
			</div>
		);
	}
});

module.exports = ArticlesHeader;
