var gulp = require('gulp'),  
    sass = require('gulp-ruby-sass'),

    var gulp = require('gulp');

// $ gulp default
    gulp.task('default', function() {
        console.log('gulpworkwell');//test
    });


    var htmlmin = require('gulp-htmlmin');
    gulp.task('html',function(){
        gulp.src('*.html')
        .pipr(htmlmin({
            collapseWhitespace : true,
            removeComments : true
        }))
        //zip it and put into dist;
        .pipe(gulp.dest('dist'))
    })

    var scss = require('gulp-sass');
var cssnano = require('gulp-cssnano');
//for sass, but designer was not using it;
gulp.task('scss',function(){
    gulp.src('*.scss')
    .pipe(scss())
    .pipe(gulp.dest("dist"))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
});

//type start to start
gulp.task("default",["watch","html","scss","image","js"],function(){
    gulp.start("watch","html","scss","image","js")
})

      gulp.task('clean', function() {  
        return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {read: false})
          .pipe(clean());
      });
      