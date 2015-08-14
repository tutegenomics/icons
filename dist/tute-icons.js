'use strict';

angular.module('tute-icons', []).provider('iconPushProvider', function iconPushProvider() {
    var _this = this;

    var defaults = {
        baseClass: 'icon'
    };

    var options = undefined;

    function setOpts(obj) {
        options = angular.extend(defaults, obj);
    }

    function getOpts() {
        return angular.isObject(options) ? options : defaults;
    }

    angular.extend(this, {
        setOpts: setOpts,
        getOpts: getOpts,
        $get: function $get() {
            return _this;
        }
    });
})

//outputs <symbol> defs that can be <use>d by the icon directive later
.directive('iconDefs', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="add-circle-outline" viewbox="0 0 24 24"><title>add-circle-outline icon</title><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></symbol><symbol id="add-circle" viewbox="0 0 24 24"><title>add-circle icon</title><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></symbol><symbol id="add" viewbox="0 0 24 24"><title>add icon</title><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></symbol><symbol id="apps" viewbox="0 0 24 24"><title>apps icon</title><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></symbol><symbol id="arrow-back" viewbox="0 0 24 24"><title>arrow-back icon</title><path d="M20 11H7.83l5.585-5.585L12 4l-8 8 8 8 1.415-1.415L7.83 13H20v-2z"/></symbol><symbol id="arrow-down" viewbox="-287 189 24 24"><title>arrow-down icon</title><style type="text/css">.st0{fill:#404040;}</style><path class="st0" d="M-276 193v12.2l-5.6-5.6-1.4 1.4 8 8 8-8-1.4-1.4-5.6 5.6V193h-2z"/></symbol><symbol id="arrow-drop-down" viewbox="0 0 24 24"><title>arrow-drop-down icon</title><path d="M7 10l5 5 5-5z"/></symbol><symbol id="arrow-drop-up" viewbox="0 0 24 24"><title>arrow-drop-up icon</title><path d="M7 14l5-5 5 5z"/></symbol><symbol id="arrow-forward" viewbox="0 0 24 24"><title>arrow-forward icon</title><path d="M12 4l-1.415 1.415L16.17 11H4v2h12.17l-5.585 5.585L12 20l8-8z"/></symbol><symbol id="arrow-up" viewbox="-287 189 24 24"><title>arrow-up icon</title><style type="text/css">.st0{fill:#404040;}</style><path class="st0" d="M-274 209v-12.2l5.6 5.6 1.4-1.4-8-8-8 8 1.4 1.4 5.6-5.6V209h2z"/></symbol><symbol id="book" viewbox="0 0 24 24"><title>book icon</title><path d="M18 2H6c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></symbol><symbol id="check-box-outline-blank" viewbox="0 0 24 24"><title>check-box-outline-blank icon</title><path d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></symbol><symbol id="check-box" viewbox="0 0 24 24"><title>check-box icon</title><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></symbol><symbol id="check" viewbox="0 0 24 24"><title>check icon</title><path d="M9 16.17L4.83 12l-1.415 1.415L9 19 21 7l-1.415-1.415z"/></symbol><symbol id="chevron-left" viewbox="0 0 24 24"><title>chevron-left icon</title><path d="M15.415 7.415L14 6l-6 6 6 6 1.415-1.415L10.83 12z"/></symbol><symbol id="chevron-right" viewbox="0 0 24 24"><title>chevron-right icon</title><path d="M10 6L8.585 7.415 13.17 12l-4.585 4.585L10 18l6-6z"/></symbol><symbol id="close" viewbox="0 0 24 24"><title>close icon</title><path d="M19 6.415L17.585 5 12 10.585 6.415 5 5 6.415 10.585 12 5 17.585 6.415 19 12 13.415 17.585 19 19 17.585 13.415 12z"/></symbol><symbol id="delete" viewbox="0 0 24 24"><title>delete icon</title><path d="M6 19c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></symbol><symbol id="do-not-disturb" viewbox="0 0 24 24"><title>do-not-disturb icon</title><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.635-3.545 1.685-4.9L16.9 18.315C15.545 19.365 13.85 20 12 20zm6.315-3.1L7.1 5.685C8.455 4.635 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.635 3.545-1.685 4.9z"/></symbol><symbol id="done" viewbox="0 0 24 24"><title>done icon</title><path d="M9 16.17L4.83 12l-1.415 1.415L9 19 21 7l-1.415-1.415z"/></symbol><symbol id="edit" viewbox="0 0 24 24"><title>edit icon</title><path d="M3 17.25V21h3.75L17.815 9.935l-3.75-3.75L3 17.25zM20.705 7.045c.39-.39.39-1.025 0-1.415L18.37 3.295c-.39-.39-1.025-.39-1.415 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></symbol><symbol id="email" viewbox="0 0 24 24"><title>email icon</title><path d="M20 4H4c-1.105 0-1.99.895-1.99 2L2 18c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></symbol><symbol id="error" viewbox="0 0 24 24"><title>error icon</title><path d="M12 2C6.48 2 2 6.475 2 12s4.48 10 10 10 10-4.475 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></symbol><symbol id="file" viewbox="0 0 24 24"><title>file icon</title><path d="M14 2H6c-1.105 0-1.99.895-1.99 2L4 20c0 1.105.885 2 1.99 2H18c1.105 0 2-.895 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></symbol><symbol id="grid-on" viewbox="0 0 24 24"><title>grid-on icon</title><path d="M20 2H4c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></symbol><symbol id="help" viewbox="0 0 24 24"><title>help icon</title><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm1 17h-2v-2h2v2zm2.065-7.745l-.895.92C13.45 12.895 13 13.5 13 15h-2v-.5c0-1.105.45-2.105 1.17-2.83l1.245-1.26c.36-.36.585-.86.585-1.41 0-1.105-.895-2-2-2s-2 .895-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.355 1.675-.935 2.255z"/></symbol><symbol id="info-outline" viewbox="0 0 24 24"><title>info-outline icon</title><path d="M11 17h2v-6h-2v6zm1-15C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></symbol><symbol id="info" viewbox="0 0 24 24"><title>info icon</title><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></symbol><symbol id="list" viewbox="0 0 24 24"><title>list icon</title><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></symbol><symbol id="menu" viewbox="0 0 24 24"><title>menu icon</title><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></symbol><symbol id="more-horiz" viewbox="0 0 24 24"><title>more-horiz icon</title><path d="M6 10c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm12 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-6 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/></symbol><symbol id="more-vert" viewbox="0 0 24 24"><title>more-vert icon</title><path d="M12 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm0 6c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/></symbol><symbol id="notifications" viewbox="0 0 24 24"><title>notifications icon</title><path d="M11.5 22c1.105 0 2-.895 2-2h-4c0 1.105.895 2 2 2zm6.5-6v-5.5c0-3.075-2.135-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.865.68-5 3.245-5 6.32V16l-2 2v1h17v-1l-2-2z"/></symbol><symbol id="pause" viewbox="0 0 24 24"><title>pause icon</title><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></symbol><symbol id="people" viewbox="0 0 24 24"><title>people icon</title><path d="M16 11c1.655 0 2.99-1.345 2.99-3S17.655 5 16 5c-1.655 0-3 1.345-3 3s1.345 3 3 3zm-8 0c1.655 0 2.99-1.345 2.99-3S9.655 5 8 5C6.345 5 5 6.345 5 8s1.345 3 3 3zm0 2c-2.335 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.665-3.5-7-3.5zm8 0c-.29 0-.615.02-.965.055C16.195 13.89 17 15.015 17 16.5V19h6v-2.5c0-2.33-4.665-3.5-7-3.5z"/></symbol><symbol id="play-arrow" viewbox="0 0 24 24"><title>play-arrow icon</title><path d="M8 5v14l11-7z"/></symbol><symbol id="profile" viewbox="0 0 24 24"><title>profile icon</title><path d="M19 3h-4.185c-.41-1.16-1.51-2-2.815-2s-2.405.84-2.815 2H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-7 0c.55 0 1 .445 1 1s-.45 1-1 1-1-.445-1-1 .45-1 1-1zm0 4c1.655 0 3 1.345 3 3 0 1.66-1.345 3-3 3s-3-1.34-3-3c0-1.655 1.345-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/></symbol><symbol id="remove-circle-outline" viewbox="0 0 24 24"><title>remove-circle-outline icon</title><path d="M7 11v2h10v-2H7zm5-9C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></symbol><symbol id="remove-circle" viewbox="0 0 24 24"><title>remove-circle icon</title><path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm5 11H7v-2h10v2z"/></symbol><symbol id="remove" viewbox="0 0 24 24"><title>remove icon</title><path d="M19 13H5v-2h14v2z"/></symbol><symbol id="search" viewbox="0 0 24 24"><title>search icon</title><path d="M15.5 14h-.795l-.275-.275C15.41 12.59 16 11.115 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.615 0 3.09-.59 4.225-1.565l.275.275v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.015 14 5 11.985 5 9.5S7.015 5 9.5 5 14 7.015 14 9.5 11.985 14 9.5 14z"/></symbol><symbol id="server" viewbox="0 0 24 24"><title>server icon</title><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/></symbol><symbol id="settings" viewbox="0 0 24 24"><title>settings icon</title><path d="M19.43 12.975c.04-.32.07-.645.07-.975s-.03-.655-.07-.975l2.115-1.655c.19-.15.245-.42.12-.64l-2-3.465c-.125-.215-.385-.305-.61-.215l-2.49 1.005c-.515-.395-1.08-.73-1.69-.985L14.5 2.42c-.045-.235-.25-.42-.5-.42h-4c-.25 0-.455.185-.495.42L9.13 5.07c-.61.255-1.175.585-1.69.985L4.95 5.05c-.225-.085-.485 0-.61.215l-2 3.465c-.125.215-.07.485.12.64l2.11 1.655c-.04.32-.07.645-.07.975s.03.655.07.975L2.46 14.63c-.19.15-.245.42-.12.64l2 3.465c.125.215.385.305.61.215l2.49-1.005c.515.395 1.08.73 1.69.985l.375 2.65c.04.235.245.42.495.42h4c.25 0 .455-.185.495-.42l.375-2.65c.61-.255 1.175-.585 1.69-.985l2.49 1.005c.225.085.485 0 .61-.215l2-3.465c.125-.215.07-.485-.12-.64l-2.11-1.655zM12 15.5c-1.935 0-3.5-1.565-3.5-3.5s1.565-3.5 3.5-3.5 3.5 1.565 3.5 3.5-1.565 3.5-3.5 3.5z"/></symbol><symbol id="star-outline" viewbox="0 0 24 24"><title>star-outline icon</title><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></symbol><symbol id="star" viewbox="0 0 24 24"><title>star icon</title><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></symbol><symbol id="sync" viewbox="0 0 24 24"><title>sync icon</title><path d="M12 4V1L8 5l4 4V6c3.315 0 6 2.685 6 6 0 1.015-.255 1.965-.695 2.805l1.46 1.46C19.54 15.025 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.315 0-6-2.685-6-6 0-1.015.255-1.965.695-2.805l-1.46-1.46C4.46 8.975 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></symbol><symbol id="view-headline" viewbox="0 0 24 24"><title>view-headline icon</title><path d="M4 15h17v-2H4v2zm0 4h17v-2H4v2zm0-8h17V9H4v2zm0-6v2h17V5H4z"/></symbol><symbol id="view-list" viewbox="0 0 24 24"><title>view-list icon</title><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></symbol><symbol id="view-module" viewbox="0 0 24 24"><title>view-module icon</title><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></symbol><symbol id="warning-stop" viewbox="0 0 24 24"><title>warning-stop icon</title><path d="M15.73 3H8.27L3 8.27v7.455L8.27 21h7.455L21 15.73V8.27L15.73 3zM12 17.3c-.715 0-1.3-.58-1.3-1.3 0-.715.585-1.3 1.3-1.3s1.3.58 1.3 1.3c0 .72-.585 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></symbol><symbol id="warning" viewbox="0 0 24 24"><title>warning icon</title><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></symbol></svg>' //gulp replace task drops in actual SVG here
    };
}).directive('icon', ['$compile', 'iconPushProvider', function ($compile, iconPushProvider) {

    var opts = iconPushProvider.getOpts();

    return {
        restrict: 'E',
        compile: compileFn
    };

    function compileFn() {
        return function (scope, iElem, iAttrs) {
            var cssClasses = [opts.baseClass, opts.baseClass + '-' + iAttrs.icon];
            if (iAttrs['class']) {
                cssClasses.push(iAttrs['class']);
            }

            var html = '\n                    <svg role="img" class="' + cssClasses.join(' ') + '">\n                        <use xlink:href="#' + iAttrs.icon + '"></use>\n                    </svg>';

            var e = $compile(html)(scope);
            iElem.replaceWith(e);
        };
    }
}]);