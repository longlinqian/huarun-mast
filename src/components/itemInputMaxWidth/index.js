import itemInputMaxWidthComponent from './itemInputMaxWidth.vue';

const itemInputMaxWidth={
    install:function(Vue){
        Vue.component('itemInputMaxWidth',itemInputMaxWidthComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default itemInputMaxWidth;