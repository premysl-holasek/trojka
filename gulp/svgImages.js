var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

module.exports = function () {
  gulp.src('./assets/svg/*.svg')
  .pipe(svgmin({
    plugins: [{
        removeDoctype: true
    }, {
        removeViewBox: true
    }]
  }))
  .pipe(gulp.dest('./dist/svg/'));
};
