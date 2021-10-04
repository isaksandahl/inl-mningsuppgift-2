var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var csso = require("gulp-csso");

gulp.task("compile", function(){

    return gulp
        .src("scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));
});

gulp.task("watch-scss", function(){
		
    gulp.watch("scss/main.scss", gulp.series("compile"));

});

gulp.task('optimize', function () {
    return gulp.src('css/main.css')
        .pipe(csso())
        .pipe(gulp.dest('csso'));
});

gulp.task('development', function () {
    return gulp.src('css/main.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('csso'));
});

gulp.task("default",gulp.series("compile", "watch-scss"), function(){});

