<template>
  <div class="app">
    <!-- 当前新闻区域 -->
    <section>
        <title-section :txt="nowNews.title" :gray="nowNews.isGray"></title-section>
        <news-source-time :source="nowNews.source" :time="nowNews.time"></news-source-time>
        <news-main-content :newsDetail="nowNews.detail"></news-main-content>
    </section>

    <!-- 相关新闻区域 -->
    <section class="mrg-top">

    </section>
  </div>
</template>

<script lang="babel">
    import TitleSection from "./components/title-section"
    import NewsSourceTime from "./components/news-source-time"
    import NewsManContent from "./components/news-main-content"
    export default {
      data(){
        return {
          nowNews: {
            title: "我是新闻标题",
            isGray: false,
            source: "BBC",
            time: "2016/10/11",
            detail: ""
          }
        }
      },
      components:{
        TitleSection,
        NewsSourceTime,
        NewsManContent
      },
      mounted: function(){
        console.log(111111111);
      }
    }
</script>

<style lang="less">

</style>
