<template>
  
<div class="header-demo">
<div class="header-bar">
  <div class="header-bar-img">
    <img  src="../../assets/header_logo.png" alt="">
  </div>

  <div class="header-bar-set" @click="setShow()">
   <img src="../../assets/shezhi.png" alt="">
  </div>

  <div class="header-bar-center">
    你好：{{userName}}
  </div>

</div>
<div class="my-popuper" v-if="setFlag">
    <div class="popuper-item-one" @click="changePWD()">
        修改密码
    </div>
      <div class="popuper-item-two">
            退出
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
                // userName: "张利民",
                setFlag: false,
                textItem: "text-item",
                src: require('../../assets/2.png'),
                bootImgs: []

            }
        },
          props: {
        userName: String 

    },
        methods: {
            route: function() {
                this.$router.push('main');
            },            
          
      setShow: function() {
                if (this.setFlag == false) {
                    this.setFlag = true;
                } else {
                    this.setFlag = false;
                }

            },
            changePWD:function(){
                    this.$router.push("");
            },
            fetchData: function() {


         
            }
        },
        beforeCreate: function() {
        },
        created: function() {
            this.fetchData();

        },
  deactivated () {
          this.$destroy();
        }
    }
</script>



<style scoped>
 .header-demo {
    height: 80px;
    width: 100%;
    background-color: rgb(236, 230, 211);
}

.header-demo .header-bar {
    margin: 0px 0 0 0;
    padding: 10px 0em 0 1em;
    height: 70px;
}

.header-demo .header-bar-img {
    float: left;
    width: 10.5em;
    height: 3.75em;
}

.header-demo .header-bar-center {
    width: calc(100%-11.5em);
    height: 1.5em;
    font-size: 1em;
    float: right;
    padding: 1.5em 0 0 0;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(100, 100, 100);
}

.header-demo .header-bar-set {
    width: 2em;
    height: 4.25em;
    float: right;
    padding: 1.4em 0 0 0;
}

.header-demo .header-bar-set img {
    width: 1.5em;
    height: 1.5em
}

.header-demo .my-popuper {
    position: absolute;
    right: 3px;
    top: 81px;
    width: 5em;
    height: 6em;
    background-color: rgb(236, 230, 211);
    padding: 0 3px 0 3px;
    border-radius: 2px;
        z-index: 10;
}

.header-demo .popuper-item-one {
    height: 3em;
    line-height: 3em;
    border-bottom: 1px solid #cccccc;
    color: rgb(100, 100, 100);
}

.header-demo .popuper-item-two {
    height: 3em;
    line-height: 3em;
    color: rgb(100, 100, 100);
}



</style>
