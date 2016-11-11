<template>
    <div class="ui-news">
        <TitleSection :txt='titleTxt'></TitleSection>
        <div class="ui-page-padding ui-hunter-detail-related f-cb">
            <ul>
                <li v-for="item in data" class="related-item">
                    <component :is='item.type' :data="item"></component>
                <li>
            </ul>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .ui-news {
        margin-top: 50px;
    }
</style>
<script>
    import TitleSection from "./title-section"
    import NewsWord from "./news-word"
    import NewsWordImgBottom from "./news-word-img-bottom"
    import NewsWordImgRight from "./news-word-img-right"
    import NewsWordImgThree from "./news-word-img-three"
    export default{
        props: ['data','titleTxt'],
        components: {
            TitleSection,
            NewsWord,
            NewsWordImgBottom,
            NewsWordImgRight,
            NewsWordImgThree,
        }
    }
</script>
