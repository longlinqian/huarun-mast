<template>
<div class="nav-menu-header">
<div class="nav-menu-main">
<div  class="nav-menu">
    <div class="nav-menu-max">
        <div  :class="item.class" v-for="(item,index) in navDatas " @click="tomodule(index)">
             {{item.name}}
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
                setFlag: false,
                textItem: "text-item",
                src: require('../../assets/2.png'),
                navDatas: [{
                    'name': '首页',
                    'class':'nav-menu-item-color',
                    'stateUrl': '/'
                      
                },{
                    'name': '消息提醒',
                    'class':'nav-menu-item',
                    'stateUrl': 'main'             
                }, {
                    'name': '我的申请',
                    'class':'nav-menu-item',
                    'stateUrl': 'applyMain'
                }, {
                    "name": "我的证照",
                    'class':'nav-menu-item',
                    "stateUrl": "tab.myPhoto"
                }, {
                    'name': '我的店铺',
                    'class':'nav-menu-item',
                    'stateUrl': 'tab.myMart'
                }, {
                    'name': '通知公告',
                    'class':'nav-menu-item',
                    'stateUrl': 'tab.annouce'
                }, {
                    'name': '商场指引',
                    'class':'nav-menu-item',
                    'stateUrl': 'tab.martGuide'
                }]

            }
        },
          props: {
        userName: String 

    },
        methods: {
            route: function() {
                this.$router.push('main');
            },
             tomodule: function(id) { 

                 if(this.$route.name != this.navDatas[id].stateUrl){
            console.log(JSON.stringify(this.navDatas));
            this.$router.push(this.navDatas[id].stateUrl);
                 }
           
            },
     
            fetchData: function() {
            for(var i = 0; i < this.navDatas.length;i++){
                // console.log(this.$route.name);
                //  console.log(this.navDatas[i].stateUrl);
                if(this.$route.name.indexOf(this.navDatas[i].stateUrl) < 0 ){
                    this.navDatas[i].class = 'nav-menu-item';
                }else{
                    this.navDatas[i].class = 'nav-menu-item-color';
                }
             }
            }
        },
        beforeCreate: function() {
            
        },
        
        created: function() {
            this.fetchData();

        }
        ,
        deactivated () {
          this.$destroy();
        }
    }
</script>



<style scoped>
 .nav-menu-header {
  
}

@media screen and (max-width: 1024px) {
.nav-menu-header .nav-menu-main{
     overflow:hidden;
   height:3em;
   width:100%;
      margin: 0em 0 0 0;
    position: absolute;
    top: 80px;
}
.nav-menu-header .nav-menu{
   width:100%;
   overflow-x:scroll;
   overflow-y:hidden;
   height:3.7em;
   line-height:3em;
}
.nav-menu-header .nav-menu-max{
  height:3em;
   line-height:3em;
   width:210%;
}
.nav-menu-header .nav-menu-item{
width:13.9%;
float:left;
    height: 2.8em;
    color:rgb(114,113,113);
    /*border: 1px solid rgb(236, 230, 211);*/
}
.nav-menu-header .nav-menu-item-color{
width:13.9%;
float:left;
    height: 2.8em;
    background-color: #eee;
    border: 1px solid rgb(236, 230, 211);
    
}
}
@media screen and (min-width: 1024px) {
    .nav-menu-header .nav-menu-main{
     /*overflow:hidden;
   height:3em;
   width:100%;
      margin: 0em 0 0 0;
    position: absolute;
    top: 80px;*/
        overflow: hidden;
    height: 20.5em;
    width: 7em;
    position: absolute;
    top: 95px;
    border-radius: 8px;
    left: 1em;
    border: 1px solid rgb(236, 230, 211);
}
.nav-menu-header .nav-menu{
   width:100%;
   overflow:hidden;
   height:21em;
   /**/
   line-height:3em;
}
.nav-menu-header .nav-menu-max{
  height:3em;
   line-height:3em;
   width:100%;
}
.nav-menu-header .nav-menu-item{
/*width:13.9%;
float:left;
    height: 2.8em;
    border: 1px solid rgb(236, 230, 211);*/
    width: 100%;
    float: left;
    height: 2.8em;
     color:rgb(114,113,113);
    border: 1px solid rgb(236, 230, 211);
}
.nav-menu-header .nav-menu-item-color{
/*width:13.9%;
float:left;
    height: 2.8em;
    background-color: #eee;
    border: 1px solid rgb(236, 230, 211);*/
        width: 100%;
    float: left;
    height: 2.8em;
    background-color: #eee;
    border: 1px solid rgb(236, 230, 211);
}

}
</style>
