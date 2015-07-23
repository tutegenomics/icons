angular.module('iconPush', [])

    .directive('iconPush', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '-svg-'
        }
    })

    .directive('icon', function($compile) {
        return {
            restrict: 'E',
            compile: function(element, attrs) {
                return function(scope, iElem, iAttrs) {
                    var html ='<svg role="img" class="'+attrs.class+'"><use xlink:href="#' + attrs.class+'"></use></svg>';
                    var e = $compile(html)(scope);
                    iElem.replaceWith(e);
                };
            }
        }
    });