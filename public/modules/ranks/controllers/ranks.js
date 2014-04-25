'use strict';

// Ranks controller
angular.module('ranks').controller('RanksController', ['$scope', '$stateParams', '$location', 'Authentication', 'Ranks',
    function($scope, $stateParams, $location, Authentication, Ranks) {
        $scope.authentication = Authentication;
        
        $scope.voting = function(rank) {
            if (!rank.updated) {
                rank.updated = [];
            }
            
            rank.votes += 1;

            rank.$update(function() {
                // $location.path('articles/' + article._id);
            });
        };

        // Create new Rank
        $scope.create = function() {
        	// Create new Rank object
            var rank = new Ranks({
                name: this.name,
                photo: this.photo
            });

            // Redirect after save
            rank.$save(function(response) {
                $location.path('ranks/' + response._id);
            });

            // Clear form fields
            this.name = '';
            this.photo = '';
        };

        // Remove existing Rank
        $scope.remove = function(rank) {
            if (rank) {
                rank.$remove();

                for (var i in $scope.ranks) {
                    if ($scope.ranks[i] === rank) {
                        $scope.ranks.splice(i, 1);
                    }
                }
            } else {
                $scope.rank.$remove(function() {
                    $location.path('ranks');
                });
            }
        };

        // Update existing Rank
        $scope.update = function() {
            var rank = $scope.rank;

            rank.$update(function() {
                $location.path('ranks/' + rank._id);
            });
        };

        // Find a list of Ranks
        $scope.find = function() {
            Ranks.query(function(ranks) {
                $scope.ranks = ranks;
            });
        };

        // Find existing Rank
        $scope.findOne = function() {
            Ranks.get({
                rankId: $stateParams.rankId
            }, function(rank) {
                $scope.rank = rank;
            });
        };
    }
]);