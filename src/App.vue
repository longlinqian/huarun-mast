<template>
  <div id="app">

    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import main from './components/main'

export default {
  name: 'app',
  components: {
    watch: {
      '$route': function () {
console.log()
         this.readyGo();

      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 0em;*/
  padding:0px;
  margin:0px;
}
/*表格*/
table{border-collapse:collapse; margin:auto}
td{margin:0;padding:0;border:1px solid rgb(236,230,211);text-align:center;}
td .div-td-img{
width:1.5em;
}
td img{
    margin:3px 0 0 1px;
}


@media screen and (max-width: 800px)  {
td input{border:none;text-align:center;width:88px;}
td .div-td{
width:180px;
height:2em;
line-height:2em;
font-size:12px;
}
.tres-jiantou{display:none}
.el-table th>.cell {
    word-wrap: normal;
    text-overflow: ellipsis;
    line-height: 20px;
    width: 100%;
    font-size: 12px !important;
    text-align: center;
    box-sizing: border-box;
}
.el-table .cell {
    white-space: normal;
    word-break: break-all;
    line-height: 24px;
    font-size: 12px;
}
.table-el-class{
width:100%;margin:auto
}
.el-table {
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #dfe6ec;
    font-size: 14px;
    color: #1f2d3d;
}
}
@media screen and (min-width: 800px)  {
td input{border:none;text-align:center;width:126px;}
td .div-td{
width:160px;
height:2.5em;
line-height:2.5em;
font-size:12px;
}
.table-el-class{

    width:94% !important;margin:auto;
}
.el-table {
    overflow: hidden;
    width: 94% !important;
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #dfe6ec;
    font-size: 14px;
    color: #1f2d3d;
}

.tres-jiantou{}
}

.tres { 
PADDING-RIGHT: 7px; PADDING-LEFT: 7px; FONT-WEIGHT: bold; 
FONT-SIZE: 13.2pt; PADDING-BOTTOM: 7px; MARGIN: 3px; 
PADDING-TOP: 7px; FONT-FAMILY: Arial, Helvetica, sans-serif; TEXT-ALIGN: center 
} 
.tres A { 
 PADDING-RIGHT: 5px;
 PADDING-LEFT: 5px; PADDING-BOTTOM: 2px; 
MARGIN: 2px;  COLOR: #fff; PADDING-TOP: 2px;
  BACKGROUND-COLOR: #d90; TEXT-DECORATION: none ;
      border-radius: 3px;
} 

.tres A:active { 
BORDER-RIGHT: #fff 2px solid; PADDING-RIGHT: 5px; 
BORDER-TOP: #fff 2px solid; PADDING-LEFT: 5px; FONT-WEIGHT: bold;
 PADDING-BOTTOM: 2px; MARGIN: 2px; BORDER-LEFT: #fff 2px solid;
 COLOR: #000; PADDING-TOP: 2px; BORDER-BOTTOM: #fff 2px solid ;
 BACKGROUND-COLOR:white;
} 
.tres A.current { 
BORDER-RIGHT: #fff 2px solid; PADDING-RIGHT: 5px; 
BORDER-TOP: #fff 2px solid; PADDING-LEFT: 5px; FONT-WEIGHT: bold;
 PADDING-BOTTOM: 2px; MARGIN: 2px; BORDER-LEFT: #fff 2px solid;
 COLOR: #000; PADDING-TOP: 2px; BORDER-BOTTOM: #fff 2px solid ;
 BACKGROUND-COLOR:white;
} 
.tres SPAN.disabled { 
DISPLAY: block; 
} 

/*颜色区*/
.color-rebeccapurple{
     color:rebeccapurple !important;
}
 .el-table .info-cols {
    color: rebeccapurple;
  }
  
</style>
