<template>
  
<div class="theme-item-demo">
<div :class="themeData.class" @click="click()">
    {{themeData.name}} 
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
               
            }
        },
          props: {
        themeData: Object 

    },
        methods: {
            route: function() {
                this.$router.push('main');
            },            
            click:function(){
                console.log(111);
                this.$emit("click","");
            },
            fetchData: function() {     
            }
        },
        beforeCreate: function() {
           
        },
        created: function() {
        // console.log(JSON.stringify(themeData));

        },
        // deactivated () {
        //   this.$destroy()
        // }
    }
</script>



<style scoped>
 .theme-item-demo{


 }

 .theme-item-demo .body-main-head{
    height:2.5em;
    line-height: 2.7em;
    color:rgb(114,113,113);
    font-size:1.5em;
    text-align: left;
    float:left;
    width:91%;
    margin:0 0 0 3%;
    border-bottom: 1px solid rgb(236, 230, 211);
}
 @media screen and (min-width: 900px) {
      
.theme-item-demo .item-theme{
 text-align:left;
 float:left;
 width:21%;
 margin:  0 0 0 3%;
 line-height:3em;
 height:3em;
 /* color-rebeccapurple*/
}

}
@media screen and (min-width: 600px) and (max-width:900px){
.theme-item-demo .item-theme{
 text-align:left;
 float:left;
 width:29%;
 margin:0 0 0 3%;
 line-height:3em;
 height:3em;
 /*font-size:12px;*/
  /*//color-rebeccapurple*/
}
}


@media screen and (max-width: 600px) and (min-width: 400px){
.theme-item-demo .item-theme{
 text-align:left;
 float:left;
 width:45%;
 margin:0 0 0 3%;
 line-height:3em;
 height:3em;
 /*font-size:12px;*/
  /*//color-rebeccapurple*/
}
}

@media screen and (max-width: 400px) and (min-width: 300px){
.theme-item-demo .item-theme{
 text-align:left;
 float:left;
 width:45%;
 margin:0 0 0 3%;
 line-height:3em;
 height:3em;
 font-size:12px;
  /*//color-rebeccapurple*/
}
}
</style>
