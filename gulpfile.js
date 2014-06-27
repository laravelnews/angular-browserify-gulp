var gulp = require('gulp'),
    browserify = require('gulp-browserify');

// Run browserify
gulp.task('browserify', function() {
    gulp.src(['./assets/js/app.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true // Compile with sourcemaps
        }))
        .pipe(gulp.dest('./public/js'))
});

// Compile views and move to public
gulp.task('views', function() {
    gulp.src('assets/js/views/**/*.html')
        .pipe(gulp.dest('public/views/'));
});

// Default Task
gulp.task('default', ['browserify', 'views']);

// Watcher Task
gulp.task('watch', function() {
    gulp.watch(['./assets/js/**/*.js'],['browserify']);
    gulp.watch(['./assets/js/views/**/*.html'], ['views']);
});