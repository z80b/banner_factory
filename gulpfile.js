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
    rename     = require('gulp-rename');
    
gulp.task('scripts', function() {
    return browserify({
            entries: [
                './src/main.js'
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
        .pipe(gulp.dest('.'));
});
    
gulp.task('styles', function() {
    return gulp.src('./src/styles/main.styl')
        .pipe(stylus({
            'include css': true,
            'compress': false,
            'use': axis(),
            'rawDefine': { 'inline-image': stylus.stylus.url({
                paths: ['./src/styles/imgs']
            }) }
        }))
        .pipe(prefix({
            browsers: ['> 1%', 'last 2 versions'],
            cascade: false
        }))
        .pipe(compress())
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['styles']);