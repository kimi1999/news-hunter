<template>
  <a class="word-img-l-r" href="">
    <div class="l">
      <p>
        MTips For Busy WomenSmarter Food Choices 101 Tips For Busy WomenWay Around The Island
      </p>
      <div class="ui-hunter-detail-time">
        <span>BBC</span>
      </div>
    </div>
    <div class="r">
      <div>
        <img src="http://static.appbox.apuslauncher.com/upload/fe/002.png" alt="">
      </div>
    </div>

  </a>
</template>


<style  lang="less">
  /* 新闻详情页 相关新闻 */
  .ui-hunter-detail-related{
    .related-item{
      width: 100%;
      height: auto;
      position: relative;
      margin-top: 20px;
      a{
        display: inline-block;
        width: 100%;
        height: auto;
        color: #444;
      }
      img{
        width: 100%;
      }
      .word,.word-img-t-b{
        padding-bottom: 25px;
        p{
          margin-top: 5px;
        }
      }
      .word-img-l-r{
        .l{
          width: 64%;
          float: left;
          height: 80px;
          position: relative;
          p{
            line-height: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
        .r{
          width: 32%;
          float: right;
          img{
            width: 100%;
            height: 80px;
          }
          height: 80px;
        }
      }
      .word-img-t-b-3{
        padding-bottom: 10px;
      }
      .ui-grid-trisect{
        padding-right: 0;
        padding-left: 0;
      }
      .ui-hunter-detail-time{
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
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
