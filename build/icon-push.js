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
                    var styles = '';

                    // climb the node tree
                    function upLevel(element, style) {
                        if (element.parentElement != null) {
                            if (element.parentElement.style[style]) {
                                if (style=='color') {
                                    styles += 'fill:'+element.parentElement.style[style]+';';
                                } else if (style=='fontSize') {
                                    styles += 'height:'+element.parentElement.style[style]+';';
                                    styles += 'width:'+element.parentElement.style[style]+';';
                                }
                            } else {
                                upLevel(element.parentElement, style);
                            }
                        }
                    }

                    upLevel(iElem[0], 'color');
                    upLevel(iElem[0], 'fontSize');

                    var html ='<svg role="img" class="icon '+attrs.class+'" style="'+styles+'"><use xlink:href="#' + attrs.icon+'"></use></svg>';
                    var e = $compile(html)(scope);
                    iElem.replaceWith(e);
                };
            }
        }
    });