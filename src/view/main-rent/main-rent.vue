<template>
  
<div class="main-rent">
<headBar v-bind:userName='username'></headBar>

   <div class="img-click-section">
      <div class="img-section">
        <div class="img-item" v-for="(item,index) in bootImgs" @click="toText(item)" v-if='item.flag'>
          <img :src="item.picUrl" alt=""/>
          <div class="img-name" >{{item.name}}</div>
        </div>
      </div>
    </div>
     <div class="text-menu">
      <div class="text-section">
    
        <div :class="bootTexts[0].classBody"   @click="toText1(bootTexts[0])" >
            <div class="text-header">
                <div :class="bootTexts[0].classItem">{{bootTexts[0].name}}
                    <div class="span-font-up" >+</div>
                </div> 
            </div>
            <div class="scroll-class-hidden">
            <div class="scroll-class"> 
             <div class="text-body" v-for="(item2,index2) in dataItems0" v-if="dataItems0Flag">
                 <div class="text-body-left color-one">{{item2.content}}</div>
                 <div class="text-body-right">{{item2.sendtime}}</div>
             </div>
               <div v-if="!dataItems0Flag" class="bootTexts-kong-img">
                <img src="../../assets/7.png" alt="">
                <div class="bootTexts-kong-text">您暂时没有消息</div>
             </div>
            </div>
            </div>
        </div>
            <div :class="bootTexts[1].classBody"   @click="gas.toText(bootTexts[1])" >
            <div class="text-header">
                <div :class="bootTexts[1].classItem">{{bootTexts[1].name}}
                    <div class="span-font-up" >+</div>
                </div> 
            </div>
             <div class="scroll-class-hidden">
             <div class="scroll-class"> 
             <div class="text-body" v-for="(item2,index2) in dataItems1"  v-if="dataItems1Flag">
                 <div class="text-body-left color-two">{{item2.title}}</div>
                 <div class="text-body-right">{{item2.sentTime}}</div>              
             </div>
               <div v-if="!dataItems1Flag" class="bootTexts-kong-img">
                <img src="../../assets/7.png" alt="">
                <div class="bootTexts-kong-text">您暂时没有消息</div>
             </div>
             </div>
             </div>
        </div>
            <div :class="bootTexts[2].classBody"   @click="toText(bootTexts[2])" >
            <div class="text-header">
                <div :class="bootTexts[2].classItem">{{bootTexts[2].name}}
                    <div class="span-font-up" >+</div>
                </div> 
            </div>
             <div class="scroll-class-hidden">
             <div class="scroll-class"> 
             <div class="text-body" v-for="(item2,index2) in dataItems2" v-if="dataItems2Flag">
          <div class="text-body-left1 color-one">{{item2.applyno}}</div>
                  <div class="text-body-center1 color-three">{{item2.applyformstatusdesc}}</div>
                 <div class="text-body-right1">{{item2.applytime}}</div>
             </div>
               <div v-if="!dataItems2Flag" class="bootTexts-kong-img">
                <img src="../../assets/7.png" alt="">
                <div class="bootTexts-kong-text">您暂时没有消息</div>
             </div>
             </div>
             </div>
        </div>
            <div :class="bootTexts[3].classBody"   @click="gas.toText(bootTexts[3])" >
            <div class="text-header">
                <div :class="bootTexts[3].classItem">{{bootTexts[3].name}}
                    <div class="span-font-up" >+</div>
                </div> 
            </div>
             <div class="scroll-class-hidden">
             <div class="scroll-class"> 
             <div class="text-body" v-for="(item2,index2) in dataItems3" v-if="dataItems3Flag">
                 <div class="text-body-left">{{item2.content}}</div>
                 <div class="text-body-right">{{item2.sendtime}}</div>
             </div>
               <div v-if="!dataItems3Flag" class="bootTexts-kong-img">
                <img src="../../assets/7.png" alt="">
                <div class="bootTexts-kong-text">您暂时没有消息</div>
             </div>
             </div>
             </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
    import {
        Cell,
        Indicator
    } from 'mint-ui'
    import timeDear from '../../commonjs/timeTransfer.js'
