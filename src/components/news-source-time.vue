
<template>
  <div class="ui-page-padding ui-hunter-detail-time">
    <span>{{source}}</span>
    <span>{{ time  | dateFormate('YYYY-MM-DD hh:mm:ss')}}</span>
  </div>
</template>


<style  lang="less">
  /* 新闻来源 时间 */
  .ui-hunter-detail-time{
    margin: 13px 0px 20px 0px;
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    line-height: 20px;
    span{
      display: inline-block;
      margin-right: 10px;
      color: #444;
      opacity: .5;
      font-size: 12px;
    }
  }
</style>

<script lang="babel">
    export default{
        props:["source","time"],
        data(){
            return{}
        },
        filters: {
        dateFormate: function(v,flag){
          var chartArr = [],
            splitArr = [],
            _date = null,
            reV = "";
          var addZero = function(n){
            return n<10 ? "0"+n : n;
          }
          var joinStr = function(i){
            switch(chartArr[i]){
              case "YYYY":
                reV += addZero(_date.getFullYear());
                break;
              case "MM":
                reV += addZero(_date.getMonth()+1);
                break;
              case "DD":
                reV += addZero(_date.getDate());
                break;
              case "hh":
                reV += addZero(_date.getHours());
                break;
              case "mm":
                reV += addZero(_date.getMinutes());
                break;
              case "ss":
                reV += addZero(_date.getSeconds());
                break;
            }
            if(splitArr[i]){
              reV += splitArr[i];
            }
          }
          if(typeof flag=="string" && flag.length>0){
            flag = flag.replace(/^[ ]+/g,"");
            flag = flag.replace(/[ ]+$/g,"");
            var t = 0;
            if(!v)return "param error";
            t = parseInt(v);
            if(t.toString() != "NaN"){
              _date = new Date(t);
              chartArr = flag.split(/[^a-z]+/i);
              splitArr = flag.split(/[a-z]+/i);
              if(splitArr[0]==""){splitArr.shift();}
              if(splitArr[splitArr.length-1]==""){splitArr.pop();}
              for(var i=0; i<chartArr.length; i++){
                joinStr(i);
              }
              return reV;
            }
            else{
              console.log("time param is not a number");
              return "param error";
            }
          }
          else{
            if(v){
              console.log("format param is needed");
              return v;
            }
            else{
              console.log("time param is not a number");
              return "param error";
            }
          }
        }
        },
        mounted(){

        }
    }
</script>
