'use strict';

var gulp = require('gulp');
//var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

module.exports = function () {
    return gulp.src('./assets/js/*.js')
      .pipe(concat('user.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(browserSync.stream());

};
