<template>
    <section class="mrg-top">
        <!-- 评论区域块儿 标题 -->
        <title-section txt="COMMENTS"></title-section>
        <title-section txt="THE LATEST COMMENTS" :gray="true"></title-section>
        <ul class="ui-hunter-last-comments">
            <li class="ui-page-padding" v-for="comment in data.latestLists">
                <news-comment-user-info :comment="comment"></news-comment-user-info>
                <news-comment-detail :comment="comment"></news-comment-detail>
            </li>
        </ul>
        <title-section txt="ALL COMMENTS" :gray="true"></title-section>
        <ul class="ui-hunter-all-comments">
            <li class="ui-page-padding" v-for="comment in data.allLists">
                <news-comment-user-info :comment="comment"></news-comment-user-info>
                <news-comment-detail :comment="comment"></news-comment-detail>
            </li>
        </ul>
    </section>
</template>
<style lang="less" scoped>
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
<script>
    import newsCommentUserInfo from "./news-comment-user-info"
    import newsCommentDetail from "./news-comment-detail"
    import TitleSection from "./title-section"
    export default{
        props: ['data'],
        components: {
            newsCommentUserInfo,
            newsCommentDetail,
            TitleSection
        }
    }
</script>
