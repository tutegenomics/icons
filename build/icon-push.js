angular.module('iconPush', [])

    .directive('iconPush', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '-svg-'
        }
    })

    .directive('icon', function() {
        return {
            restrict: 'E',
            replace: true,
            link: function(scope, element,attrs) {
                scope.class = attrs.class;
            },
            template: '<svg role="img" class="{{class}}"><use xlink:href="#{{class}}"></use></svg>'
        }
    });