var sass = require('gulp-sass');
var webappDir = 'src/main/webapp/';

gulp.task('sass', ['clean'], function() {
    return gulp.src(webappDir + 'scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(webappDir + 'css/'));
});