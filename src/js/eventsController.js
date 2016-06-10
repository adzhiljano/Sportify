(function (angular, _) {
  'use strict';
  angular.module("Sportify", []).controller('EventsController', ['$scope', function($scope) {
      $scope.items = [
		{
			date: '10/Юли',
			picId: 1,
			title: 'Събитие 1',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'football',
			ageRange: '1',
			age: '1-5г.'
		},
		{
			date: '10/Юли',
			picId: 1,
			title: 'Събитие 2',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'football',
			ageRange: '2',
			age: '5-10г.'
		},
		{
			date: '10/Юли',
			picId: 1,
			title: 'Събитие 3',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'football',
			ageRange: '3',
			age: '16-21г.'
		},
		{
			date: '10/Юли',
			picId: 2,
			title: 'Събитие 4',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'motocross',
			ageRange: '4',
			age: '16-21г.'
		},
		{
			date: '10/Юли',
			picId: 3,
			title: 'Събитие 5',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'motocross',
			ageRange: '3',
			age: '16-21г.'
		},
		{
			date: '10/Юли',
			picId: 4,
			title: 'Събитие 6',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'bmx',
			ageRange: '1',
			age: '1-5г.'
		},
		{
			date: '10/Юли',
			picId: 4,
			title: 'Събитие 7',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'bmx',
			ageRange: '2',
			age: '5-10г.'
		},
		{
			date: '10/Юли',
			picId: 4,
			title: 'Събитие 8',
			description: 'Описание',
			icon: 'fa-user',
			sportType: 'bmx',
			ageRange: '3',
			age: '16-21г.'
		}
	  ];
	  	
	$scope.viewItems = $scope.items;
	$scope.typeFilter = {'football' : true, 'bmx' : true, 'motocross': true};
	$scope.typeFilterAll = true;
	$scope.ageFilter = {1 : true, 2: true ,3: true ,4: true};
	$scope.ageFilterAll = true;
	$scope.newEvent = {	
			date: '10/Юли',
			picId: 4,
			icon: 'fa-user',
			sportType: 'bmx',
			ageRange: '3',
			age: '16-21г.'
	};
	
	$scope.onTypeFilterClick = function(st) {
		$scope.typeFilterAll = $scope.typeFilter['football'] && $scope.typeFilter['bmx'] && $scope.typeFilter['motocross'];
		$scope.updateViewItems();
	};
	
	$scope.onAgeRangeClick = function(af) {
		$scope.ageFilterAll = $scope.ageFilter['1'] && $scope.ageFilter['2'] && $scope.ageFilter['3'] && $scope.ageFilter['4'];
		$scope.updateViewItems();
	};
	
	$scope.onTypeFilterClickAll = function() {
		$scope.typeFilter = {'football' : true, 'bmx' : true, 'motocross': true};
		$scope.updateViewItems();
	};
	
	$scope.onAgeRangeClickAll = function() {
		$scope.ageFilter = {'1' : true, '2': true ,'3': true ,'4': true};
		$scope.updateViewItems();
	};
	
	$scope.updateViewItems = function() {
		var aFilter = [];
		_.forEach($scope.ageFilter, function(value, key) {
		  if(value) {
			aFilter.push(key);
		  }
		});
		var tFilter = [];
		_.forEach($scope.typeFilter, function(value, key) {
		  if(value) {
			tFilter.push(key);
		  }
		});
		if(aFilter.length) {
			$scope.viewItems = _.filter($scope.items, function(item) {
				return _.includes(aFilter, item.ageRange);
			});
		}
		else {
			$scope.viewItems = $scope.items
		}
		if(tFilter.length) {
			$scope.viewItems = _.filter($scope.viewItems, function(item) {
				return _.includes(tFilter, item.sportType);
			});
		}
	};
	
	$scope.createEvent = function () {
		$scope.items.push($scope.newEvent);
		$scope.newEvent = {	
			date: '10/Юли',
			picId: 4,
			icon: 'fa-user',
			sportType: 'bmx',
			ageRange: '3',
			age: '16-21г.'
		};
	};
	
  }]);
}(angular, _))