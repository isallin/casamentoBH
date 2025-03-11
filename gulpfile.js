const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function html() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./public'))
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./public/css'));
}

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
}

exports.default = gulp.parallel(html,styles,images,scripts);
exports.watch = function(){
    gulp.watch('./src/*.html', gulp.parallel(html))
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./scr/scripts/*.js', gulp.parallel(scripts))
    gulp.watch('./src/images/*', gulp.parallel(images))
}