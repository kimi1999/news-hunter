<template>
  <div class="ui-comment-user-info">
    <div class="u-header">
      <img src="http://static.appbox.apuslauncher.com/upload/fe/u-header.jpg" alt="">
    </div>
    <div class="u-infos">
      <p class="u-name">
        <span>Isabelle Gregory</span>
      </p>
      <p class="u-time">2016/10/11</p>
    </div>
  </div>
</template>


<style  lang="less">
  /* 新闻详情页 评论作者（图像、名字、日期） */
  .ui-comment-user-info{
    margin-top: 20px;
    position: relative;
    height: 45px;
    .u-header{
      position: absolute;
      top:5px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .u-infos{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-left: 50px;
      p{
        font-size: 12px;
        color: #444;
      }
      .u-name{
        padding-top: 3px;
        font-size: 15px;
      }
      .u-time{
        opacity: .5;
      }
    }
  }
</style>

<script>
    export default{
        props:[],
        data(){
            return{}
        },
        mounted(){

        }
    }
</script>
