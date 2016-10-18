<template>
  <a :href="data.url" @click='setVisited(this)' :class='{actived:data.clicked}'>
    <div class="ui-row-flex single-img">
      <div class="ui-text-content ui-col">
        <h3 class="ui-nowrap-multi">{{data.title}}</h3>
        <div class="news-source">
          {{data.source}}
        </div>
      </div>
      <div class="img-con">
        <div class="img" v-lazy:background-image='data.images[0].url'></div>
      </div>
    </div>
  </a>
</template>


<style  lang="less" scoped>
  .muti-img {
    .ui-center {
      margin-top: 10px;
      margin-bottom: -5px;
      height: auto;
    }
  }
</style>

<script lang="babel">
  export default{
    props:['data'],
    data(){
      return{}
    },
    methods:{
      setVisited({data}){
        this.$set('data.clicked', true)
      }
    },
    mounted(){

    }
  }
</script>
