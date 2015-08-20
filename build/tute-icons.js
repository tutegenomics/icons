angular.module('tute-icons', [])
    
    .provider('iconPushProvider', function iconPushProvider() {
        let defaults = {
            baseClass: 'icon'
        };

        let options;

        function setOpts(obj) {
            options = angular.extend(defaults, obj);
        }

        function getOpts() {
            return (angular.isObject(options) ? options : defaults);
        }

        angular.extend(this, {
            setOpts,
            getOpts,
            $get: () => this
        });
    })

    .service('iconService', function() {
        var icons = __REPLACE__;

        return {
            getIcon: function(iconName) {
                return icons[iconName];
            }
        }
    })

    ////outputs <symbol> defs that can be <use>d by the icon directive later
    //.directive('iconDefs', function() {
    //    return {
    //        restrict: 'E',
    //        replace: true,
    //        template: '__SVG__' //gulp replace task drops in actual SVG here
    //    }
    //})

    .directive('icon', ['$compile', 'iconPushProvider', 'iconService', function($compile, iconPushProvider, iconService) {
        
        const opts = iconPushProvider.getOpts();

        return {
            restrict: 'E',
            compile: compileFn
        };

        function compileFn() {
            return function(scope, iElem, iAttrs) {

                var icon = angular.element(iconService.getIcon(iAttrs.icon));

                let cssClasses = [opts.baseClass, opts.baseClass + '-' + iAttrs.icon];
                if(iAttrs.class) {
                    cssClasses.push(iAttrs.class)
                }

                icon.addClass(cssClasses.join(' '));
                
                let e = $compile(icon)(scope);
                iElem.replaceWith(e);
            };
        }

    }]);