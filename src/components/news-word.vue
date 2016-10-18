<template>
  <a :href="data.ourl" @click='setVisited(this)' :class='{actived:data.clicked}'>
    <div class="ui-text-content">
      <h3 class="ui-nowrap-multi">{{data.title}}</h3>
      <!--<div class="summary ui-nowrap-multi">-->
      <!--{{{data.summary}}}-->
      <!--</div>-->
      <div class="news-source">
        {{data.source}}
      </div>
    </div>
  </a>
</template>


<style  lang="less" scoped>
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

