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
            <component v-bind:is="item.type" :news="item">
              <!-- 一条相关新闻 -->
            </component>
          </li>
        </ul>
      </div>
    </section>

    <!-- 评论区域 -->
    <section class="mrg-top">
      <!-- 评论区域块儿 标题 -->
      <title-section :txt="nowNews.comments.title" ></title-section>
      <title-section :txt="nowNews.comments.titleLatest" :gray="true"></title-section>
      <ul class="ui-hunter-last-comments">
        <li class="ui-page-padding" v-for="comment in nowNews.comments.latestLists" >
          <news-comment-user-info :comment="comment"></news-comment-user-info>
          <news-comment-detail :comment="comment"></news-comment-detail>
        </li>
      </ul>
      <title-section :txt="nowNews.comments.titleAll" :gray="true"></title-section>
      <ul class="ui-hunter-all-comments">
        <li class="ui-page-padding" v-for="comment in nowNews.comments.allLists" >
          <news-comment-user-info :comment="comment"></news-comment-user-info>
          <news-comment-detail :comment="comment"></news-comment-detail>
        </li>
      </ul>
    </section>

    <!-- 下载 引导条 -->
    <section>
      <news-download-bar></news-download-bar>
    </section>
  </div>
</template>



<script lang="babel">
    import TitleSection from "./components/title-section"
    import NewsSourceTime from "./components/news-source-time"
    import NewsLabel from "./components/news-label"
    import NewsRelatedWord from "./components/news-related-word"
    import NewsRelatedWordImgBottom from "./components/news-related-word-img-bottom"
    import NewsRelatedWordImgRight from "./components/news-related-word-img-right"
    import NewsRelatedWordImgThree from "./components/news-related-word-img-three"
    import NewsDownloadBar from "./components/news-download-bar"
    import newsCommentUserInfo from "./components/news-comment-user-info"
    import newsCommentDetail from "./components/news-comment-detail"
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
                {type:"news-related-word"},
                {type:"news-related-word-img-right"},
                {type:"news-related-word-img-bottom"},
                {type:"news-related-word-img-three"}
              ]
            },
            comments:{
              title: "COMMENTS",
              titleLatest: "THE LATEST COMMENTS",
              titleAll: "ALL COMMENTS",
              latestLists: [{},{}],
              allLists: [{},{},{}]
            }
          }
        }
      },
      components:{
        TitleSection,
        NewsSourceTime,
        NewsLabel,
        NewsRelatedWord,
        NewsRelatedWordImgBottom,
        NewsRelatedWordImgRight,
        NewsRelatedWordImgThree,
        newsCommentUserInfo,
        newsCommentDetail,
        NewsDownloadBar
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

  /* 新闻详情页 评论区域 */
  .ui-hunter-last-comments:after{
    content: "";
    display: block;
    box-sizing: border-box;
    margin: 20px 0px;
    width: 100%;
    padding: 0px 16px;
    height: 1px;
    background-color: #444;
    opacity: .5;
  }
</style>
