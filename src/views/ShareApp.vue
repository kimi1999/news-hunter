<template>
    <div class="app">
       <div v-if="testType&&false" style="height:200px;padding:20px; word-break:break-all; box-sizing:border-box; border:1px solid red;">
          {{uA}}
       </div>
        <!-- 页面等待动画 -->
        <LoadingCenter v-if="loading.show" :loadingPosition="loading.position"></LoadingCenter>
        <div  v-if="!loading.show">
          <!-- 当前新闻区域 -->
          <news-area :data='pageData'></news-area>
          <!-- 相关新闻区域 -->
          <related-news  v-if="!hideDownloadBar" :data='pageData.related' :titleTxt='pageData.text.related'></related-news>
          <!-- 评论区域 -->
          <!--<comment-list :data=''></comment-list>-->
        </div>
        <!-- 下载 引导条 -->
        <news-download-bar v-if="!hideDownloadBar && pageData.text" :pageData='pageData'></news-download-bar>

    </div>
</template>

<script lang="babel">
    import NewsArea from '../components/NewsArea';
    import NewsDownloadBar from "../components/news-download-bar";
    import RelatedNews from '../components/RelatedNews';
    import CommentList from '../components/CommentList';
    import LoadingCenter from '../components/LoadingCenter';
    import DS from '../assets/js/api' //引入测试数据
    //userAgent
    var uA = navigator.userAgent;
    //是否为开发环境 上线时请 改为false
    var testType = true;
    if(testType){
      setTimeout(function(){
        document.getElementById("pageDataCont").innerHTML = DS.htmlStr;
      },1000)
    }

    export default {
        name: 'share',
        data(){
            return {
                domPageData : "",//php 输出在页面的 decodeURIComponent 的data数据
                testType : testType,//是为测试（显示测试数据）
                uA: uA,
                hideDownloadBar: false,//是都隐藏 下载条 和相关新闻
                //页面等待动画
                loading:{
                  show: true,
                  position:{
                    "margin-top":"100px"
                  }
                },
                pageData:{}// 已decodeURIComponent 的data数据
            }
        },
        components: {
            NewsArea,
            CommentList,
            NewsDownloadBar,
            RelatedNews,
            LoadingCenter
        },
      mounted(){
        var self = this;

        self.domPageData = document.getElementById("pageDataCont").innerHTML;
        var setPageData = function(d){
          var data = d;
          if(typeof d == "string"){
            data = JSON.parse(d);
          }
          for(var i=0; i<data.related.length; i++){
            switch (data.related[i].images.length){
              case 0 :
                data.related[i].type = "NewsWord";
                break;
              case 1 :
                data.related[i].type = "NewsWordImgRight";
                break;
              case 3 :
                data.related[i].type = "NewsWordImgThree";
                break;
              default :
                data.related[i].type = "NewsWord";
            }
          }
          self.$data.pageData = data;
          var cla = data.langStyle==1 ? " " : " arab";
          document.body.className = document.body.className + cla
          self.$data.loading.show = false;
        }
        var myTimer = setInterval(function(){
          let dpd = self.domPageData.replace(/^[ ]+/g,"").replace(/[ ]+$/g,"");
          if(!dpd ||
              dpd == '<?php echo rawurlencode(json_encode($detail)); ?>' ||
              dpd.indexOf("<!--?php echo rawurlencode(json_encode($detail)); ?-->")!=-1 ){
            console.log("php数据 未渲染");
            self.domPageData = document.getElementById("pageDataCont").innerHTML;
          }
          else{
            const fromHtml =  document.getElementById("from").innerHTML.replace(/^[ ]+/g,"").replace(/[ ]+$/g,"");
            self.hideDownloadBar = false;
            if(fromHtml=="detail"){
              //此时不显示 相关新闻和下载引导条
              self.hideDownloadBar = true;
            }
            clearInterval(myTimer);
            var pageData = decodeURIComponent(self.domPageData);
            pageData && setPageData(pageData);
          }
        },100);

      }
    }

</script>
<style lang="less" src='assets/css/index.less'></style>
