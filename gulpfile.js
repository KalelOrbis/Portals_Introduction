const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
    // shinigami/**/ means any subfolder inside the shinigami folder 
  return src('shinigami/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html']}))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['shinigami/**/*.scss','*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)