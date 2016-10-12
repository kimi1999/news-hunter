<template>
    <div class="ui-related-news">
        <TitleSection txt='RELATED'></TitleSection>
        <div class="ui-page-padding ui-hunter-detail-related f-cb">
            <ul>
                <li v-for="item in data" class="related-item">
                    <component :is='item.type'></component>
                <li>
            </ul>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .ui-related-news {
        margin-top: 50px;;
    }
</style>
<script>
    import TitleSection from "./title-section"
    import NewsRelatedWord from "./news-related-word"
    import NewsRelatedWordImgBottom from "./news-related-word-img-bottom"
    import NewsRelatedWordImgRight from "./news-related-word-img-right"
    import NewsRelatedWordImgThree from "./news-related-word-img-three"
    export default{
        props: ['data'],
        components: {
            TitleSection,
            NewsRelatedWord,
            NewsRelatedWordImgBottom,
            NewsRelatedWordImgRight,
            NewsRelatedWordImgThree,
        }
    }
</script>
