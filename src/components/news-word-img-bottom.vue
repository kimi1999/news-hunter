
<template>
  <a :href="data.url" @click='setVisited(this)' :class='{actived:data.clicked}'>
    <div class="ui-text-content">
      <h3 class="ui-nowrap-multi">{{data.title}}</h3>
      <div class="ui-row-flex">
        <div class="ui-col ui-col ui-center">
          <div class="down-img">
            <img v-bind:src="data.images[0].url">
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
  .down-img {
    width:100%;
    height:100%;
    overflow: hidden;
    margin-top: 10px;
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
