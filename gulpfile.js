/**
 * Created by linlong on 17/3/29.
 */
var gulp=require("gulp");
//这里用到了webpack-stream 而不是webpack
var webpack=require("webpack-stream");
var vinylName=require("vinyl-named");
// var connect=require("gulp-connect");
var webpackConfig=require("./build/webpack.prod.conf");
//添加MD5戳
var rev=require("gulp-rev");
//替换原始文件中的js引用
var revCollect=require("gulp-rev-collector");
var clean=require("gulp-clean");
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var ora = require('ora')
var spinner = ora('building for production...')
var shell = require('gulp-shell')
//路径配置
var path={
  dev:{
    html:"./src",
    js:"./src/js",
    component:"./components"
  },
  clean:"./static"
};
var vueFilePath  = [
  'src/assets/*.png',
   'src/assets/**/*.png',
   'src/componets/*.vue',
   'src/componets/**/*.png',
   'src/view/*.vue',
   'src/view/**/*.vue',
   'src/view/**/**/*.vue',
   'src/view/**/**/**/*.vue',
   'src/view/**/*.js',
   'src/view/**/**/*.js',
   'src/view/**/**/**/*.js',
   'src/view/**/*.scss',
   'src/view/**/**/*.scss',
   'src/view/**/**/**/*.scss',
      'src/view/**/*.css',
   'src/view/**/**/*.css',
   'src/view/**/**/**/*.css',
    'src/*.vue',
   'src/*.js',
];
var config={
  dev:"./config/dev/version.config.js",
  prod:"./config/prod/version.config.js",
  uat:"./config/uat/version.config.js"
};
//清理
gulp.task("clean",function(){
  return gulp.src(path.clean+"/*.*")
    .pipe(clean());
});
//启用webpack,依赖clean
gulp.task("webpack",["clean"],function(){

   spinner.stop()
  return gulp.src("./src/js/index.js")
    .pipe(vinylName())
    .pipe(webpack(webpackConfig)
    )
   ;
});
gulp.task('copy-prod-config', function () {
  return gulp.src(config.prod).pipe(gulp.dest('./src/commonjs'));
});
gulp.task('copy-dev-config', function () {
  return gulp.src(config.dev).pipe(gulp.dest('./src/commonjs'));
});
gulp.task('copy-uat-config', function () {
  return gulp.src(config.uat).pipe(gulp.dest('./src/commonjs'));
});

gulp.task('npm-run', shell.task([
  'npm run build'
]))
//更新html中旧的js引用
gulp.task("rev",["webpack"],function(){
  return gulp.src(["./build/*.json",path.dev.html+"/index.html"])
    .pipe(revCollect())
    .pipe(gulp.dest("./"));
});
//创建服务器
gulp.task('browser-sync', function () {
 browserSync({
   server: {
     baseDir: "./dist" //web服务的根目录
   },
   port: 60555 //web服务的指定端口--嘎嘎--大端口
 });
});
//reload操作
gulp.task("reload",["rev"],function(){
  gulp.src(path.dev.js+"/*.js").pipe(connect.reload());
  gulp.src(path.dev.html+"./index.html").pipe(connect.reload());
  gulp.src(path.dev.component+"./**.vue").pipe(connect.reload());
});
//watch js html 组件 三者的改变 起到自动刷新的作用
gulp.task("watch",function(){
  gulp.watch(path.dev.js+"/*.js",["rev","reload"]);
  gulp.watch(path.dev.html+"/index.html",["rev","reload"]);
  gulp.watch(path.dev.component+"/*.vue",["webpack","rev","reload"]);
});
gulp.task('serve', ['npm-run','browser-sync'], function () {
  gulp.watch([vueFilePath],['npm-run']);//检测文件，如有变化自动更新浏览器的显示
});
gulp.task('change-uat', ['copy-uat-config'], function () {
  
});
gulp.task('change-dev', ['copy-dev-config'], function () {
  
});
gulp.task('change-prod', ['copy-prod-config'], function () {
  
});
gulp.task('run-uat', ['copy-uat-config','npm-run'], function () {
});
gulp.task('run-prod', ['copy-prod-config','npm-run'], function () {
  
});
gulp.task('serve-dev', ['copy-dev-config','npm-run','browser-sync'], function () {
  gulp.watch([vueFilePath],['npm-run']);//检测文件，如有变化自动更新浏览器的显示
});
gulp.task('serve-uat', ['copy-uat-config','npm-run','browser-sync'], function () {
  gulp.watch([vueFilePath],['npm-run']);//检测文件，如有变化自动更新浏览器的显示
});
gulp.task('serve-prod', ['copy-prod-config','npm-run','browser-sync'], function () {
  gulp.watch([vueFilePath],['npm-run']);//检测文件，如有变化自动更新浏览器的显示
});



