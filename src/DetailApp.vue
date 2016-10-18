<template>
    <div class="app">
        <!-- 页面等待动画 -->
        <LoadingCenter v-if="loading.show" :loadingPosition="loading.position"></LoadingCenter>
        <div  v-if="!loading.show">
          <!-- 当前新闻区域 -->
          <news-area :data='pageData'></news-area>
          <!-- 相关新闻区域 -->
          <related-news :data='pageData.related'></related-news>
          <!-- 评论区域 -->
          <!--<comment-list :data='nowNews.comments'></comment-list>-->
        </div>
        <!-- 下载 引导条 -->
        <news-download-bar></news-download-bar>

    </div>
</template>


<script lang="babel">
    import NewsArea from './components/NewsArea';
    import NewsDownloadBar from "./components/news-download-bar";
    import RelatedNews from './components/RelatedNews';
    import CommentList from './components/CommentList';
    import LoadingCenter from './components/LoadingCenter';
    export default {
        name: 'detail',
        data(){
            return {
                loading:{
                  show: true,
                  position:{
                    "margin-top":"100px"
                  }
                },
                pageData:{},
                nowNews: {
                    title: "AN OVERVIEW OF COSMETIC PROCEDURES",
                    isGray: false,
                    source: "BBC",
                    time: "2016/10/11",
                    detail: "",
                    related: {
                        title: "RELATED",
                        lists: [
                            {
                              type: "NewsWord",
                              data:{
                                url: "https://www.baidu.com/",
                                source: "BBC",
                                title: "MTips For Busy WomenSmarter Food Choices 101 Tips For Busy WomenWay"
                              }
                            },
                            {
                              type: "NewsWordImgRight",
                              data: {
                                url: "https://www.baidu.com/",
                                title: "MTips For Busy WomenSmarter Food Choices 101 Tips For Busy WomenWay",
                                source: "BBC",
                                images:[{
                                  url: "http://static.appbox.apuslauncher.com/upload/fe/002.png"
                                }]
                              }
                            },
                            {
                              type: "NewsWordImgThree",
                              data: {
                                url: "https://www.baidu.com/",
                                title: "MTips For Busy WomenSmarter Food Choices 101 Tips For Busy WomenWay",
                                source: "BBC",
                                images:[
                                  {url: "http://static.appbox.apuslauncher.com/upload/fe/002.png"},
                                  {url: "http://static.appbox.apuslauncher.com/upload/fe/002.png"},
                                  {url: "http://static.appbox.apuslauncher.com/upload/fe/002.png"}
                                ]
                              }
                            },
                          {
                            type: "NewsWordImgBottom",
                            data: {
                              url: "https://www.baidu.com/",
                              title: "MTips For Busy WomenSmarter Food Choices 101 Tips For Busy WomenWay",
                              source: "BBC",
                              images:[{
                                url: "http://static.appbox.apuslauncher.com/upload/fe/002.png"
                              }]
                            }
                          }
                        ]
                    },
                    comments: {
                        title: "COMMENTS",
                        titleLatest: "",
                        titleAll: "",
                        latestLists: [{}, {}],
                        allLists: [{}, {}, {}]
                    }
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
          var url = "http://test.feed.mynewshunter.com/mercury/news/view";
          url += "?id=1470109872436267";
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
              this.$data.loading.show = false;
            }
          });
      }
    }
</script>
<style lang="less" src='assets/css/index.less'></style>
