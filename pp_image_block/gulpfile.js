var gulp     = require('gulp'),
    axis     = require('axis');
    pug      = require('gulp-pug'),
    stylus   = require('gulp-stylus'),
    prefixer = require('gulp-autoprefixer'),
    include  = require('gulp-include'),
    coffee   = require('gulp-coffee'),
    minify   = require('gulp-minify'),
    gulpif   = require('gulp-if'),
    rename   = require('gulp-rename'),
    debug    = true;

gulp.task('default', [ 'styles' ], function() {
    gulp.watch('./**/*.*', [ 'styles' ]);
});

gulp.task('html', [ 'styles' ], function() {
    return gulp.src('html/index.pug')
        .pipe(pug({ pretty: !debug ? false : '    ' }))
        .pipe(gulp.dest('.'));
});

gulp.task('styles', function() {
    return gulp
        .src('./src/css/index.styl')
        .pipe(stylus({
            'include css': true,
            'compress': !debug,
            'use': [axis()],
            //'rawDefine': { 'inline-image': stylus.stylus.url() }
        }))
        // .pipe(prefixer(['> 0%']))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('.'));
});

gulp.task('scripts', function(){
    // return is important here
    return gulp.src('js/index.coffee')
        .pipe(include())
        .pipe(coffee({bare: true}).on('error', console.log))
        .pipe(gulpif(!debug, minify({ compress: true, noSource: true })))
        .pipe(gulp.dest('js'));
});