import itemRadioComponent from './itemRadio.vue';

const itemRadio={
    install:function(Vue){
        Vue.component('itemRadio',itemRadioComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default itemRadio;