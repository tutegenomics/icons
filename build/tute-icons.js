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

    //outputs <symbol> defs that can be <use>d by the icon directive later
    .directive('iconDefs', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '__SVG__' //gulp replace task drops in actual SVG here
        }
    })

    .directive('icon', ['$compile', 'iconPushProvider', function($compile, iconPushProvider) {
        
        const opts = iconPushProvider.getOpts();

        return {
            restrict: 'E',
            compile: compileFn
        };

        function compileFn() {
            return function(scope, iElem, iAttrs) {
                let cssClasses = [opts.baseClass, opts.baseClass + '-' + iAttrs.icon];
                if(iAttrs.class) {
                    cssClasses.push(iAttrs.class)
                }

                let html =`
                    <svg role="img" class="${cssClasses.join(' ')}">
                        <use xlink:href="#${iAttrs.icon}"></use>
                    </svg>`;
                
                let e = $compile(html)(scope);
                iElem.replaceWith(e);
            };
        }

    }]);