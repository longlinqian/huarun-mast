<template>
  <div class="apply-main">
    <headBar v-bind:userName='username'></headBar>
    <navMenu></navMenu>
    <div class="body-main-scroll height-sixh-thou">
      <div class="body-main height-sixh-thou">
        <themeItem v-bind:themeData="{'name':'我要申请',class:'body-main-head'}"></themeItem>
        <div>
          <themeItem v-for="(item,index) in alldatas"
                     v-bind:themeData="{'name':(index+1)+'.'+item.processName,class:'item-theme color-rebeccapurple'}"
                     @click="toApplyDetailFun(item)">
          </themeItem>
        </div>
        <themeItem v-bind:themeData="{'name':'我的申请记录',class:'body-main-head'}"></themeItem>
        <div class="apply-main-type">
          <div class="apply-main-type-left"> 申请类型</div>
          <el-select v-model="value"
                     class="apply-main-type-center">
                 <el-option 
                       label="所有类别"
                       value="">   
                        </el-option> 
            <el-option v-for="item in alldatas"
                       :label="item.processName"
                       :value="item.processCode">
            </el-option>
          </el-select>
          <div class="apply-main-type-right" @click="queryApply()">
            <el-button size="small"
                       type="primary">查询</el-button>
          </div>
        </div>
        <!--window.location.href="http://www.jb51.net"-->
        <!--window.open("http://www.jb51.net"); -->
           <div class="table-class-out">
                <!--<table class="table-class"
                       cellpadding='0'
                       cellspacing='0'>
                  <div class="item-table-two-tr">
                    <td>
                      <div class="div-td">申请类型</div>
                    </td>
                    <td>
                      <div class="div-td">单号</div>
                    </td>
                    <td>
                      <div class="div-td">申请时间</div>
                    </td>
                    <td>
                      <div class="div-td">申请人</div>
                    </td>
                      <td>
                      <div class="div-td">申请状态</div>
                    </td>           
                    </tr>
                  </div>
                  <div class="item-table-two">
                    <tr v-for="(item,index) in dataApplyShow.rows">
                    
                      <td>
                        <div class="div-td">{{item.applytypedesc == null? "--":item.applytypedesc}}</div>
                      </td>
                      <td>
                        
                      <div class="div-td color-rebeccapurple">{{item.applyno== null? "--":item.applyno}}</div>
                      </td>
                      <td>
                        <div class="div-td">{{item.applytime== null? "--":item.applytime}}</div>
                      </td>
                      <td>
                       <div class="div-td">{{item.applycreaterid== null? "--":item.applycreaterid}}</div>
                      </td>
                       <td>
                       <div class="div-td">{{item.applyformstatusdesc== null? "--":item.applyformstatusdesc}}</div>
                      </td>
                    </tr>
  
                  </div>
                </table>-->
  
 <!--:cols-class-name="tableColsClassName"-->
  <el-table
    :data="dataApplyShow.rows"
    stripe
   border
  
    height="250"
    class="table-el-class">
    <el-table-column
      prop="applytypedesc"
      label="申请类型">
    </el-table-column>
    <el-table-column
      prop="applyno"
      label="单号"
      style="color:rebeccapurple">
    </el-table-column>
    <el-table-column
      prop="applytime"
      label="申请时间">
    </el-table-column>
      <el-table-column
      prop="applycreaterid"
      label="申请人">
    </el-table-column>
      <el-table-column
      prop="applyformstatusdesc"
      label="申请状态">
    </el-table-column>
  </el-table>

              </div>
              <div class="table-class-out">
                总共 {{dataApplyShow.total}} 条记录
                <div class="tres"
                     v-if="dataApplyShow.total>dataApplyShow.pageSize">
                  <a @click="nextpage('pre')" class="tres-jiantou">&lt; </a>
                  <a :class="item.current"
                     v-for="(item,index) in pageDatas"
                     @click="topage(item,index)">{{item.number}}</a>
                  <a @click="nextpage('last')" class="tres-jiantou">    &gt; </a></div>
              </div>
      </div>
    </div>
  </div>
</template>

<script>
 import timeDear from '../../commonjs/timeTransfer.js'
