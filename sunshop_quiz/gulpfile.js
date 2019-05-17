var gulp       = require('gulp'),
    stylus     = require('gulp-stylus'),
    prefix     = require('gulp-autoprefixer'),
    compress   = require('gulp-minify-css'),
    axis       = require('axis'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    uglify     = require('gulp-uglify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    rename     = require('gulp-rename'),
    include    = require('gulp-include');
    
gulp.task('scripts', function() {
    return browserify({
            entries: [
                './src/js/main.js'
            ],
            debug: false,
            paths: ['./node_modules']
        })
        .transform(babelify, {
            presets: ['es2015', 'stage-0']
        })
        .bundle()
        .on('error', function(err){
            console.log('[browserify error]');
            console.log(err.message);
        })
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./tmp'));
});
    
gulp.task('styles', function() {
    return gulp.src('./src/css/main.styl')
        .pipe(stylus({
            'include css': true,
            'compress': false,
            'use': axis(),
            'rawDefine': { 'inline-image': stylus.stylus.url({
                paths: ['./src/css/imgs']
            }) }
        }))
        .pipe(prefix({
            browsers: ['> 1%', 'last 2 versions'],
            cascade: false
        }))
        .pipe(compress())
        .pipe(gulp.dest('./tmp'));
});

gulp.task('html', function() {
    var rootDir = process.cwd();
    return gulp.src('src/index.html')
        .pipe(include())
        .pipe(gulp.dest('.'));
});

gulp.task('build', ['scripts', 'styles'], function() {
    gulp.start('html');
});

gulp.task('watch', ['scripts', 'styles', 'html'], function() {
    gulp.watch('./src/css/**/*.styl', ['styles']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
    gulp.watch('./src/tpl/**/*.html', ['html']);
    gulp.watch('./src/index.html', ['html']);
});

gulp.task('default', ['build']);