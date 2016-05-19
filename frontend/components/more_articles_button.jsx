var React = require('react');

var MoreArticlesButton = React.createClass({
	_addRows: function () {
		this.props.callback();
	},

	render: function () {
		return (
			<div>
				<a className="more-button" onClick={this._addRows}>More Articles</a>
			</div>
		);
	}
});

module.exports = MoreArticlesButton;
