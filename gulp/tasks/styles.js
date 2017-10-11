var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var simpleVars = require('postcss-simple-vars');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
				.pipe(postcss([cssImport, mixins, simpleVars, hexrgba, autoprefixer, nested]))
				.on('error', function (error) {
					console.log(error.toString());
					this.emit('end');
				})
				.pipe(gulp.dest('./app/temp/styles'));
})