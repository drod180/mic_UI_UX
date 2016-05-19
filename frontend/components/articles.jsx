var React = require('react');
var ArticlesIndex = require('./articles_index');
var ArticlesHeader = require('./articles_header');

//Header and article index
var Articles = React.createClass({
	render: function () {
		return (
			<div className="main-page">
				<header>
					<ArticlesHeader />
				</header>
				<section className="articles-section">
					<ArticlesIndex />
				</section>
			</div>
		);
	}
});

module.exports = Articles;
