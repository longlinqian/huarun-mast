<template>
    <div class="date-picker-demo">
    
        <!--<div class="text-item">
    
            <div class="text-item-left">{{itemInputDataTemp.name}}</div>
            <div class="text-item-right">
                <input class="text-item-right-input" v-model="itemInputDataTemp.value" />
            </div>
        </div>-->

            <div class="text-item">
            <div class="text-item-left">{{datePickerdata.name}}</div>
            <div class="text-item-right">
              <el-date-picker class="text-item-right-input-datepick"
                              v-model="datePickerdata.model"
                              type="date"
                              placeholder="选择日期"
                              :picker-options="datePickerdata.pickerOptions">
              </el-date-picker>
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
        datePickerdata: Object

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
.date-picker-demo {
    /*height: 80px;
    width: 100%;
    background-color: rgb(236, 230, 211);*/
}


/*350 iphone 5*/

@media screen and (max-width: 350px) {
    .date-picker-demo .text-item-left {
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
    .date-picker-demo .text-item-left {
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
    .date-picker-demo .text-item-left {
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
    .date-picker-demo .text-item {
        width: 100%;
        min-height: 3em;
        float: left;
        line-height: 3em;
    }

    .date-picker-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: 5.5em;
    }
    .date-picker-demo .text-item-right {
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

    .date-picker-demo .text-item {
        width: 44.5%;
        min-height: 3em;
        line-height: 3em;
        float: left;
        margin: 0 0 0 2.5%;
    }

    .date-picker-demo .text-item-left {
        width: 40%;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        float: left;
        text-align: left;
        text-indent: .5em;
    }
    .date-picker-demo .text-item-right {
        width: 60%;
        display: inline-block;
        min-height: 2em;
        line-height: 1em;
        float: left;
        text-align: left;
    }
}

.date-picker-demo .text-item-right .text-item-right-input {
    width: 100%;
    display: inline-block;
    height: 2.5em;
    border-radius: 4px;
    line-height: 1.5em;
    border: 1px solid rgb(236, 230, 211);
}
/*时间选择*/
.apply-store-event .text-item-right-input-datepick{
    width:100%;
    display: inline-block;
    height: 2.5em;
    border-radius: 4px;
    line-height: 1.5em;
    border: none;
}
</style>
