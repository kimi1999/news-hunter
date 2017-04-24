<template>
  <div class="top-title ui-border-b">
    <a href="javascript:void(0);" @click="backFun()" class="iconfont icon-back" v-if="false" ></a>
    <span class="title">{{pageTitle}}</span>
    <span class="right">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
  .top-title{
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    padding: 0 40px;
    position: absolute;
    top:0;
    left: 0;
    z-index: 1000;
    background-color: #000;
    color: #fff;
    .title{
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 44px;
      font-size: 20px;
    }
  }
  .icon-back{
    color: #fff;
    position: absolute;
    text-decoration: none;
    display: inline-block;
    top: 11px;
    left: 12px;
    width: 24px ;
    height: 24px;
    font-size: 24px;
  }
</style>

<script lang="babel">

  export default{
    props:['back-fun','page-title']
  }
</script>
