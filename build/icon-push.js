angular.module('iconPush', [])
    
    //outputs <symbol> defs that can be <use>d by the icon directive later
    .directive('iconPush', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '-svg-' //gulp replace task drops in actual SVG here
        }
    })

    .directive('icon', function($compile) {
        return {
            restrict: 'E',
            compile: function() {
                
                return function(scope, iElem, iAttrs) {
                    var cssClasses = ['icon', 'icon-' + iAttrs.icon];
                    if(iAttrs.class) {
                        cssClasses.push(iAttrs.class)
                    }

                    var html ='<svg role="img" class="'+ cssClasses.join(' ') +'"><use xlink:href="#'+ iAttrs.icon +'"></use></svg>';
                    var e = $compile(html)(scope);
                    iElem.replaceWith(e);
                };

            }
        }
    });