import luan from '../../assets/2.png'

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
                src: luan,
                bootImgs: [{
                    'name': '消息提醒',
                    'picUrl': require('../../assets/1.png'),
                    'stateUrl': 'tab.messageWarning',
                    'permiss':"atenant_mdbsx:view:*",
                    'flag':false
                        // tab.ctRecharge
                }, {
                    'name': '我的申请',
                    'picUrl': luan,
                    'stateUrl': 'applyMain',
                    'permiss':"atenant_mwdsq:view:*"                    ,
                    'flag':false
                }, {
                    "name": "我的证照",
                    "picUrl": require('../../assets/3.png'),
                    "stateUrl": "tab.myPhoto",
                    'permiss':"atenant_mwdzz:view:*",
                    'flag':false
                }, {
                    'name': '我的店铺',
                    'picUrl': require('../../assets/4.png'),
                    'stateUrl': 'tab.myMart',
                    'permiss':"atenant_mwddp:view:*",
                    'flag':false
                }, {
                    'name': '通知公告',
                    'picUrl': require('../../assets/5.png'),
                    'stateUrl': 'tab.annouce',
                    'permiss':"atenant_mgzgg:view:*",
                    'flag':false
                }, {
                    'name': '商场指引',
                    'picUrl': require('../../assets/6.png'),
                    'stateUrl': 'tab.martGuide',
                    'permiss':"atenant_mcdzy:view:*",
                    'flag':false
                }, {
                    'name': '财务管理',
                    'picUrl': require('../../assets/8.png'),
                    'stateUrl': 'tab.martGuide',
                    'permiss':"atenant_mcwgl:view:*",
                    'flag':false
                }, {
                    'name': '财务管理',
                    'picUrl': require('../../assets/8.png'),
                    'stateUrl': 'tab.martGuide',
                    'permiss':"atenant_mmgcw:view:*",
                    'flag':false
                }],
                bootTexts: [{
                    'name': '消息提醒',
                    'classItem': "textItem1 textItem-base",
                    'classFont': "textFont1",
                    'classBody': "text-menu-body1 text-menu-body",
                    'stateUrl': 'tab.martGuide',
                    'flag':false
                }, {
                    'name': '通知公告',
                    'classItem': "textItem2 textItem-base",
                    'classFont': "textFont2",
                    'classBody': "text-menu-body2 text-menu-body",
                    'stateUrl': 'tab.martGuide',
                    'flag':false
                }, {
                    'name': '申请记录',
                    'classItem': "textItem3 textItem-base",
                    'classFont': "textFont3",
                    'classBody': "text-menu-body3 text-menu-body",
                    'stateUrl': 'tab.martGuide',
                    'flag':false
                }, {
                    'name': '证照管理',
                    'classItem': "textItem4 textItem-base",
                    'classFont': "textFont4",
                    'classBody': "text-menu-body4 text-menu-body",
                    'stateUrl': 'tab.martGuide',
                    'flag':false
                }
                // , {
                //     'name': '财务管理',
                //     'classItem': "textItem4 textItem-base",
                //     'classFont': "textFont4",
                //     'classBody': "text-menu-body4 text-menu-body",
                //     'stateUrl': 'tab.martGuide'
                // }
                
                ],
                dataItems0: [],
                dataItems1: [],
                dataItems2: [],
                dataItems3: []

            }
        },
        methods: {
            route: function() {
                this.$router.push('main');
                //console.log("main");
            },            
            toText: function(item) {
                this.$store.commit('storeitem', item);
                this.$router.push({
                    name: item.stateUrl
                });      
            },
            setShow: function() {
                if (this.setFlag == false) {
                    this.setFlag = true;
                } else {
                    this.setFlag = false;
                }

            },
            fetchData: function() {
              var data = new FormData({"username":"ZHZH1",password:"123456"});
            //   data.append("username":"ZHZH1")

this.$store.state.urlLogin= 'http://10.0.97.163:18013/crland-osp-api/v2/sys/user/getUserInfo'
//?userName=wangxiaochao


                if (this.$route.name == "Index") {
                    var self = this;
                        var loginName="ZHZH1";
                        // var loginName="huliang29";
                     this.$http.get(this.$store.state.urlLogin + '?userName='+loginName, {}).then(function(res) {
                    //   console.log( JSON.stringify(res));
                    var tempData = res.body.obj.roleList[0].menuList;
                      console.log(JSON.stringify(res.body.obj.roleList[0].menuList));
    this.username  = res.body.obj.name;
                      for(var i = 0; i < tempData.length;i++){
                          switch(tempData[i].permission){
                            case 'atenant_mdbsx:view:*': this.bootImgs[0].flag = true;break;
                            case 'atenant_mwdsq:view:*': this.bootImgs[1].flag = true;break;
                            case 'atenant_mwdzz:view:*': this.bootImgs[2].flag = true;break;
                            case 'atenant_mwddp:view:*': this.bootImgs[3].flag = true;break;
                            case 'atenant_mgzgg:view:*': this.bootImgs[4].flag = true;break;
                            case 'atenant_mcdzy:view:*': this.bootImgs[5].flag = true;break;
                            case 'atenant_mcwgl:view:*': this.bootImgs[6].flag = true;break;
                            case 'atenant_mmgcw:view:*': this.bootImgs[7].flag = true;break;
                            default:break;
                          }  
                      }
                   
                    });

                    this.$http.get(this.$store.state.url + '/waitDealt/queryWaitDealtMessage?limit=5&offset=1&read=N', {}).then(function(res) {
                      console.log( res.body.count== 0);
                      console.log( res.body.count);
                      console.log(JSON.stringify(res));
                      if (res.success == false ||res.body.count== 0||res.body.count== undefined) {
                              this.dataItems0Flag = false;
                        } else {
                        this.dataItems0 = res.body.rows;
                        if (this.dataItems0 == null || this.dataItems0.count == 0 || this.dataItems0 == []||res.body.count== undefined) {
                            this.dataItems0Flag = false;
                        } else {
                              this.dataItems0Flag = true;
                            for (var i = 0; i < this.dataItems0.length; i++) {
                                this.dataItems0[i].sendtime = timeDear.formatDate(new Date(this.dataItems0[i].sendtime));
                            }
                        }

                        // console.log(JSON.stringify(this.dataItems0));
                        }
                    });
                    this.$http.get(this.$store.state.url + '/index/queryNotify?page=1&pageSize=5', {}).then(function(res) {
                      
                    //   console.log(JSON.stringify(res));
                        if (res.success == false|| res.body.count== 0||res.body.count== undefined) {
                             this.dataItems1Flag = false;
                        } else {
                             this.dataItems1Flag = true
                        this.dataItems1 = res.body.rows;
                        console.log("通知");
                        // console.log(JSON.stringify(this.dataItems1));
                        for (var i = 0; i < this.dataItems1.length; i++) {
                            this.dataItems1[i].sentTime = timeDear.formatDate(new Date(this.dataItems1[i].sentTime));
                        }
                        }
                    });
                    this.$http.get(this.$store.state.url + '/index/queryApply?offset=1&pageSize=5', {}).then(function(res) {
                    //    console.log(JSON.stringify(res));
                        if (res.success == false|| res.body.count== 0||res.body.count== undefined) {
                            this.dataItems2Flag = false;
                        } else {
                             this.dataItems2Flag = true;
                        this.dataItems2 = res.body.rows;
                        for (var i = 0; i < this.dataItems2.length; i++) {
                            this.dataItems2[i].applytime = timeDear.formatDate(new Date(this.dataItems2[i].applytime));
                        }
                        }
                    });
                    this.$http.get(this.$store.state.url + '/index/queryLicense?page=1&pageSize=5', {}).then(function(res) {
                    //   console.log(JSON.stringify(res));
                        if (res.success == false|| res.body.count== 0||res.body.count== undefined) {
                            // this.dataItems3 = [];
                            this.dataItems3Flag = false;
                        } else {
                            this.dataItems3Flag = true;
                        this.dataItems3 = res.body.rows;
                        for (var i = 0; i < this.dataItems3.length; i++) {
                            this.dataItems3[i].applytime = timeDear.formatDate(new Date(this.dataItems3[i].applytime));
                        }
                        }
                    });
                }
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
    @import 'main-rent.css';
</style>