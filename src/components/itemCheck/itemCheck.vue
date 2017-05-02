<template>
    <div class="item-check-demo">
        <div :class="itemCheckDataTemp.class">
            <div :class="itemCheckDataTemp.leftClass">{{itemCheckDataTemp.name}}</div>
           <div :class="itemCheckDataTemp.rightClass">
              <el-checkbox v-model="item.positionFlag" :label="item.label" v-for="(item,index) in itemCheckDataTemp.checkDatas">{{item.name}}</el-checkbox>
            
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
            msg: ''
        }
    },
    props: {
        itemCheckDataTemp: Object

    },
    methods: {
        route: function () {
            this.$router.push('main');
        },

        setShow: function () {
            if (this.setFlag == false) {
                this.setFlag = true;
            } else {
                this.setFlag = false;
            }

        },
        fetchData: function () {



        }
    },
    beforeCreate: function () {
        
    },
    created: function () {
        this.fetchData();

    },
  deactivated () {
          this.$destroy();
        }
}
</script>



<style scoped>
.item-check-demo {
    /*height: 80px;
    width: 100%;
    background-color: rgb(236, 230, 211);*/
}


/*350 iphone 5*/

@media screen and (max-width: 350px) {
    .item-check-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: .2em;
    }
}


/*375 iphone 6*/

@media screen and (min-width: 350px)and (max-width: 400px) {
    .item-check-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: 1.4em;
    }
}


/*414 iphone 6s*/

@media screen and (min-width: 400px)and (max-width: 600px) {
    .item-check-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: 1.7em;
    }
}


/*7** ipad*/

@media screen and (min-width: 600px)and (max-width: 800px) {
    .item-check-demo .text-item {
        width: 100%;
        min-height: 3em;
        float: left;
        line-height: 3em;
    }

    .item-check-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: 5.5em;
    }
    .item-check-demo .text-item-right {
        width: 60%;
        display: inline-block;
        min-height: 2em;
        line-height: 1em;
        float: left;
        margin: 0 0 1em 0;
        text-align: left;
    }
 
}


/*1024 ipad pro*/

@media screen and (min-width: 800px) {

    .item-check-demo .text-item {
        width: 44.5%;
        min-height: 3em;
        line-height: 3em;
        float: left;
        margin: 0 0 0 2.5%;
    }

    .item-check-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: .5em;
    }
    .item-check-demo .text-item-right {
        width: 60%;
        display: inline-block;
        min-height: 2em;
        line-height: 1em;
        float: left;
        margin: 0 0 1em 0;
        text-align: left;
    }
       .item-check-demo .width20{
width: 18.8% ;
}
.item-check-demo .width30{
width: 28% ;
}
.item-check-demo .width70{
width: 77.6% ;
}
.item-check-demo .width-all{
width: 95% ;
}
}
.item-check-demo .padding-halfem{
padding: 0.4em 0 0 0 ;
}

.item-check-demo .text-item-right .text-item-right-input {
    width: 100%;
    display: inline-block;
    height: 2.5em;
    border-radius: 4px;
    line-height: 1.5em;
    border: 1px solid rgb(236, 230, 211);
}
</style>
