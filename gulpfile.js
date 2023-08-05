'use strict';
var gulp = require('gulp');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


// Tasks directory
var tasks = requireDir('./gulp');

// Development tasks
gulp.task('postCss', tasks.postCss); // PostCSS, autoprefixer
gulp.task('svgImages', tasks.svgImages); // Svg images
gulp.task('svgIcons', tasks.svgIcons); // Svg images
gulp.task('images', tasks.images); // Images
gulp.task('copy', tasks.copy); // Copy
//Buildtask

gulp.task('default',['copy','sass','postCss','images','javascript']);


// Static Server + watching scss/html files
gulp.task('serve', ['copy','sass','compile','javascript'], function() {

    browserSync.init({
        server: './'
    });
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/js/*.js', ['javascript']);
    gulp.watch('./assets/twig/**/*.html', ['compile']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(('./assets/sass/**/*.scss'))
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(gulp.dest('./web/themes/custom/trojka/css/'))
      .pipe(browserSync.stream());
});

gulp.task('javascript', function() {
    return gulp.src('./assets/js/*.js')
      .pipe(concat('user.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(gulp.dest('./web/themes/custom/trojka/js'))
      .pipe(browserSync.stream());
});


gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('./assets/twig/data.json'));

    return gulp.src('./assets/twig/*.html')
      .pipe(twig({
          data: json
      }))
      .pipe(gulp.dest('./'));
});
