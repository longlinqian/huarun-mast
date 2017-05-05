<template>
  
<div class="table-template">
 <div class="table-class-out">
                <table class="table-class"
                       cellpadding='0'
                       cellspacing='0'>
                  <div class="item-table-two-tr">
                    <td @click="addData(index)">
                      <div class="div-td-img">
                        <img src="../../assets/add.png"
                             alt="">
                      </div>
                    </td>
                    <td>
                      <div class="div-td">序号</div>
                    </td>
                    <td>
                      <div class="div-td">会员类型</div>
                    </td>
                    <td>
                      <div class="div-td">人数</div>
                    </td>
                    <td>
                      <div class="div-td">消费排名起</div>
                    </td>
                    <td>
                      <div class="div-td">消费排名止</div>
                    </td>
                    </tr>
                  </div>
                  <div class="item-table-two">
                    <tr v-for="(item,index) in datamessageShow"
                        v-if="datamessage.length != 0">
                      <td @click="deleteData(index)">
                        <div class="div-td-img">
                          <img src="../../assets/delete.png"
                               alt="">
                        </div>
                      </td>
                      <td>
                        <div class="div-td">{{index+1+(pagecur-1)*size}}</div>
                      </td>
                      <td>
                        <input v-model="item.menberType"
                               placeholder="请填写" />
                      </td>
                      <td>
                        <input v-model="item.number"
                               placeholder="请填写" />
                      </td>
                      <td>
                        <input v-model="item.consumptionStart"
                               placeholder="请填写" />
                      </td>
                      <td>
                        <input v-model="item.consumptionEnd"
                               placeholder="请填写" />
                      </td>
                    </tr>
  
                  </div>
                </table>
  
              </div>
              <div class="table-class-out">
                总共 {{datamessage.length}} 条记录
                <div class="tres"
                     v-if="datamessage.length>size">
                  <a @click="nextpage('pre')">&lt; </a>
                  <a :class="item.current"
                     v-for="(item,index) in pageDatas"
                     @click="topage(item,index)">{{item.number}}</a>
                  <a @click="nextpage('last')">  
      &gt; </a></div>
              </div>
</div>

</template>

<script>
  

    export default {
        route: {
            canReuse: false
        },
        name: 'hello',
        data() {
            return {
                msg: '',
                  datamessageShow: [
      ],
                
            }
        },
        methods: {
            route: function() {
                this.$router.push('main');
                //console.log("main");
            }     
        },
        beforeCreate: function() {
            
        },
        created: function() {
            this.fetchData();

        },

        watch: {
            // '$route': ''
        }
    }
</script>



<style scoped>
    @import 'table-template.css';
</style>


