var React = require('react');
var ArticlesIndex = require('./articles_index');
var ArticlesHeader = require('./articles_header');
var MoreArticlesButton = require('./more_articles_button');
var ArticlesConstants = require('../constants/articles_constants');

//Header and article index
var Articles = React.createClass({
	getInitialState: function () {
		return { pages: 1 };
	},

	getMoreArticles: function () {
		this.setState({ pages: this.state.pages + 1 });
	},

	render: function () {
		return (
			<div className="main-page">
				<header>
					<ArticlesHeader pages={this.state.pages} />
				</header>
				<section className="articles-section">
					<ArticlesIndex pages={this.state.pages} />
				</section>
				<MoreArticlesButton callback={this.getMoreArticles} />
			</div>
		);
	},

});

module.exports = Articles;
