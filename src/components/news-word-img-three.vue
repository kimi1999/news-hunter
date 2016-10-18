<template>
  <a :href="data.ourl" @click='touch(this)' :class='{actived:data.clicked}'>
    <div class="ui-text-content muti-img">
      <h3 class="ui-nowrap-multi">{{data.title}}</h3>
      <div class="ui-row-flex">
        <div class="ui-col ui-col ui-center" v-for='img in data.images'>
          <div class="img-con">
            <div class="img" v-lazy:background-image='img.url'></div>
          </div>
        </div>
      </div>
      <div class="news-source">
        {{data.source}}
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
