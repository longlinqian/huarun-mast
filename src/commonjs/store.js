



import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username:'',
    item:'',
    tableNumber:"",
    itemtwo:"",
    area:"",
    id:"",
    urlTest:"http://10.72.1.138:8011/shop-api-mgnt",
    url:"http://10.72.1.138:8011/shop-api-mgnt",
    // url:"http://10.72.1.45:8012/tenant-web-site",
    version:"prod.1.0.0"
  },
  mutations: {
    increment (state,a) {
      state.count++
    },
    storename (state,username){
      state.username = username;
    },
    storeitem (state,item){
      state.item = item;
    },
    storetableNumber (state,item){
      state.tableNumber = tableNumber;
    },
    storeitemtwo(state,item){
      state.itemtwo = item;
    },
    storearea(state,item){
      state.area = item;
    },
    storeid(state,item){
      state.id = item;
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})



export default store