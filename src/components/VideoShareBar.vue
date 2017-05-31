<template>
  <div class="control-bar ui-border-b">
    <span class="source">{{videoData.source}}</span>
    <span class="time">{{formatTime(videoData.ptime)}}</span>

    <a href="javascript:void(0)" class="share"></a>
    <a href="javascript:void(0)" class="collection"></a>
  </div>
</template>

<style lang="less" scoped>
  .control-bar{
    position: relative;
    width: 100%;
    height:40px;
    box-sizing: border-box;
    padding: 0 12px;
    line-height:40px;
    .source,.time{
      display: inline-block;
      opacity: 0.5;
      font-size: 14px;
      color: #222222;
      letter-spacing: 0;
    }
    .time{
      margin-left: 10px;
    }
    .share,.collection{
      display: inline-block;
      width: 24px;
      height: 24px;
      position: absolute;
      top:8px;
      background-size: cover!important;
    }
    .share{
      right: 12px;
      background: url("http://static.news.apuslauncher.com/upload/news/20170518164719e5eb1f3bb4.png");
    }
    .collection{
      right: 56px;
      background: url("http://static.news.apuslauncher.com/upload/news/20170518164613ba694d10a7.png");
    }
  }
</style>
<script lang="babel">
  import vConfig from '../assets/js/videoConfig'
  import moment from 'moment'
  export default{
    props:["video-data"],
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{
      formatTime(time){
        return moment(time).fromNow();
      }
    }
  }
</script>
