<template>
  <div class="app">
    <!-- 当前新闻区域 -->
    <section>
        <title-section :txt="nowNews.title" :gray="nowNews.isGray"></title-section>
        <news-source-time :source="nowNews.source" :time="nowNews.time"></news-source-time>
        <div class="ui-page-padding ui-hunter-detail-main" v-html="nowNews.detail"></div>
        <news-label></news-label>
    </section>

    <!-- 相关新闻区域 -->
    <section class="mrg-top">
      <title-section :txt="nowNews.related.title"></title-section>
      <div class="ui-page-padding ui-hunter-detail-related f-cb">
        <ul>
          <li v-for="item in nowNews.related.lists" class="related-item">
            <news-related-word v-if="item.type=='word'" ></news-related-word>
            <news-related-word-img-bottom v-if="item.type=='word-img-bottom'"></news-related-word-img-bottom>
            <news-related-word-img-right v-if="item.type=='word-img-right'"></news-related-word-img-right>
            <news-related-word-img-three v-if="item.type=='word-img-3'"></news-related-word-img-three>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="babel">
    import TitleSection from "./components/title-section"
    import NewsSourceTime from "./components/news-source-time"
    import NewsManContent from "./components/news-main-content"
    import NewsLabel from "./components/news-label"
    import NewsRelatedWord from "./components/news-related-word"
    import NewsRelatedWordImgBottom from "./components/news-related-word-img-bottom"
    import NewsRelatedWordImgRight from "./components/news-related-word-img-right"
    import NewsRelatedWordImgThree from "./components/news-related-word-img-three"
    export default {
      data(){
        return {
          nowNews: {
            title: "AN OVERVIEW OF COSMETIC PROCEDURES",
            isGray: false,
            source: "BBC",
            time: "2016/10/11",
            detail: "",
            related:{
              title: "RELATED",
              lists: [
                {type:"word"},
                {type:"word-img-bottom"},
                {type:"word-img-3"},
                {type:"word-img-right"}
              ]
            }
          }
        }
      },
      components:{
        TitleSection,
        NewsSourceTime,
        NewsManContent,
        NewsLabel,
        NewsRelatedWord,
        NewsRelatedWordImgBottom,
        NewsRelatedWordImgRight,
        NewsRelatedWordImgThree
      },
      mounted: function(){
        //console.log(111111111);
      }
    }
</script>

<style lang="less">
  /* 新闻详情页 新闻主内容区域 */
  .ui-hunter-detail-main{
    width: 100%;
    min-height: 200px;
    height: auto;
    p{
      margin-bottom: 13px;
      font-size: 16px;
      line-height: 30px;
    }
    img{
      width: 100%;
    }
  }
</style>
