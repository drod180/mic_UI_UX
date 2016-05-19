var React = require('react');

var ArticlesIndexItem = React.createClass({
	_buildName: function () {
		var profile = this.props.article.profile;
		return profile.first_name + " " + profile.last_name;
	},

	_getTime: function () {
		var now = new Date();
		var createdAt = new Date(this.props.article.publish_at);
		var _MS_PER_DAY = 1000 * 60 * 60 * 24;
	  // Discard the time and time-zone information.
	  var utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
	  var utc2 = Date.UTC(createdAt.getFullYear(), createdAt.getMonth(), createdAt.getDate());

		var seconds = ((utc1 - utc2) / 1000);
		var minutes = (seconds /  60);
		var hours = (minutes / 60);
		var days = (hours / 24);

	  if (days >= 1 ){
			return Math.floor(days) + " days ago";
		} else if (hours >= 1) {
			return Math.floor(hours) + " hours ago";
		} else if (minutes >= 1) {
			return Math.floor(minutes) + " minutes ago";
		} else {
			return Math.floor(seconds) + " seconds ago";
		}
	},

  render: function () {
		var author = this._buildName();
		var submittedTime = this._getTime();
    return (
      <li className="article-item group">
				<div className="article-thumbnail-container">
					<img src={this.props.article.image} className="article-thumbnail" />
				</div>
				<div className="article-title-container">
					<p className="article-title">{this.props.article.title}</p>
				</div>
				<div className="article-author-container">
					<p className="article-author">{author}</p>
				</div>
				<div className="article-words-container">
					<p className="article-words">{this.props.article.words}</p>
				</div>
				<div className="article-submitted-container">
					<p className="article-submitted">{submittedTime}</p>
				</div>
      </li>
    );
  },
});

module.exports = ArticlesIndexItem;
