const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    // shinigami/**/ means any subfolder inside the shinigami folder 
  return src('shinigami/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['shinigami/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)