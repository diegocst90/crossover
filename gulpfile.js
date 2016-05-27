var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var html2js = require('gulp-html2js');

var paths = {
  sass: ['./scss/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src(['./scss/home.scss', './scss/media-queries.scss', './scss/item.scss'])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./app/assets/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./app/assets/css/'))
    .on('end', done);
});

gulp.task('html2', function() {
    gulp.src(['./app/components/directives/**/*.html','./app/items_data_source.js'])
        .pipe(html2js('crossover-html2-cache.js', {
            adapter: 'angular',
            base: './app',
            name: 'crossover-html2'
        }))
        .pipe(gulp.dest('./app/components/dist/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
