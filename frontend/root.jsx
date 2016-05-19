var	React = require('react');
var ReactDOM = require('react-dom');
var Articles = require('./components/articles');


window.initializeApp = function () {
	ReactDOM.render(
		<Articles />,
		document.getElementById('root')
	);
};
