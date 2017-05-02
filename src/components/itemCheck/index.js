import itemCheckComponent from './itemCheck.vue';

const itemCheck={
    install:function(Vue){
        Vue.component('itemCheck',itemCheckComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default itemCheck;