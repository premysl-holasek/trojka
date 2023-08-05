var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
//var clean = require('gulp-clean');
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

module.exports = function () {
    const f = filter(['**', '!*assets/svg_icons/*.scss']);

    gulp.src('./assets/svg/icons/*.svg')
    .pipe(svgSprite({
        templates: { scss: true },
        preview: false,
        selector: 'icon-%f',
        cssFile: '_svg-icons.scss'
    }))
    .pipe(gulp.dest('./assets/svg_icons/'))


};
