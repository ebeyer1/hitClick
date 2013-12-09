'use strict';

/* Filters */

angular.module('hitClickFilters', []).filter('clickable', function() {
	return function(input) {
		return input ? '\u2713' : '\u2718';
	};
});