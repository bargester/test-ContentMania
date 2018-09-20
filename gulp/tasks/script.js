module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
            .pipe($.concat('libs.min.js'))
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts:dev', function () {
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
    $.gulp.task('scripts:build', function () {
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('build/static/js/'))
    });
};