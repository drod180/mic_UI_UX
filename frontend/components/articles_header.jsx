var React = require('react');
var ArticlesConstants = require('../constants/articles_constants');
var ArticlesStore = require('../stores/articles_store');

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

	render: function () {
		var count = this.state.count <
			(this.props.pages * ArticlesConstants.ARTICLES_PER_PAGE) ?
			this.state.count : this.props.pages * ArticlesConstants.ARTICLES_PER_PAGE;

		return (
			<div className="articles-header">
				<h4>{"Unpublished Articles " + "(" + count + ")"}</h4>
				<h4>Authors</h4>
				<h4>Words</h4>
				<h4>Submitted</h4>
			</div>
		);
	}
});

module.exports = ArticlesHeader;
