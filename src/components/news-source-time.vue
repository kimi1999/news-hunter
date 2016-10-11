
<template>
  <div class="ui-page-padding ui-hunter-detail-time">
    <span>{{source}}</span>
    <span>{{time}}</span>
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

<script>
    export default{
        props:["source","time"],
        data(){
            return{}
        },
        mounted(){

        }
    }
</script>
