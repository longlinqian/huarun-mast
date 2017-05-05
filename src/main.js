import Vue from 'vue'
import App from './App' 
import {DatePicker, 
  Radio,Checkbox,CheckboxGroup,
  Upload,Button,  
  Select,Option, Table,
  TableColumn,Dropdown,DropdownMenu,DropdownItem} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import store from './commonjs/version.config'
// 自定义组件
import headBar from './components/headBar'
import navMenu from './components/navMenu'
import itemInput from './components/itemInput'
import itemInputList from './components/itemInputList'
import datePickerDemo from './components/datePickerDemo'
import itemInputMaxWidth from './components/itemInputMaxWidth'
import itemCheck from './components/itemCheck'
import itemRadio from './components/itemRadio'
import themeItem from './components/themeItem'
//自定义呢方法
// import timeDear from '../../commonjs/timeTransfer.js'


Vue.use(navMenu)
Vue.use(headBar)
Vue.use(itemInput)
Vue.use(itemInputList)
Vue.use(datePickerDemo)
Vue.use(itemInputMaxWidth)
Vue.use(itemCheck)
Vue.use(itemRadio)
Vue.use(themeItem)
Vue.use(Vuex)
Vue.use(CheckboxGroup);
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(DatePicker)
Vue.use(Upload)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

// Vue.use(timeDear)



var vueResource = require('vue-resource');
Vue.use(vueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

var Hello = require('./components/Hello.vue');
var main = require('./components/main.vue');
var mainRent = require('./view/main-rent/main-rent.vue');
var applyMain = require('./view/main-apply/apply-main.vue');
var applyStoreEvent = require('./view/main-apply/apply-store-event.vue');
var tableTemplate = require('./view/table-template/table-template.vue');
 
const router = new VueRouter({
  routes :[
    { path: '/',
      name:'Index',
      component: mainRent },
      {
      path: '/applyMain_applyStoreEvent',
      name:'applyMain_applyStoreEvent',
      component: applyStoreEvent,
    },
  {
      path: '/applyMain',
      name:'applyMain',
      component: applyMain,
    },
    {
      path: '/tableTemplate',
      name:'tableTemplate',
      component: tableTemplate,
    }
  ]
});


Vue.prototype.getName=function(voidFunction){
  function getCode() {
    var argsWx = {};
    var queryWx = location.search.substring(1); //获取查询串
    var pairsWx = queryWx.split("&"); //在逗号处断开
    for (var i = 0; i < pairsWx.length; i++) {
      var pos = pairsWx[i].indexOf('='); //查找name=value
      if (pos == -1) {
        continue;
      } //如果没有找到就跳过
      var argName = pairsWx[i].substring(0, pos); //提取name
      argsWx[argName] = pairsWx[i].substring(pos + 1); //存为属性
    }

    return argsWx.code;
  }

  var code = getCode();
  this.$store.commit('storename',"5e506fd4-191b-4e3c-b648-6daf35fd34cb");
    voidFunction();
};
router.beforeEach(function(to, from, next)  {
  console.log(to.name);
  next();
});

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
window.addEventListener('load', function(){
  // FastClick.attach(document.body)
})
