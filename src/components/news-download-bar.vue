


<template>
  <div href="javascript:void(0);" class="ui-page-padding ui-hunter-download-bar">
    <i></i>
    <span>NEWS HUNTER</span>
    <a href="javascript:void(0);">DOWNLOAD</a>
  </div>
</template>

<style  lang="less">
  /* 新闻详情页 底部 引导下载条 */
  .ui-hunter-download-bar{
    display: block;
    width: 100%;
    height: 60px;
    background-color: #F02747;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 16px;
    color: rgba(255,255,255,0.87);
    letter-spacing: 1px;
    i{
      display: inline-block;
      width: 36px;
      height: 36px;
      float: left;
      background: url("http://static.appbox.apuslauncher.com/upload/fe/201610121416176629b446a7.png") center center no-repeat;
      background-size: 36px 36px;
      margin-top: 12px;
      margin-right: 10px;
    }

    span,a{
      display: inline-block;
      height: 60px;
      line-height: 60px;
    }
    a{
      float: right;
      height: 26px;
      line-height: 26px;
      margin-top: 14px;
      color: rgba(255,255,255,0.87);
      margin-right: 5px;
      padding: 0px 20px;
      border:1px solid rgba(255,255,255,0.87);
      border-radius: 15px;
    }
  }
</style>

<script>
    export default{
        props:[],
        data(){
            return{}
        },
        mounted(){

        }
    }
</script>
