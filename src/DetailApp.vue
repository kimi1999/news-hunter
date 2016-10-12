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
        <related-news :data='nowNews.related.lists'></related-news>
        <!-- 评论区域 -->
        <comment-list :data='nowNews.comments'></comment-list>

        <!-- 下载 引导条 -->
        <section>
            <news-download-bar></news-download-bar>
        </section>
    </div>
</template>


<script lang="babel">
    import TitleSection from "./components/title-section";
    import NewsSourceTime from "./components/news-source-time";
    import NewsLabel from "./components/news-label";
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
                            {type: "NewsRelatedWord"},
                            {type: "NewsRelatedWordImgRight"},
                            {type: "NewsRelatedWordImgBottom"},
                            {type: "NewsRelatedWordImgThree"}
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
            TitleSection,
            NewsSourceTime,
            NewsLabel,
            CommentList,
            NewsDownloadBar,
            RelatedNews
        }
    }
</script>
<style lang="less" src='assets/css/index.less'></style>
<style lang="less" scoped>
    /* 新闻详情页 新闻主内容区域 */
    .ui-hunter-detail-main {
        width: 100%;
        min-height: 200px;
        height: auto;
        p {
            margin-bottom: 13px;
            font-size: 16px;
            line-height: 30px;
        }
        img {
            width: 100%;
        }
    }

    /* 新闻详情页 评论区域 */
    .ui-hunter-last-comments:after {
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
