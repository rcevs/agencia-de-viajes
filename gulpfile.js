// Require dependencies
var gulp = require('gulp');
var watch = require('gulp-watch');

// Define tasks
gulp.task('html', function () {
	console.log('html changed');
});

gulp.task('styles', function () {
	console.log('Imagine Sass or PostCSS tasks running here.')
})

// Watch files
gulp.task('watch', function () {
	
	watch('./app/index.html', function () {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function () {
		gulp.start('styles');
	});

});