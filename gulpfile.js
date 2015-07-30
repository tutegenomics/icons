var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var htmlclean = require('gulp-htmlclean');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var cheerio = require('gulp-cheerio');
var file = require('gulp-file');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var fs = require('fs');


gulp.task('svg-sequence', function() {
    runSequence('svg-build', 'inject-svg');
});


//generate svg file
gulp.task('svg-build', function() {
    var allIcons = [];

    var stream = gulp.src('build/svg/*.svg')
        .pipe(svgSymbols({
            templates: [ 'default-svg' ],
            transformData: function(svg, defaultData) {
                allIcons.push(defaultData.id);
                return defaultData;
            }
        }))
        .pipe(htmlclean())
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            }
        }))
        .pipe(gulp.dest('dist'));

    //when the stream is done, allIcons is full, so we can output it
    stream.on('end', function() {
         fs.writeFile('./dist/icons-manifest.json', JSON.stringify(allIcons, null, 4));
    });

    return stream;
});


//inline SVG defs into JS file
gulp.task('inject-svg', function(){
    var svg = fs.readFileSync('dist/svg-symbols.svg', 'utf8');

    return gulp.src(['build/icon-push.js'])
        .pipe(babel())
        .pipe(replace('__SVG__', svg))
        .pipe(gulp.dest('dist'));
});


//generate demo page
gulp.task('demo', function () {
    return gulp.src('build/svg/*.svg')
      .pipe(svgSymbols.demoPage())
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


gulp.task('build', ['svg-sequence' ,'demo', 'copy-css']);

gulp.task('default', ['build', 'watch'])