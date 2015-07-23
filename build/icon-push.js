angular.module('iconPush', [])

    .directive('iconPush', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '-svg-'
        }
    });