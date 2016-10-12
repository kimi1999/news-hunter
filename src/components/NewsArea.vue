<template>
    <section>
        <title-section :txt="data.title" :gray="data.isGray"></title-section>
        <news-source-time :source="data.source" :time="data.time"></news-source-time>
        <div class="ui-page-padding ui-hunter-detail-main" v-html="data.detail"></div>
        <news-label></news-label>
    </section>
</template>
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
</style>
<script>
    import TitleSection from "./title-section";
    import NewsSourceTime from "./news-source-time";
    import NewsLabel from "./news-label";
    export default{
        props: ['data'],
        components: {
            TitleSection,
            NewsSourceTime,
            NewsLabel
        }
    }
</script>
