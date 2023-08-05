var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var emMediaQuery = require('postcss-em-media-query');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var rename = require("gulp-rename");
var pxtorem = require('postcss-pxtorem');
var comments = require('postcss-discard-comments');


module.exports = function () {
    var processors = [
        autoprefixer({browsers: ['> 1%']}),
        emMediaQuery(),
        cssnano(),
        comments(),
        pxtorem({
          rootValue: 16,
          unitPrecision: 5,
          propList: [
            'padding',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'top',
            'right',
            'bottom',
            'left',
          ],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        })
    ];
    gulp.src('./dist/css/main.css')
        .pipe(rename('main.min.css'))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css/'));
};
