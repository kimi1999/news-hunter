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
      margin-top: 16px;
      margin-right: 5px;
      padding: 0px 20px;
      border: 1px solid rgba(255, 255, 255, 0.87);
      border-radius: 15px;
    }
  }
  .arab  .ui-hunter-download-bar{
    direction: ltr;
  }
</style>

<script lang="babel">
    import appDownload from "../assets/js/apus.appDownload"
    export default{
        props:['pageData'],
        data(){
            return{
              showDownloadBar: false
            }
        },
        watch:{
          'pageData': function(){
            if(this.pageData && this.pageData.scheme){
              this.showDownloadBar = true;
              var urlParams = urlParamToObj(window.location.href);
              if(urlParams.pid==4){
                this.showDownloadBar = false;
                return;
              }
              var _scheme = (this.pageData.scheme.indexOf("://")>-1) ? this.pageData.scheme : (this.pageData.scheme+"://");
              _scheme += this.pageData.localUrl;
              //console.log(_scheme);
              /* new 一个下载 引导按钮，若已安装APP 点击此按钮就打开app */
              new appDownload.apusDownloadHandel({
                      clickDom: document.getElementById("downloadBtn"),
                      androidScheme: _scheme,
                      iosScheme: _scheme,
                      androidDownloadUrl: this.pageData.downloadUrlAndroid,
                      iosDownloadUrl: this.pageData.downloadUrlIOS
                  });
            }
          }
        },
        mounted(){}
    }

    /**
     * 6. 将URL后面的参数转换成一个对象
     *     url : url地址
     */
    function urlParamToObj(url){
      var reg_url =/^[^\?]+\?([\w\W]+)$/,
        reg_para=/([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
        arr_url = reg_url.exec( url ),
        ret = {};
      if( arr_url && arr_url[1] ){
        var str_para = arr_url[1],result;
        while((result = reg_para.exec(str_para)) != null){
          ret[result[1]] = result[2];
        }
      }
      return ret;
    }
</script>
