var gulp = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src(['index.js', 'lib/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['index.js', 'lib/**/*.js'], ['jshint']);
});

