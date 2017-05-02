
import themeItemComponent from './themeItem.vue';

const themeItem={
    install:function(Vue){
        Vue.component('themeItem',themeItemComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default themeItem