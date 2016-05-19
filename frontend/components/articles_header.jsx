var React = require('react');

var ArticlesHeader = React.createClass({
	render: function () {
		var num = 66;
		return (
			<div className="articles-header">
				<h4>{"Unpublished Articles" + "(" + num + ")"}</h4>
				<h4>Authors</h4>
				<h4>Words</h4>
				<h4>Submitted</h4>
			</div>
		);
	}
});

module.exports = ArticlesHeader;
