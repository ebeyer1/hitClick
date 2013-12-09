'use strict';

/* App Module */

var hitClickApp = angular.module('hitClickApp', [
	'ngRoute',
	'hitClickControllers',
	'hitClickFilters'
]);

hitClickApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/buildings', {
			templateUrl: 'partials/building-list.html',
			controller: 'BuildingListCtrl'
		}).
		otherwise({
			redirectTo: '/buildings'
		});
	}]);