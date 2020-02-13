var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var rename = require('gulp-rename');

gulp.task("compiler-scss", function() {
  return gulp.src("source/css/main.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.init())
      .pipe(minifyCss())
      // .pipe(concat('m.min.css'))
      .pipe(rename('m.min.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('source/css'))
});
