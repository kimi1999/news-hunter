


<template>
  <div class="ui-page-padding ui-hunter-detail-lable f-cb">
    <a v-for="tag in tags" v-bind:href="tag.url">{{tag.text}}</a>
  </div>
</template>


<style  lang="less">
  /* 新闻详情页 新闻标签 */
  .ui-hunter-detail-lable{
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    a{
      display: inline-block;
      padding: 0 15px;
      margin-right: 10px;
      float: left;
      line-height:25px;
      margin-top: 10px;
      background: #EBEFF1;
      border-radius: 100px;
      color: #444;
      opacity: .8;
    }
  }
</style>

<script>
    export default{
        props:["tags"],
        data(){
            return{}
        },
        mounted(){

        }
    }
</script>
