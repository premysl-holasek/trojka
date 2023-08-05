var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

module.exports = function () {
    return gulp.src(('./assets/sass/**/*.scss'))
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css/'))
      .pipe(browserSync.stream());
};
