const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

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

exports.default = gulp.parallel(styles,images,scripts);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./scr/scripts/*.js', gulp.parallel(scripts))
    gulp.watch('./src/images/*', gulp.parallel(images))
}