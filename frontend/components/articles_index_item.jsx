var React = require('react');

var ArticlesIndexItem = React.createClass({

  render: function () {
		var author = "Temp";
		var submittedTime = "Temp time";
    return (
      <li className="form-item">
				<p>{this.props.article.title}</p>
				<p>{author}</p>
				<p>{this.props.article.words}</p>
				<p>{submittedTime}</p>
      </li>
    );
  },
});

module.exports = ArticlesIndexItem;
