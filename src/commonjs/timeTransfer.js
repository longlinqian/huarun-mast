



import Vue from 'vue'

var timeDear={
   formatDate:function(now)   {     
              var   year=now.getYear()+1900;     
              var   month=now.getMonth()+1;     
              var   date=now.getDate();     
              var   hour=now.getHours();     
              var   minute=now.getMinutes();     
              var   second=now.getSeconds();     
              return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;     
              }     
         
              // var   d=new   Date(1230999938);     
              // alert(formatDate(d)); 
}


export default timeDear