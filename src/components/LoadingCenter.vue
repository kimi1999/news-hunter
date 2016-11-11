<template>
  <div class="loading" v-bind:style="loadingPosition">
    <i class="icon"></i>
  </div>
</template>


<style  lang="less" scoped>

  @-moz-keyframes rotate {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  .loading {
    text-align: center;
    padding: 15px 0;
  }

  .icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    -moz-animation: rotate 0.8s infinite linear;
    -webkit-animation: rotate 0.8s infinite linear;
    animation: rotate 0.8s infinite linear;
    -webkit-filter: invert(0.8) opacity(.5);
    background: url('http://static.news.apuslauncher.com/upload/fe/loading-bg01.png');
    background-size: cover;
  }
</style>

<script lang="babel">
  export default{
    props:['loadingPosition'],
    data(){
      return{}
    },
    methods:{},
    mounted(){

    }
  }
</script>

