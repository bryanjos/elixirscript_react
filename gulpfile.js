"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
const stream = require('webpack-stream');
const exec = require('child_process').exec;

const exjsSrc = 'app/elixirscript';
const exjsDest = 'app/tmp';
const entry = './app/tmp/app/Elixir.App.js';

gulp.task('build-exjs', (cb) => exec('elixirscript "' + exjsSrc + '" -o ' + exjsDest, (err, stdout, stderr) => cb(err)));

gulp.task('webpack', ['build-exjs'], () => {
  webpackConfig.entry = entry;

  return gulp.src(entry)
    .pipe(sourcemaps.init())
    .pipe(stream(webpackConfig))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task("webpack-dev-server", (callback) => {
  let config = Object.create(webpackConfig);
  config.devtool = "eval";
  config.debug = true;
  config.devServer = {
    contentBase: './dist'
  };
  config.module.loaders.push({
    test: /\.html$/,
    loader: "raw-loader"
  });

  return new WebpackDevServer(webpack(config), {
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", (err) => {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('watch', () => gulp.watch(['app/**/*', '!app/tmp/*'], ['webpack']));

gulp.task('default', ['webpack', 'webpack-dev-server', 'watch']);
