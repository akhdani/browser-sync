var gulp = require('gulp'),
    css = require('gulp-clean-css'),
    html = require('gulp-htmlmin'),
    obfuscate = require('gulp-js-obfuscator');

// Register tasks
gulp.task('asset', function() {
  return gulp.src(['app/**/*', '!app/**/*.html', '!app/component/**/*.js', '!app/route/**/*.js'])
      .pipe(gulp.dest('www'));
});

gulp.task('css-min', function() {
  return gulp.src(['app/**/*.css'])
      .pipe(css())
      .pipe(gulp.dest('www'));
});

gulp.task('html-min', function() {
  return gulp.src(['app/**/*.html'])
      .pipe(html({collapseWhitespace: true}))
      .pipe(gulp.dest('www'));
});

gulp.task('js-library', function() {
  return gulp.src(['app/asset/lib/*.js'])
      .pipe(obfuscate({}))
      .pipe(gulp.dest('www'));
});

gulp.task('js-config', function() {
  return gulp.src(['app/config.js'])
      .pipe(obfuscate({}))
      .pipe(gulp.dest('www'));
});

gulp.task('js-route', function() {
  return gulp.src(['app/route/**/*.js'])
      .pipe(obfuscate({}))
      .pipe(gulp.dest('www/route'));
});

gulp.task('js-component', function() {
  return gulp.src(['app/component/**/*.js'])
      .pipe(obfuscate({}))
      .pipe(gulp.dest('www/component'));
});

gulp.task('default', ['asset', 'html-min', 'js-config', 'js-component', 'js-route']);
gulp.task('update', ['html-min', 'js-config', 'js-component', 'js-route']);
gulp.task('build', ['default']);