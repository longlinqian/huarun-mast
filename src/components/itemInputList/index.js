import itemInputListComponent from './itemInputList.vue';

const itemInputList={
    install:function(Vue){
        Vue.component('itemInputList',itemInputListComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default itemInputList;