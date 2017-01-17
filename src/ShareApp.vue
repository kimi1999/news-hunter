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
          <related-news :data='pageData.related' :titleTxt='pageData.text.related'></related-news>
          <!-- 评论区域 -->
          <!--<comment-list :data=''></comment-list>-->
        </div>
        <!-- 下载 引导条 -->
        <news-download-bar :pageData='pageData'></news-download-bar>

    </div>
</template>

<script lang="babel">
    import NewsArea from './components/NewsArea';
    import NewsDownloadBar from "./components/news-download-bar";
    import RelatedNews from './components/RelatedNews';
    import CommentList from './components/CommentList';
    import LoadingCenter from './components/LoadingCenter';

    var uA = navigator.userAgent;
    var testType = false;/* 是否为开发环境 上线时请 改为false */
    export default {
        name: 'detail',
        data(){
            return {
                testType : testType,
                uA: uA,
                loading:{
                  show: true,
                  position:{
                    "margin-top":"100px"
                  }
                },
                pageData:{
                  text:{}
                }
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
          if(testType){
            var url = "http://test.feed.mynewshunter.com/mercury/news/view";
            url += "?uuid=85c23b74da33b33996469f4dcc94854f" +
              "&pid=1&mdu=1&from=list&reqid=7276190432819088577" +
              "&rt=1&show=11&ct=1&cnty=CN&cl=zh&chnl=0&dlv=" +
              "&id=1478679122698431";
          }
          else{
            var topUrl = window.location.href,
                url = "/mercury/news/view"+topUrl.substring(topUrl.indexOf("?"));
          }

          this.$http.get(url).then(({data})=>{
            if(typeof data == "string"){data = JSON.parse(data);}
            if(data.code==0){
              for(var i=0; i<data.data.related.length; i++){
                switch (data.data.related[i].images.length){
                  case 0 :
                    data.data.related[i].type = "NewsWord";
                    break;
                  case 1 :
                    data.data.related[i].type = "NewsWordImgRight";
                    break;
                  case 3 :
                    data.data.related[i].type = "NewsWordImgThree";
                    break;
                  default :
                    data.data.related[i].type = "NewsWord";
                }
              }
              this.$data.pageData = data.data;
              var cla = data.data.langStyle==1 ? " " : " arab";
              document.body.className = document.body.className + cla
              this.$data.loading.show = false;
            }
          });
      }
    }

</script>
<style lang="less" src='assets/css/index.less'></style>
