'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// Sass Minify (Compressed)
gulp.task('sass', function () {
  gulp.src('./style/**/*.sass')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('./style'));
});

// Default task
gulp.task('default', function () {
  gulp.start('sass');
});