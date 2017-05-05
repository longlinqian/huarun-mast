<template>
  <div class="apply-store-event">
    <headBar v-bind:userName='username'></headBar>
    <navMenu></navMenu>
    <div class="body-main-scroll height-sixh-thou">
      <div class="body-main height-sixh-thou">
  
        <themeItem v-bind:themeData="{'name':'活动申请',class:'body-main-head'}"></themeItem>
        <div class="text-list">
          <div class="body-main-headt width-smoll-handrud">
            <div class="body-main-headt-text">
              活动基础信息
            </div>
          </div>
          <itemInputList v-bind:navDatas='navDatas'></itemInputList>
          <datePickerDemo v-bind:datePickerdata='datePickerdataStart'></datePickerDemo>
          <datePickerDemo v-bind:datePickerdata='datePickerdataEnd'></datePickerDemo>
          <itemInput v-bind:itemInputDataTemp='activityPreSaleData'></itemInput>
          <itemInputMaxWidth v-bind:itemInputMaxWidthDataTemp='activityThemeData'></itemInputMaxWidth>
          <itemCheck v-bind:itemCheckDataTemp="activitySiteTempData"></itemCheck>
          <itemRadio v-bind:itemRadioDataTemp="itemRadioDataTemp"></itemRadio>
          <itemCheck v-bind:itemCheckDataTemp="activityTypeTempData"></itemCheck>
          <itemCheck v-bind:itemCheckDataTemp="activityFormTempData"></itemCheck>
          <itemInputMaxWidth v-bind:itemInputMaxWidthDataTemp='activitycontentData'></itemInputMaxWidth>
          <itemRadio v-bind:itemRadioDataTemp="targetGroupSexTempData"></itemRadio>
          <!--目标客群年龄:-->
          <itemCheck v-bind:itemCheckDataTemp="targetGroupAgeTempData"></itemCheck>
  
          <div class="text-item width-all">
            <div class="text-item-left width20">附件:</div>
            <div class="text-item-right width30">
              <el-upload class="upload-demo"
                         action="https://jsonplaceholder.typicode.com/posts/"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList">
                <el-button size="small"
                           type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
              </el-upload>
            </div>
          </div>
          <itemCheck v-bind:itemCheckDataTemp="demandResourcesTempData"></itemCheck>
          <div v-if="demandResourcesTempData.checkDatas[0].positionFlag"
               class="module-list">
            <div class="body-main-headt width-smoll-handrud">
              <div class="body-main-headt-text">
                短信发送
              </div>
            </div>
            <div class="item-table">
              <div class="item-table-one text-item-left padding25">
                发送人群:
              </div>
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
          </div>
  
          <div class="body-main-headt width-smoll-handrud">
            <div class="body-main-headt-text">
              注意事项
            </div>
          </div>
  
          <div class="text-item width-all">
            <div class="text-item-left width20">注意事项:</div>
            <div class="text-item-right padding-halfem width70">
              <textarea class="text-item-right-textearea"
                        rows="4"
                        readonly="readonly">
  
              </textarea>
  
            </div>
          </div>
          <div class="text-item width-all ">
            <div class="text-item-right padding-halfem width70">
              <el-checkbox v-model="zhuyisFlag1"
                           label="已阅读并同意上述注意事项">已阅读并同意上述注意事项</el-checkbox>
            </div>
          </div>
  
          <div class="text-submit ">
            <div class="text-submit-left">
              <el-button size="small"
                         type="primary"
                         @click="saveData"> 保存</el-button>
            </div>
            <div class="text-submit-right">
              <el-button size="small"
                         type="primary">提交</el-button>
            </div>
  
          </div>
  
        </div>
  
      </div>
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
      itemInputDataTempHtml: {
        'name': '店铺号:',
        "value": ""
      },
      username: "张利民",
      setFlag: false,
      textItem: "text-item",
      src: require('../../assets/2.png'),
      navDatas: [{
        'name': '店铺号:',
        "value": ""
      }, {
        'name': '店铺名称:',
        "value": ""
      }, {
        'name': '店长:',
        "value": ""
      }, {
        'name': '联系电话:',
        "value": ""
      }],
      navDatas1: [{
        'name': '活动开始日期:'
      }, {
        'name': '活动结束日期:'
      }],
      navDatas2: [{
        'name': '活动预期销售:'
      }, {
        'name': '活动主题:'
      }],
      activityPreSaleData: {
        name: "活动预期销售",
        value: ""
      },
      activityThemeData: {
        name: "活动主题",
        value: ""
      },
      activitycontentData: {
        name: "活动内容",
        value: ""
      },
      activitySiteTempData: {
        class: "text-item",
        leftClass: "text-item-left",
        rightClass: "text-item-right padding-halfem",
        name: "活动场地:",
        checkDatas: [{ positionFlag: false, name: "店内", label: "1" },
        { positionFlag: false, name: "店外", label: "2" }],
      },
      activityTypeTempData: {
        class: "text-item",
        // text-item-left
        // text-item-right padding-halfem
        leftClass: "text-item-left",
        rightClass: "text-item-right padding-halfem",
        name: "活动类别:",
        checkDatas: [
          { positionFlag: false, name: "新品发布", label: "1" },
          { positionFlag: false, name: "销售促进", label: "2" },
          { positionFlag: false, name: "推广宣传", label: "3" },
          { positionFlag: false, name: "会员维护", label: "4" }
        ]
      },
      activityFormTempData: {
        class: "text-item",
        leftClass: "text-item-left",
        rightClass: "text-item-right padding-halfem",
        name: "活动形式:",
        checkDatas: [
          { positionFlag: false, name: "展销", label: "1" },
          { positionFlag: false, name: "特卖", label: "2" },
          { positionFlag: false, name: "路演", label: "3" },
          { positionFlag: false, name: "静态展", label: "4" },
          { positionFlag: false, name: "促销", label: "5" },
          { positionFlag: false, name: "其他", label: "6" }
        ]
      },

      itemRadioDataTemp: {
        class: "text-item",
        leftClass: "text-item-left",
        rightClass: "text-item-right padding-halfem",
        name: "有无明星政要:",
        radio: "1",
        radioDatas: [
          { name: "有", label: "1" },
          { name: "无", label: "2" }
        ]
      },
      targetGroupSexTempData: {
        class: "text-item width-all",
        leftClass: "text-item-left width20",
        rightClass: "text-item-right padding-halfem",
        name: "目标客群性别:",
        radio: "1",
        radioDatas: [
          { name: "男", label: "1" },
          { name: "女", label: "2" },
          { name: "不限", label: "3" }
        ]
      },
      targetGroupAgeTempData: {
        class: "text-item width-all",
        leftClass: "text-item-left width20",
        rightClass: "text-item-right padding-halfem  width70",
        name: "目标客群性别:",
        checkDatas: [
          { positionFlag: false, name: "25岁以下", label: "1" },
          { positionFlag: false, name: "25~30岁", label: "2" },
          { positionFlag: false, name: "30~35岁", label: "3" },
          { positionFlag: false, name: "35~40岁", label: "4" },
          { positionFlag: false, name: "40~45岁", label: "5" },
          { positionFlag: false, name: "45岁以上", label: "6" },
          { positionFlag: false, name: "不限", label: "7" }
        ]
      },
      demandResourcesTempData: {
        class: "text-item width-all",
        leftClass: "text-item-left width20",
        rightClass: "text-item-right padding-halfem  width70",
        name: "目标客群性别:",
        checkDatas: [
          { positionFlag: false, name: "短信发送", label: "1" },
          { positionFlag: false, name: "会员邀约", label: "2" },
          { positionFlag: false, name: "多倍积分", label: "3" },
          { positionFlag: false, name: "广告资源", label: "4" },
          { positionFlag: false, name: "后勤支持", label: "5" }
        ]
      },
      radio: "1",
      value1: '',
      value2: '',

      datePickerdataStart: { name: "活动开始日期", model: "", pickerOptions: {} },
      datePickerdataEnd: { name: "活动结束日期", model: "", pickerOptions: {} },


      fileList: [],
      showFlag: 0,
      datamessage: [
      ],
      datamessageShow: [
      ],
      pagesum: 1,
      pagecur: 1,
      pageDatas: [],
      size: 10,
    }
  }
  ,
  methods: {
    route: function () {
      this.$router.push('main');
    }
    ,
    //数据刷新  
    setdata: function () {
      this.datamessageShow = [];
      var start_i = (this.pagecur - 1) * this.size;
      for (var i = start_i; i < this.datamessage.length && i < (start_i + this.size); i++) {
        this.datamessageShow.push(this.datamessage[i]);
      }
    },
    //分页刷新
    setpage: function () {

      var temp = Math.ceil(this.datamessage.length / this.size);
      this.pagesum = temp;
      this.pageDatas = [];
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

    },
    //上一页，下一页
    nextpage: function (text) {
      if (text == "pre") {
        if (this.pagecur > 1) {
          this.pagecur--;
          this.setpage();
        }
      } else if (text == "last") {
        console.log(this.pagecur);
        if (this.pagecur < this.pagesum) {
          this.pagecur = this.pagecur + 1;
          this.setpage();
        }
      }
      this.setdata();
    },
    topage: function (item, index) {
      if (item.number == "...") {

      } else {
        if (item.number == this.pagecur) {

        } else {
          // console.log("11232:"+JSON.stringify(this.pagecur));

          this.pagecur = item.number;
          this.setpage();
          this.setdata();
        }
      }
    },
    addData: function (index) {
      this.datamessage.push({ no: "", menberType: "", number: "", consumptionStart: "", consumptionEnd: "" });
      this.pagecur = Math.ceil(this.datamessage.length / this.size);
      this.setpage();
      this.setdata();
    },
    deleteData: function (index) {
      this.datamessage.splice(index, 1)

      if (this.datamessage.length % this.size == 0) {
        if (this.pagecur > Math.ceil(this.datamessage.length / this.size)) {
          this.pagecur--;
        }
        this.setpage();
      }
      if (this.datamessage.length == 0) {
        this.pageDatas = [];
      } else {
        this.setdata();
      }
      console.log("this.pageDatas" + this.pageDatas);
    },
    tomodule: function (id) {
    }
    ,

    fetchData: function () {
    },
    saveData: function () {
      console.log(JSON.stringify(this.navDatas));
      console.log(JSON.stringify(this.itemInputDataTempHtml));
      console.log(JSON.stringify(this.activitySiteTempData));
    }

  }
  ,
  beforeCreate: function () {
    console.log(this.$store.state.version);
  }
  ,
  created: function () {
    this.fetchData();

  }
  ,
  handleRemove(file, fileList) {
    console.log(file, fileList);
  }
  ,
  handlePreview(file) {
    console.log(file);
  }
  ,
  watch: {
    // '$route': ''
  }
}
</script>


<style scoped>
@import 'apply-store-event.css';
</style>
