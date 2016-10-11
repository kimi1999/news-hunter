
<template>
  <div class="ui-page-padding ui-hunter-detail-title" v-bind:class="{gray:gray}">
    {{txt}}
  </div>
</template>


<style  lang="less">
  /* 新闻详情页 标题 */
  .ui-hunter-detail-title{
    position: relative;
    margin-top: 20px;
    font-size: 25px;
    font-weight: bolder;
    line-height: 30px;
    &:before{
      content: "";
      height: 25px;
      width: 6px;
      position: absolute;
      left: 0;
      top: 2px;
      background-color: red;
    }
    &.gray{
      //color: #EBEFF1;
      color: #d7d8d8;
      &:before{
        display: none;
      }
    }
  }
</style>

<script>
    export default{
        props:["txt","gray"],
        data(){
            return{}
        },
        mounted(){

        }
    }
</script>
