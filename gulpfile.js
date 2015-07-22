var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var svgmin = require('gulp-svgmin');

gulp.task('build', function() {
    gulp.src('svg/*.svg')
        .pipe(svgSymbols())
        .pipe(gulp.dest('dist'));

});