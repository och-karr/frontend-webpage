const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
})

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('save-html', function() {
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('save-js', function() {
    return gulp.src('./app/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('index.min.js'))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('save-images', function() {
    return gulp.src('./app/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

//WATCH tasks
gulp.task('watch', function() {
    gulp.watch(['app/*.html', 'app/scss/**/*.scss', 'app/js/**/*.js', './app/images/**/*' ], gulp.series(['html', 'sass', 'js', 'save-html', 'save-js', 'save-images']));
});

//run DEFAULT
gulp.task('default', gulp.series(['save-html', 'sass', 'save-js', 'save-images', gulp.parallel('browserSync', 'watch')]));