import itemInputComponent from './itemInput.vue';

const itemInput={
    install:function(Vue){
        Vue.component('itemInput',itemInputComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default itemInput;