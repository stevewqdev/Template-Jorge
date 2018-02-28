const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    gulp.src('./scss/*.scss')
     .pipe(sass({
         outputStyle: 'compressed'
     }))
     .pipe(autoprefixer({
         versions: ['last 2 browsers']
     }))
     .pipe(gulp.dest('./app/css'))
     .pipe(browserSync.reload({stream: true}));
 
}
);


gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'serve']);