var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var htmlclean = require('gulp-htmlclean');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var cheerio = require('gulp-cheerio');
var file = require('gulp-file');

var fs = require("fs");

gulp.task('build', function() {
    runSequence('svg-build', 'clean-svg', 'inject-svg', 'copy-css');
});

gulp.task('svg-build', function() {
    gulp.src('build/svg/*.svg')
        .pipe(svgSymbols())
        .pipe(gulp.dest('build'));
});

gulp.task('clean-svg', function() {
    gulp.src('build/svg-symbols.svg')
        .pipe(htmlclean())
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('inject-svg', function(){
    var svg = fs.readFileSync("dist/svg-symbols.svg", "utf8");

    gulp.src(['build/icon-push.js'])
        .pipe(replace('-svg-', svg))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-css', function() {
    gulp.src('build/icon-push.css')
        .pipe(gulp.dest('dist'))
});