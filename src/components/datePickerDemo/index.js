import datePickerDemoComponent from './datePickerDemo.vue';

const datePickerDemo={
    install:function(Vue){
        Vue.component('datePickerDemo',datePickerDemoComponent)
    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default datePickerDemo;