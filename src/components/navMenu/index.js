import navMenuComponent from './navMenu.vue';

const navMenu={
    install:function(Vue){
        Vue.component('navMenu',navMenuComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default navMenu