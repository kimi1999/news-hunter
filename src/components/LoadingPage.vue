<template>
  <!-- 页面等待弹层 -->
  <div class="main" :style="lineStyle">
    <div class="mask" :style="lineStyle"></div>
    <div class="wrapper flex-justify-center flex-align-center" :style="lineStyle">
      <LoadingCenter></LoadingCenter>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .main, .mask, .wrapper{
    width: 100%;
    position: fixed;
    height: 100%;
    top:0;
    left: 0;
    z-index: 999;
  }
  .mask{
    z-index: 1000;
    background-color:rgba(0,0,0,.5);
  }
  .wrapper{
    z-index: 1010;
    display: flex;
  }
</style>

 <script lang="babel">
   import LoadingCenter from './LoadingCenter.vue'
   export default{
     data(){
       return {
         lineStyle:{}
       }
     },
     created(){
       const self = this;
       this.resetLoadingCont();
       window.onresize = function(){
         self.resetLoadingCont();
       }
     },
     methods: {
       resetLoadingCont(){
         const windowHeight = document.documentElement.clientHeight;
         this.lineStyle = {
           height: windowHeight+"px",
           width: "100%"
         }
       }
     },
     components:{
       LoadingCenter
     }
   }
 </script>
