/* commonjs package manager support */
'use strict';

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
    module.exports = 'tute-icons';
}

(function (window, angular) {

    angular.module('tute-icons', []).provider('tuteIconProvider', function tuteIconProvider() {
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
    }).service('tuteIconService', function tuteIconService() {
        var icons = {"add-circle-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13 7h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></svg>","add-circle":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM17 13h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z\"></path></svg>","add":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z\"></path></svg>","align":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g> <path class=\"st0\" d=\"M10.3,8c0.3,0.6,1,1,1.7,1s1.4-0.4,1.7-1H19c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1h-5.3c-0.3-0.6-1-1-1.7-1 s-1.4,0.4-1.7,1H3C2.4,6,2,6.4,2,7c0,0.6,0.4,1,1,1H10.3z\"/> <path class=\"st0\" d=\"M21,11h-7.3c-0.3-0.6-1-1-1.7-1s-1.4,0.4-1.7,1H8c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h2.3c0.3,0.6,1,1,1.7,1 s1.4-0.4,1.7-1H21c0.6,0,1-0.4,1-1C22,11.4,21.6,11,21,11z\"/> <path class=\"st0\" d=\"M16,16h-2.3c-0.3-0.6-1-1-1.7-1s-1.4,0.4-1.7,1H5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h5.3c0.3,0.6,1,1,1.7,1 s1.4-0.4,1.7-1H16c0.6,0,1-0.4,1-1C17,16.4,16.6,16,16,16z\"/></g></svg>","apps":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 8h4v-4h-4v4zM10 20h4v-4h-4v4zM4 20h4v-4h-4v4zM4 14h4v-4h-4v4zM10 14h4v-4h-4v4zM16 4v4h4v-4h-4zM10 8h4v-4h-4v4zM16 14h4v-4h-4v4zM16 20h4v-4h-4v4z\"></path></svg>","arrow-back":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11h-12.17l5.585-5.585-1.415-1.415-8 8 8 8 1.415-1.415-5.585-5.585h12.17v-2z\"></path></svg>","arrow-down":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"-287 189 24 24\" style=\"enable-background:new -287 189 24 24;\" xml:space=\"preserve\"><path class=\"st0\" d=\"M-276,193v12.2l-5.6-5.6l-1.4,1.4l8,8l8-8l-1.4-1.4l-5.6,5.6V193C-274,193-276,193-276,193z\"/></svg>","arrow-drop-down":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"></path></svg>","arrow-drop-up":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"></path></svg>","arrow-forward":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.415 1.415 5.585 5.585h-12.17v2h12.17l-5.585 5.585 1.415 1.415 8-8z\"></path></svg>","arrow-up":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"-287 189 24 24\" style=\"enable-background:new -287 189 24 24;\" xml:space=\"preserve\"><path class=\"st0\" d=\"M-274,209v-12.2l5.6,5.6l1.4-1.4l-8-8l-8,8l1.4,1.4l5.6-5.6V209C-276,209-274,209-274,209z\"/></svg>","book":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 2h-12c-1.105 0-2 0.895-2 2v16c0 1.105 0.895 2 2 2h12c1.105 0 2-0.895 2-2v-16c0-1.105-0.895-2-2-2zM6 4h5v8l-2.5-1.5-2.5 1.5v-8z\"></path></svg>","check-box-outline-blank":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14h-14v-14h14zM19 3h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z\"></path></svg>","check-box":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-14c-1.11 0-2 0.9-2 2v14c0 1.1 0.89 2 2 2h14c1.11 0 2-0.9 2-2v-14c0-1.1-0.89-2-2-2zM10 17l-5-5 1.41-1.41 3.59 3.58 7.59-7.59 1.41 1.42-9 9z\"></path></svg>","check":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 16.17l-4.17-4.17-1.415 1.415 5.585 5.585 12-12-1.415-1.415z\"></path></svg>","chevron-left":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.415 7.415l-1.415-1.415-6 6 6 6 1.415-1.415-4.585-4.585z\"></path></svg>","chevron-right":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6l-1.415 1.415 4.585 4.585-4.585 4.585 1.415 1.415 6-6z\"></path></svg>","close":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.415l-1.415-1.415-5.585 5.585-5.585-5.585-1.415 1.415 5.585 5.585-5.585 5.585 1.415 1.415 5.585-5.585 5.585 5.585 1.415-1.415-5.585-5.585z\"></path></svg>","cloud-download":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19.355 10.035c-0.68-3.44-3.715-6.035-7.355-6.035-2.89 0-5.395 1.64-6.65 4.035-3.005 0.325-5.35 2.87-5.35 5.965 0 3.315 2.685 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.055-4.78-4.645-4.965zM17 13l-5 5-5-5h3v-4h4v4h3z\"></path></svg>","cloud-upload":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19.355 10.035c-0.68-3.44-3.715-6.035-7.355-6.035-2.89 0-5.395 1.64-6.65 4.035-3.005 0.325-5.35 2.87-5.35 5.965 0 3.315 2.685 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.055-4.78-4.645-4.965zM14 13v4h-4v-4h-3l5-5 5 5h-3z\"></path></svg>","delete":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19c0 1.105 0.895 2 2 2h8c1.105 0 2-0.895 2-2v-12h-12v12zM19 4h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z\"></path></svg>","do-not-disturb":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.42 0-8-3.58-8-8 0-1.85 0.635-3.545 1.685-4.9l11.215 11.215c-1.355 1.050-3.050 1.685-4.9 1.685zM18.315 16.9l-11.215-11.215c1.355-1.050 3.050-1.685 4.9-1.685 4.42 0 8 3.58 8 8 0 1.85-0.635 3.545-1.685 4.9z\"></path></svg>","done-all":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><path class=\"st0\" d=\"M5.6,16.6L16.2,6l1.4,1.4l-12,12L0,13.8l1.4-1.4L5.6,16.6z\"/><rect x=\"10\" y=\"17\" class=\"st0\" width=\"6\" height=\"2\"/><rect x=\"14\" y=\"13\" class=\"st0\" width=\"6\" height=\"2\"/><rect x=\"18\" y=\"9\" class=\"st0\" width=\"6\" height=\"2\"/></svg>","done":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 16.17l-4.17-4.17-1.415 1.415 5.585 5.585 12-12-1.415-1.415z\"></path></svg>","edit":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 17.25v3.75h3.75l11.065-11.065-3.75-3.75-11.065 11.065zM20.705 7.045c0.39-0.39 0.39-1.025 0-1.415l-2.335-2.335c-0.39-0.39-1.025-0.39-1.415 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></svg>","email":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 4h-16c-1.105 0-1.99 0.895-1.99 2l-0.010 12c0 1.105 0.895 2 2 2h16c1.105 0 2-0.895 2-2v-12c0-1.105-0.895-2-2-2zM20 8l-8 5-8-5v-2l8 5 8-5v2z\"></path></svg>","error":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.52 0-10 4.475-10 10s4.48 10 10 10 10-4.475 10-10-4.48-10-10-10zM13 17h-2v-2h2v2zM13 13h-2v-6h2v6z\"></path></svg>","file":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M14 2h-8c-1.105 0-1.99 0.895-1.99 2l-0.010 16c0 1.105 0.885 2 1.99 2h12.010c1.105 0 2-0.895 2-2v-12l-6-6zM16 18h-8v-2h8v2zM16 14h-8v-2h8v2zM13 9v-5.5l5.5 5.5h-5.5z\"></path></svg>","gene":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><path class=\"st0\" d=\"M22,6c0-1.7-2.7-0.7-3.5-0.5c-2.6,0.7-5,1.9-6.5,4.2c-1.5-2.4-3.8-3.5-6.5-4.2C4.7,5.3,2,4.3,2,6v12 c0,1.7,2.5,0.8,3.3,0.6c2.7-0.7,5.2-1.8,6.7-4.3c1.5,2.4,4,3.6,6.7,4.3c0.8,0.2,3.3,1.1,3.3-0.6V6z M20,16.8c-0.6-0.1-1.3-0.3-2-0.5 V7.7c0.7-0.2,1.4-0.4,2-0.5V16.8z M4,7.2c0.6,0.1,1.3,0.3,2,0.5v8.5c-0.7,0.2-1.4,0.4-2,0.5V7.2z M8.4,15.2 c-0.1,0.1-0.3,0.2-0.4,0.3V8.6c1.4,0.7,2.3,2,2.9,3.4C10.7,12.6,9.9,14.2,8.4,15.2z M16,8.6v6.9c-1.4-0.7-2.3-2-2.9-3.4 C13.3,11.4,14.6,9.3,16,8.6z\"/></svg>","grid-on":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 2h-16c-1.105 0-2 0.895-2 2v16c0 1.105 0.895 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.105-0.895-2-2-2zM8 20h-4v-4h4v4zM8 14h-4v-4h4v4zM8 8h-4v-4h4v4zM14 20h-4v-4h4v4zM14 14h-4v-4h4v4zM14 8h-4v-4h4v4zM20 20h-4v-4h4v4zM20 14h-4v-4h4v4zM20 8h-4v-4h4v4z\"></path></svg>","help":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM13 19h-2v-2h2v2zM15.065 11.255l-0.895 0.92c-0.72 0.72-1.17 1.325-1.17 2.825h-2v-0.5c0-1.105 0.45-2.105 1.17-2.83l1.245-1.26c0.36-0.36 0.585-0.86 0.585-1.41 0-1.105-0.895-2-2-2s-2 0.895-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 0.88-0.355 1.675-0.935 2.255z\"></path></svg>","info-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11 17h2v-6h-2v6zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2v-2h-2v2z\"></path></svg>","info":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM13 17h-2v-6h2v6zM13 9h-2v-2h2v2z\"></path></svg>","list":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 13h2v-2h-2v2zM3 17h2v-2h-2v2zM3 9h2v-2h-2v2zM7 13h14v-2h-14v2zM7 17h14v-2h-14v2zM7 7v2h14v-2h-14z\"></path></svg>","lock":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 8h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.105 0-2 0.895-2 2v10c0 1.105 0.895 2 2 2h12c1.105 0 2-0.895 2-2v-10c0-1.105-0.895-2-2-2zM12 17c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM15.1 8h-6.2v-2c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z\"></path></svg>","menu":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2h-18v2zM3 13h18v-2h-18v2zM3 6v2h18v-2h-18z\"></path></svg>","more-horiz":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM18 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z\"></path></svg>","more-vert":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.105 0 2-0.895 2-2s-0.895-2-2-2-2 0.895-2 2 0.895 2 2 2zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM12 16c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z\"></path></svg>","notifications":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.5 22c1.105 0 2-0.895 2-2h-4c0 1.105 0.895 2 2 2zM18 16v-5.5c0-3.075-2.135-5.64-5-6.32v-0.68c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5v0.68c-2.865 0.68-5 3.245-5 6.32v5.5l-2 2v1h17v-1l-2-2z\"></path></svg>","pause":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4v-14h-4v14zM14 5v14h4v-14h-4z\"></path></svg>","people":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 11c1.655 0 2.99-1.345 2.99-3s-1.335-3-2.99-3c-1.655 0-3 1.345-3 3s1.345 3 3 3zM8 11c1.655 0 2.99-1.345 2.99-3s-1.335-3-2.99-3c-1.655 0-3 1.345-3 3s1.345 3 3 3zM8 13c-2.335 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.665-3.5-7-3.5zM16 13c-0.29 0-0.615 0.020-0.965 0.055 1.16 0.835 1.965 1.96 1.965 3.445v2.5h6v-2.5c0-2.33-4.665-3.5-7-3.5z\"></path></svg>","pipeline":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g> <path class=\"st0\" d=\"M19,4h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1h1c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1H6H5c-1.7,0-3,1.3-3,3v3 c0,1.7,1.3,3,3,3h7.6l-0.9,1c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.7-2.7c0.4-0.4,0.4-1,0-1.4l-2.7-2.7 c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l0.9,1H5c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h1h13c1.7,0,3-1.3,3-3V7C22,5.3,20.7,4,19,4z\"/> <path class=\"st0\" d=\"M3,6h4.6L6.7,6.9c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.7-2.7c0.4-0.4,0.4-1,0-1.4 L8.1,1.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L7.6,4H3C2.4,4,2,4.4,2,5S2.4,6,3,6z\"/> <circle class=\"st0\" cx=\"14\" cy=\"5\" r=\"1.5\"/> <circle class=\"st0\" cx=\"19\" cy=\"19\" r=\"1.5\"/></g></svg>","play-arrow":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"></path></svg>","profile":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-4.185c-0.41-1.16-1.51-2-2.815-2s-2.405 0.84-2.815 2h-4.185c-1.105 0-2 0.895-2 2v14c0 1.105 0.895 2 2 2h14c1.105 0 2-0.895 2-2v-14c0-1.105-0.895-2-2-2zM12 3c0.55 0 1 0.445 1 1s-0.45 1-1 1-1-0.445-1-1 0.45-1 1-1zM12 7c1.655 0 3 1.345 3 3 0 1.66-1.345 3-3 3s-3-1.34-3-3c0-1.655 1.345-3 3-3zM18 19h-12v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1.4z\"></path></svg>","publish":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 4v2h14v-2h-14zM5 14h4v6h6v-6h4l-7-7-7 7z\"></path></svg>","remove-circle-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 11v2h10v-2h-10zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></svg>","remove-circle":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM17 13h-10v-2h10v2z\"></path></svg>","remove":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-14v-2h14v2z\"></path></svg>","search":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-0.795l-0.275-0.275c0.98-1.135 1.57-2.61 1.57-4.225 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.615 0 3.090-0.59 4.225-1.565l0.275 0.275v0.79l5 4.99 1.49-1.49-4.99-5zM9.5 14c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z\"></path></svg>","server":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 13h-16c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h16c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM7 19c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 3h-16c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h16c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM7 9c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2z\"></path></svg>","settings":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19.43 12.975c0.040-0.32 0.070-0.645 0.070-0.975s-0.030-0.655-0.070-0.975l2.115-1.655c0.19-0.15 0.245-0.42 0.12-0.64l-2-3.465c-0.125-0.215-0.385-0.305-0.61-0.215l-2.49 1.005c-0.515-0.395-1.080-0.73-1.69-0.985l-0.375-2.65c-0.045-0.235-0.25-0.42-0.5-0.42h-4c-0.25 0-0.455 0.185-0.495 0.42l-0.375 2.65c-0.61 0.255-1.175 0.585-1.69 0.985l-2.49-1.005c-0.225-0.085-0.485 0-0.61 0.215l-2 3.465c-0.125 0.215-0.070 0.485 0.12 0.64l2.11 1.655c-0.040 0.32-0.070 0.645-0.070 0.975s0.030 0.655 0.070 0.975l-2.11 1.655c-0.19 0.15-0.245 0.42-0.12 0.64l2 3.465c0.125 0.215 0.385 0.305 0.61 0.215l2.49-1.005c0.515 0.395 1.080 0.73 1.69 0.985l0.375 2.65c0.040 0.235 0.245 0.42 0.495 0.42h4c0.25 0 0.455-0.185 0.495-0.42l0.375-2.65c0.61-0.255 1.175-0.585 1.69-0.985l2.49 1.005c0.225 0.085 0.485 0 0.61-0.215l2-3.465c0.125-0.215 0.070-0.485-0.12-0.64l-2.11-1.655zM12 15.5c-1.935 0-3.5-1.565-3.5-3.5s1.565-3.5 3.5-3.5 3.5 1.565 3.5 3.5-1.565 3.5-3.5 3.5z\"></path></svg>","share":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 16.085c-0.76 0-1.445 0.295-1.965 0.77l-7.125-4.155c0.055-0.225 0.090-0.46 0.090-0.7s-0.035-0.475-0.090-0.7l7.050-4.115c0.535 0.5 1.25 0.81 2.040 0.81 1.655 0 3-1.345 3-3s-1.345-3-3-3-3 1.345-3 3c0 0.24 0.035 0.475 0.090 0.7l-7.050 4.115c-0.535-0.5-1.25-0.81-2.040-0.81-1.655 0-3 1.345-3 3s1.345 3 3 3c0.79 0 1.505-0.31 2.040-0.81l7.125 4.155c-0.050 0.21-0.080 0.43-0.080 0.655 0 1.61 1.305 2.915 2.915 2.915s2.915-1.305 2.915-2.915-1.305-2.915-2.915-2.915z\"></path></svg>","star-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 9.24l-7.19-0.62-2.81-6.62-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73 6.18 3.73-1.63-7.030 5.45-4.73zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-0.38 1.7-4.030 1.71 4.040 4.38 0.38-3.32 2.88 1 4.28-3.77-2.28z\"></path></svg>","star":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030z\"></path></svg>","stop":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 6h12v12h-12z\"></path></svg>","sync":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4v-3l-4 4 4 4v-3c3.315 0 6 2.685 6 6 0 1.015-0.255 1.965-0.695 2.805l1.46 1.46c0.775-1.24 1.235-2.695 1.235-4.265 0-4.42-3.58-8-8-8zM12 18c-3.315 0-6-2.685-6-6 0-1.015 0.255-1.965 0.695-2.805l-1.46-1.46c-0.775 1.24-1.235 2.695-1.235 4.265 0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"></path></svg>","thumb-down":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15 3h-9c-0.83 0-1.54 0.505-1.84 1.22l-3.015 7.050c-0.090 0.23-0.145 0.475-0.145 0.73v1.915l0.010 0.010-0.010 0.075c0 1.105 0.895 2 2 2h6.315l-0.955 4.57c-0.020 0.1-0.035 0.205-0.035 0.315 0 0.415 0.17 0.79 0.44 1.060l1.065 1.055 6.585-6.585c0.36-0.365 0.585-0.865 0.585-1.415v-10c0-1.105-0.895-2-2-2zM19 3v12h4v-12h-4z\"></path></svg>","thumb-up":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 21h4v-12h-4v12zM23 10c0-1.105-0.895-2-2-2h-6.315l0.955-4.57c0.020-0.1 0.035-0.205 0.035-0.315 0-0.415-0.17-0.79-0.44-1.060l-1.065-1.055-6.585 6.585c-0.36 0.365-0.585 0.865-0.585 1.415v10c0 1.105 0.895 2 2 2h9c0.83 0 1.54-0.505 1.84-1.22l3.015-7.050c0.090-0.23 0.145-0.475 0.145-0.73v-1.915l-0.010-0.010 0.010-0.075z\"></path></svg>","view-headline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 15h17v-2h-17v2zM4 19h17v-2h-17v2zM4 11h17v-2h-17v2zM4 5v2h17v-2h-17z\"></path></svg>","view-list":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 14h4v-4h-4v4zM4 19h4v-4h-4v4zM4 9h4v-4h-4v4zM9 14h12v-4h-12v4zM9 19h12v-4h-12v4zM9 5v4h12v-4h-12z\"></path></svg>","view-module":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 11h5v-6h-5v6zM4 18h5v-6h-5v6zM10 18h5v-6h-5v6zM16 18h5v-6h-5v6zM10 11h5v-6h-5v6zM16 5v6h5v-6h-5z\"></path></svg>","warning-stop":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.73 3h-7.46l-5.27 5.27v7.455l5.27 5.275h7.455l5.275-5.27v-7.46l-5.27-5.27zM12 17.3c-0.715 0-1.3-0.58-1.3-1.3 0-0.715 0.585-1.3 1.3-1.3s1.3 0.58 1.3 1.3c0 0.72-0.585 1.3-1.3 1.3zM13 13h-2v-6h2v6z\"></path></svg>","warning":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 21h22l-11-19-11 19zM13 18h-2v-2h2v2zM13 14h-2v-4h2v4z\"></path></svg>"};

        return {
            getIcon: function getIcon(iconName) {
                return icons[iconName];
            }
        };
    })

    ////outputs <symbol> defs that can be <use>d by the icon directive later
    //.directive('iconDefs', function() {
    //    return {
    //        restrict: 'E',
    //        replace: true,
    //        template: '__SVG__' //gulp replace task drops in actual SVG here
    //    }
    //})

    .directive('icon', ['$compile', 'tuteIconProvider', 'tuteIconService', function icon($compile, tuteIconProvider, tuteIconService) {

        var opts = tuteIconProvider.getOpts();

        return {
            restrict: 'E',
            compile: compileFn
        };

        function compileFn() {
            return function (scope, iElem, iAttrs) {

                var icon = angular.element(tuteIconService.getIcon(iAttrs.icon));

                var cssClasses = [opts.baseClass, opts.baseClass + '-' + iAttrs.icon];
                if (iAttrs['class']) {
                    cssClasses.push(iAttrs['class']);
                }

                icon.addClass(cssClasses.join(' '));

                var e = $compile(icon)(scope);
                iElem.replaceWith(e);
            };
        }
    }]);
})(window, window.angular);