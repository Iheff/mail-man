var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var size = require('gulp-size');

gulp.task('sass', function (){
			gulp.src(['./styles/sass/*.scss', '!./styles/sass/_variables.scss'])
				.pipe(sass({
					includePaths: ['./styles/sass'],
					outputStyle: 'expanded'
				}))
				.pipe(prefix(
					"last 1 version", "> 1%", "ie 8", "ie 7"
					))
				.pipe(gulp.dest('./styles/css'));
				//.pipe(minifycss());
				//.pipe(gulp.dest('./prod/css'));
});


gulp.task('default', function(){
		//gulp.watch("./styles/sass/**/*.scss", function(event){
			gulp.run('sass');
		//});

});