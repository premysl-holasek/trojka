var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function () {
    //Bootstrap
    gulp.src('node_modules/bootstrap/scss/**/*')
      .pipe(gulp.dest('./assets/sass/vendor/bootstrap'));
    //Sass-mg
    gulp.src('node_modules/sass-mq/_mq.scss')
      .pipe(gulp.dest('./assets/sass/vendor/'));
    //Flags SCSS Files
    gulp.src('node_modules/flag-icon-css/sass/*.scss')
      .pipe(gulp.dest('./assets/sass/vendor/flags/'));
    //Flags svg Files
    gulp.src('node_modules/flag-icon-css/flags/**/')
      .pipe(gulp.dest('./dist/svg/flags/'));
    gulp.src('node_modules/flag-icon-css/flags/**/')
      .pipe(gulp.dest('./assets/svg/flags/'));
    //Fonts
    gulp.src('./assets/fonts/*')
      .pipe(gulp.dest('./dist/fonts/'));
    //JS Plugins
    gulp.src('./assets/js/plugins/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/plugins/'));
};
