<template>
    <section>
        <title-section :txt="data.article.title"></title-section>
        <news-source-time :source="data.article.source" :time="data.article.pubtime"></news-source-time>
        <div class="ui-page-padding ui-hunter-detail-main" v-html="data.article.body"></div>
        <!--<news-label :tags="data.tags"></news-label>-->
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
<script lang="babel">
    import TitleSection from "./title-section";
    import NewsSourceTime from "./news-source-time";
    import NewsLabel from "./news-label";
    export default{
        props: ['data'],
        mounted: function(){

          // 图片预站位
          var picWidth = document.body.clientWidth - 32;
          var imgArray = Array.prototype.slice.call(document.querySelectorAll('img'), 0);
          imgArray.forEach(function (img) {
            var sizeStr = img.getAttribute('data-size');
            var size = [];
            var src = img.getAttribute('news-image-src');
            if (sizeStr) {
              size = JSON.parse(sizeStr);
              if (size[0] < 30) {
                return
              }
              img.style.width = picWidth + "px";
              img.style.height = picWidth * (size[1] / size[0]) + 'px';
              img.style.backgroundColor = "#efefef";
            }
            if (src) {
              img.setAttribute('src', src);
            }
          });
        },
        components: {
            TitleSection,
            NewsSourceTime,
            NewsLabel
        }
    }
</script>
