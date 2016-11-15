<template>
  <div href="javascript:void(0);" v-show="showDownloadBar" class="ui-page-padding ui-hunter-download-bar">
    <i></i>
    <span>NEWS HUNTER</span>
    <a href="javascript:void(0);" id="downloadBtn">{{pageData.text.download}}</a>
  </div>
</template>


<style lang="less">
  /* 新闻详情页 底部 引导下载条 */
  .ui-hunter-download-bar {
    z-index: 9999;
    display: block;
    width: 100%;
    height: 60px;
    background-color: #F02747;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 16px;
    letter-spacing: 1px;
    i {
      display: inline-block;
      width: 36px;
      height: 36px;
      float: left;
      background: url("http://static.appbox.apuslauncher.com/upload/fe/201610121416176629b446a7.png") center center no-repeat;
      background-size: 36px 36px;
      margin-top: 12px;
      margin-right: 10px;
    }
    span, a {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      color: rgba(255, 255, 255, 0.87);
    }
    a {
      float: right;
      height: 26px;
      line-height: 26px;
      margin-top: 14px;
      margin-right: 5px;
      padding: 0px 20px;
      border: 1px solid rgba(255, 255, 255, 0.87);
      border-radius: 15px;
    }
  }
</style>

<script>
    export default{
        props:['pageData'],
        data(){
            return{
              showDownloadBar: false
            }
        },
        watch:{
          'pageData': function(){
            if(this.pageData && !this.pageData.scheme){
              this.showDownloadBar = true;
              /* new 一个下载 引导按钮，若已安装APP 点击此按钮就打开app */
              new apusDownloadHandel({

                      clickDom: document.getElementById("downloadBtn"),
                      androidScheme: this.pageData.scheme,
                      iosScheme: this.pageData.scheme,
                      androidDownloadUrl: this.pageData.downloadUrlAndroid,
                      iosDownloadUrl: this.pageData.downloadUrlIOS
                  });
            }
          }
        },
        mounted(){}
    }

</script>
