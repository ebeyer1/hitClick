'use strict';

/* Controllers */


var hitClickControllers = angular.module('hitClickControllers', []);

hitClickControllers.controller('BuildingListCtrl', ['$scope', '$http',
	function($scope, $http) {
	$http.get('buildings/buildings.json').success(function(data) {
		$scope.buildings = data;
	});

	$scope.currentMoney = 20;

	$scope.collectTax = function() {
		$scope.currentMoney += 1; // use actual formula when that's figured out
	}

	$scope.buyBuilding = function(building) {
		if ($scope.currentMoney >= building.money) {
			$scope.currentMoney -= building.money;
			building.owned += 1;
			return true;
		}
		return false;
	}
}]);