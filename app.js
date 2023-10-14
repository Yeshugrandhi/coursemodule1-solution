(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.checkLunch = function() {
            if (!$scope.lunchItems) {
                $scope.message = 'Please enter data first';
                $scope.messageStyle = { color: 'red', borderColor: 'red' };
            } else {
                var items = $scope.lunchItems.split(',').filter(function(item) {
                    return item.trim() !== '';
                });
                if (items.length <= 3) {
                    $scope.message = 'Enjoy!';
                    $scope.messageStyle = { color: 'green', borderColor: 'green' };
                } else {
                    $scope.message = 'Too much!';
                    $scope.messageStyle = { color: 'green', borderColor: 'green' };
                }
            }
        };
    }
})();