<template>
    <div class="app">
        <!-- 当前新闻区域 -->
        <news-area :data='nowNews'></news-area>
        <!-- 相关新闻区域 -->
        <related-news :data='nowNews.related.lists'></related-news>
        <!-- 评论区域 -->
        <comment-list :data='nowNews.comments'></comment-list>

        <!-- 下载 引导条 -->
        <news-download-bar></news-download-bar>

    </div>
</template>


<script lang="babel">
    import NewsArea from './components/NewsArea';
    import NewsDownloadBar from "./components/news-download-bar";
    import RelatedNews from './components/RelatedNews';
    import CommentList from './components/CommentList';
    export default {
        name: 'detail',
        data(){
            return {
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
            RelatedNews
        }
    }
</script>
<style lang="less" src='assets/css/index.less'></style>
