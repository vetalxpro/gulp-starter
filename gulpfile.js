const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const del = require('del');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const task = {
  SASS: 'sass',
  SERVE: 'serve',
  WATCH: 'watch',
  DEFAULT: 'default',
  CLEAN: 'clean',
  BUILD: 'build',
  HTML: 'html',
  BS: 'bs',
  JS: 'js'
};

const config = {
  srcPath: './src',
  distPath: './dist'
};

gulp.task(task.HTML,
  () => {
    return gulp.src(`${config.srcPath}/html/*.html`)
      .pipe(plugins.htmlmin({
        collapseWhitespace: true
      }))
      .pipe(gulp.dest(`${config.distPath}`))
      .pipe(browserSync.stream());
  }
);

gulp.task(task.SASS,
  () => {
    return gulp.src(`${config.srcPath}/styles/*.scss`)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer({
        browsers: [ 'last 2 versions' ]
      }))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(`${config.distPath}/styles`))
      .pipe(browserSync.stream());
  }
);

gulp.task(task.JS, () => {
  return gulp.src(`${config.srcPath}/js/*.js`)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(`${config.distPath}/js`))
    .pipe(browserSync.stream());
});

gulp.task(task.WATCH,
  () => {
    gulp.watch(`${config.srcPath}/styles/**/*.scss`, gulp.series(task.SASS));
    gulp.watch(`${config.srcPath}/js/**/*.js`, gulp.series(task.JS));
    gulp.watch(`${config.srcPath}/html/**/*.html`, gulp.series(task.HTML));
  }
);

gulp.task(task.CLEAN,
  () => {
    return del([ config.distPath ]);
  }
);

gulp.task(task.BUILD,
  gulp.series(
    task.CLEAN,
    gulp.parallel(
      task.SASS,
      task.JS,
      task.HTML
    )
  )
);

gulp.task(task.BS, () => {
  browserSync.init({
    server: config.distPath,
    open: true
  });
});

gulp.task(task.SERVE,
  gulp.series(
    task.BUILD,
    gulp.parallel(
      task.BS,
      task.WATCH
    )
  )
);


gulp.task(task.DEFAULT,
  gulp.series(
    task.SERVE
  )
);