export default {
  route: {
    canReuse: false
  },
  name: 'hello',
  data() {
    return {
      msg: '',
      username: "张利民",
      setFlag: false,
      textItem: "text-item",
      src: require('../../assets/2.png'),
      dataApplyShow: [],
      value: "",
      pagesum: 1,
      pagecur: 1,
      pageDatas: [],
      size: 10,
      alldatas:[]
    }
  }
  ,
  methods: {
    route: function () {
      this.$router.push('main');
    },
       tableColsClassName(cols, index) {
        if (index === 1) {
          return 'info-cols';
        } 
        return '';
      },
    initDatas: function () {
      // http://10.72.10.232:8011/shop-api-mgnt/allApply/queryApplyConfig
      // http://10.72.1.45:8012/tenant-web-site/myApply/queryApplyConfig
      // http://10.72.1.138:8011/shop-api-mgnt/allApply/queryApplyConfig
      if (this.$route.name == "applyMain") {
          this.$http.post(this.$store.state.urlstore + 
          // '/myApply/queryApplyConfig'
          '/allApply/queryApplyConfig'
          , {"projectNo":"1402A001"}).then(function (res) {
            console.log(JSON.stringify(res));
                      this.alldatas = res.body.result;
        });
      }
      this.httpServe(10,0);
    },
    //进入各个子页面
    toApplyDetailFun: function (id) {
        if(id.processName  =="店铺活动申请"){
          this.$router.push('applyMain_applyStoreEvent');
        }
      switch (id) {
        case 0: break;
        case 1:  break;
        case 2: break;
        case 3: break;
        case 4: break;
        case 5: break;
        case 6: break;
        case 7: break;
        case 8: break;
        case 9: break
        case 10: break;
        case 11: break;
        case 12: break;
        case 13: break;
        case 14: break;
        case 15: break;
      }
    },

     //分页刷新
    setpage: function () {

      var temp = this.dataApplyShow.pages;
      this.pagesum = this.dataApplyShow.pages;
      this.pageDatas = [];
      // this.pagecur =this.dataApplyShow.currentPage;
      console.log(this.pagecur);
      switch (temp) {
        case 1: case 2: case 3: case 4: case 5: case 6: case 7:
          console.log(this.pagecur);
          for (var i = 0; i < temp; i++) {
            if (i + 1 == this.pagecur) {
              this.pageDatas.push({ number: i + 1, current: "current" });
            } else {
              this.pageDatas.push({ number: i + 1, current: "" });
            }

          }
          break;

        default:
          if (temp - this.pagecur <= 3) {
            this.pageDatas.push({ number: 1, current: "" });
            this.pageDatas.push({ number: "...", current: "" });
            for (var i = temp - 4; i <= temp; i++) {
              if (i == this.pagecur) {
                this.pageDatas.push({ number: i, current: "current" });
              } else {
                this.pageDatas.push({ number: i, current: "" });
              }
            }
          } else if (this.pagecur - 1 <= 3) {
            for (var i = 1; i <= 5; i++) {
              if (i == this.pagecur) {
                this.pageDatas.push({ number: i, current: "current" });
              } else {
                this.pageDatas.push({ number: i, current: "" });
              }
            }
            this.pageDatas.push({ number: "...", current: "" });
            this.pageDatas.push({ number: temp, current: "" });
          } else {
            if (temp == 8) { } else {
              this.pageDatas.push({ number: 1, current: "" });
              this.pageDatas.push({ number: "...", current: "" });

              for (var i = this.pagecur - 1; i <= this.pagecur + 1; i++) {
                if (i == this.pagecur) {
                  this.pageDatas.push({ number: i, current: "current" });
                } else {
                  this.pageDatas.push({ number: i, current: "" });
                }
              }
              this.pageDatas.push({ number: "...", current: "" });
              this.pageDatas.push({ number: temp, current: "" });

            }
          }
          break;

      }
console.log(JSON.stringify(this.pageDatas));
    },
    //查询
    // http://10.72.1.45:8012/tenant-web-site/myApply/queryApply
      queryApply: function () {
        this.httpServe(10,0);
    },
    topage:function(item,index){
       console.log(JSON.stringify(item));
      // console.log((index-1)*10);
      this.pagecur =item.number;
this.httpServe(10,(item.number-1)*10);
     }     
    ,nextpage:function(text){
      if(text == "last"){
this.httpServe(10,this.pagecur*10);
      }else if(text== "pre"){
this.httpServe(10,(this.pagecur-2)*10);
      }
    },
    httpServe:function(pageSize, offset){
    this.$http.post(this.$store.state.url + '/myApply/queryApply', {pageSize: pageSize, offset: offset, applytype: this.value}).then(function (res) {   
         this.dataApplyShow = res.body;
          for(var i = 0; i<this.dataApplyShow.rows.length;i++){
            this.dataApplyShow.rows[i].applytime = timeDear.formatDate(new Date(this.dataApplyShow.rows[i].applytime))
          }
          this.setpage();
        });
    }  
  }
  ,
  beforeCreate: function () {
console.log("beforeCreate");
  }
  ,
  created: function () {
    this.initDatas();
    console.log("created");

  }
  ,
  watch: {
    // '$route': ''
  }
}
</script>


<style scoped>
@import 'apply-main.css';

</style>
