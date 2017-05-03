<template>
  
<div class="header-demo animate">
<div class="header-bar animate">
  <div class="header-bar-img animate">
    <img  src="../../assets/header_logo.png" class="header-bar-img animate" alt="">
  </div>

  <div class="header-bar-set animate" @click="setShow()">
   <img src="../../assets/shezhi.png"  alt="">
   <div class="my-popuper animate" >
    <div class="popuper-item-one animate" @click="changePWD()">
        修改密码
    </div>
      <div class="popuper-item-two animate">
            退出
    </div>
</div> 
  </div>

  <div class="header-bar-center">
    你好：{{userName}}
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
        //   this.$destroy();
        }
    }
</script>



<style scoped>
@media screen and (min-width: 800px) {
 .header-demo {
    height: 80px;
    width: 100%;
    background-color: rgb(236, 230, 211);
}
 .my-popuper {
    position: absolute;
    right: 3px;
    top: 81px;
    width: 5em;
    height: 6em;
    background-color: rgb(236, 230, 211);
    padding: 0 3px 0 3px;
    border-radius: 2px;
        z-index: 10;
        display: none;
}
 .header-bar-set:hover .my-popuper{
       position: absolute;
    right: 3px;
    top: 81px;
    width: 5em;
    height: 6em;
    background-color: rgb(236, 230, 211);
    padding: 0 3px 0 3px;
    border-radius: 2px;
        z-index: 10;
    display: block;
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
    height: 2em;
    float: right;
    padding: 1.4em 0 0 0;
   
}
}
@media screen and (max-width: 800px) {
 .header-demo {
    height: 50px;
    width: 100%;
    background-color: rgb(236, 230, 211);
}
 .my-popuper {
    position: absolute;
    right: 3px;
    top: 51px;
    width: 5em;
    height: 6em;
    background-color: rgb(236, 230, 211);
    padding: 0 3px 0 3px;
    border-radius: 2px;
        z-index: 10;
        display: none;

}
.header-bar-set:hover .my-popuper{
      position: absolute;
    right: 3px;
    top: 51px;
    width: 5em;
    height: 6em;
    background-color: rgb(236, 230, 211);
    padding: 0 3px 0 3px;
    border-radius: 2px;
    z-index: 10;
    display: block;
}
.header-demo .header-bar {
    margin: 0px 0 0 0;
    padding: 10px 0em 0 1em;
    height: 40px;
}
.header-demo .header-bar-img {
    float: left;
    width: 10.5em;
    height: 2.5em;
}
.header-demo .header-bar-center {
    width: calc(100%-11.5em);
    height: 1.5em;
    font-size: 1em;
    float: right;
    padding: .5em 0 0 0;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(100, 100, 100);
}
.header-demo .header-bar-set {
    width: 2em;
    height: 2.25em;
    float: right;
    padding: .4em 0 0 0;
}
.header-demo .header-bar-img{
    height:2em;width:5.6em;

}
}








.header-demo .header-bar-set img {
    width: 1.5em;
    height: 1.5em
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

 /*.header-bar-set:hover .my-popuper{
       position: absolute;
    right: 3px;
    top: 81px;
    width: 5em;
    height: 6em;
    background-color: rgb(236, 230, 211);
    padding: 0 3px 0 3px;
    border-radius: 2px;
        z-index: 10;
    display: block;
}*/
.animate{
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  -ms-transition: all .3s;
  -ms-transition: all .3s;
  transition: all .3s;  
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden; /* Chrome and Safari */
  -moz-backface-visibility:hidden; /* Firefox */
  -ms-backface-visibility:hidden; /* Internet Explorer */
}

</style>
