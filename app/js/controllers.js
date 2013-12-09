'use strict';

/* Controllers */


var hitClickControllers = angular.module('hitClickControllers', []);

hitClickControllers.controller('BuildingListCtrl', ['$scope', '$http',
	function($scope, $http) {
	$http.get('buildings/buildings.json').success(function(data) {
		$scope.buildings = data;
	});

	$scope.currentMoney = 20;
	$scope.mps = 0;

	$scope.collectTax = function() {
		$scope.currentMoney += 1; // use actual formula when that's figured out
	}

	$scope.buyBuilding = function(building) {
		if ($scope.currentMoney >= building.money) {
			$scope.currentMoney -= building.money;
			building.owned += 1;
			building.money *= 2;
			return true;
		}
		return false;
	}

	$scope.doAThing = function() {
		setInterval(function() {
			var increase = 0;
			for (var i = 0; i < $scope.buildings.length; i++) {
				increase += $scope.buildings[i].owned * (i+1);				
			};
			$scope.currentMoney += increase;
			$scope.mps = increase;
			$scope.$apply();
		}, 1000);
	}
}]);