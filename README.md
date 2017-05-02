# huarun

> A Vue.js project

## Build Setup

``` bash


# install dependencies
npm install

开发
# serve with hot reload at localhost:5050
npm run serve


正式环境的发布
# build for production with minification
npm run build
```


环境的库依赖
 "autoprefixer": "^6.4.0",
    "babel-cli": "^6.18.0",
    "babel-core": "^6.0.0",
    "babel-loader": "^6.0.0",
    "babel-plugin-transform-runtime": "^6.0.0",
    "babel-preset-es2015": "^6.0.0",
    "babel-preset-latest": "^6.16.0",
    "babel-preset-stage-2": "^6.0.0",
    "babel-register": "^6.0.0",
    "chai": "^3.5.0",
    "chalk": "^1.1.3",
    "chromedriver": "^2.21.2",
    "connect-history-api-fallback": "^1.1.0",
    "cross-spawn": "^4.0.2",
    "css-loader": "^0.25.0",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.13.3",
    "extract-text-webpack-plugin": "^1.0.1",
    "fastclick": "^1.0.6",
    "file-loader": "^0.9.0",
    "function-bind": "^1.0.2",
    "html-webpack-plugin": "^2.8.1",
    "http-proxy-middleware": "^0.17.2",
    "inject-loader": "^2.0.1",
    "isparta-loader": "^2.0.0",
    "json-loader": "^0.5.4",
    "karma": "^1.3.0",
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.2.0",
    "karma-phantomjs-launcher": "^1.0.0",
    "karma-sinon-chai": "^1.2.0",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.26",
    "karma-webpack": "^1.7.0",
    "lolex": "^1.4.0",
    "mocha": "^3.1.0",
    "nightwatch": "^0.9.8",
    "opn": "^4.0.2",
    "ora": "^0.3.0",
    "phantomjs-prebuilt": "^2.1.3",
    "selenium-server": "2.53.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.4",
    "sinon": "^1.17.3",
    "sinon-chai": "^2.8.0",
    "url-loader": "^0.5.7",
    "vue-loader": "^9.4.0",
    "vue-resource": "^1.0.3",
    "vue-style-loader": "^1.0.0",
    "vuex": "^2.0.0",
    "webpack": "^1.13.2",
    "webpack-dev-middleware": "^1.8.3",
    "webpack-hot-middleware": "^2.12.2",
    "webpack-merge": "^0.14.1"



    文件结构
./build/   ./config/   打包，测试环境的配置
./dist/  开发生成后的代码
./node_module/ 依赖包的位置

./src/  开发文件位置
    ./src/assets/    图片
    ./src/common/    公共文件
    ./src/components/ 自定义组件     
    ./src/view/    
    ./src/view/main.js  入口 




For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
