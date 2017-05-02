import headBarComponent from './headBar.vue';

const headBar={
    install:function(Vue){
        Vue.component('headBar',headBarComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default headBar;