
<template>
  <div class="ui-page-padding ui-hunter-detail-main" v-html="newsDetail"></div>
</template>


<style  lang="less">
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

<script>
    export default{
        props:["newsDetail"],
        data(){
            return{}
        },
        mounted(){

        }
    }
</script>
