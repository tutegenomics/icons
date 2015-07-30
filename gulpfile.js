var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var htmlclean = require('gulp-htmlclean');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var cheerio = require('gulp-cheerio');
var file = require('gulp-file');
var watch = require('gulp-watch');
var fs = require('fs');


gulp.task('build', function() {
    runSequence('svg-build', 'inject-svg', 'copy-css');
});


gulp.task('svg-build', function() {
    return gulp.src('build/svg/*.svg')
        .pipe(svgSymbols())
        .pipe(htmlclean())
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            }
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('demo', function () {
    return gulp.src('build/svg/*.svg')
      .pipe(svgSymbols.demoPage())
      .pipe(gulp.dest('dist'));
});


gulp.task('inject-svg', function(){
    var svg = fs.readFileSync('dist/svg-symbols.svg', 'utf8');

    return gulp.src(['build/icon-push.js'])
        .pipe(replace('-svg-', svg))
        .pipe(gulp.dest('dist'));
});


gulp.task('copy-css', function() {
    return gulp.src('build/icon-push.css')
        .pipe(gulp.dest('dist'))
});


gulp.task('watch', function() {
    watch('build/**/*', function() {
        gulp.start('build');
    });
});


gulp.task('default', ['build', 'watch'])