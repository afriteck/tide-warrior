// This is not a redeclaration. Just referencing the mainApp module
var mainApp = angular.module('mainApp');

/* This is very similar to the PlacesController for now
 * The thought is it might get very different from the places page
 * and will eventually need its own place later on.
 * However, if it continues to be a bunch of repitition of the Places* code,
 * we can refactor and merge the two later
 */
mainApp.controller('EventsController', [
	'$scope',
	'EventsService',
	function($scope, EventsService) {
		EventsService.getAllEvents(function(err, data) {
			if (err) {
				$scope.error = true;
				$scope.errorMessage = err.errorMessage;
			}
			else {
				$scope.events = data;
			}
		});
	}
]);