var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = function () {
    gulp.src('./assets/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/images/'))
};
