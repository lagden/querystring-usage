/* global require, window, document */
'use strict';

require(['./config'], function () {
	require(['querystring/index'], function (querystring) {
		var result = document.querySelector('#result');
		var out;
		if (window.location.search !== '') {
			out = querystring.parse(window.location.search.substr(1));
			result.textContent = JSON.stringify(out);
			console.debug(out);
		}
	});
});
