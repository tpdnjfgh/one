'use strict';

//Setting up route
angular.module('ranks').config(['$stateProvider',
	function($stateProvider) {
		// Ranks state routing
		$stateProvider.
		state('listRanks', {
			url: '/ranks',
			templateUrl: 'modules/ranks/views/list.html'
		}).
		state('createRank', {
			url: '/ranks/create',
			templateUrl: 'modules/ranks/views/create.html'
		}).
		state('viewRank', {
			url: '/ranks/:rankId',
			templateUrl: 'modules/ranks/views/view.html'
		}).
		state('editRank', {
			url: '/ranks/:rankId/edit',
			templateUrl: 'modules/ranks/views/edit.html'
		});
	}
]);