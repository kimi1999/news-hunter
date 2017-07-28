<template>
  <!-- 分享落地页 直接查看大图 -->
  <div class="main-content" id="shareApp">
    <div  class="play-img-box" v-if="imgList[0]"  :style="lineStyle">
      <ViewImages :page-data="pageData" :img-list="imgList"></ViewImages>
    </div>
    <LoadingPage   v-if="!imgList[0]"></LoadingPage>
  </div>
</template>


<style lang="less">
  @import "../assets/css/reset.css";
  @import "../assets/css/var";
  html,body{
    width: 100%;
    min-height: @min-height;
    height: auto;
    background-color: #fff;
  }
  .main-content{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .play-img-box{
    position: fixed;
    top:0;
    left: 0;
    z-index: 900;
    background-color: #000;
  }
</style>

<script>
  import ViewImages from '../components/ViewImages.vue'
  import LoadingPage from '../components/LoadingPage.vue'
  import LoadingCenter from '../components/LoadingCenter.vue'
  import Config from '../assets/js/config'
  export default{
    data(){
      return {
        timer:null,
        lineStyle:{},
        pageData: {},
        imgList: []  //查看的 图片列表
      }
    },
    computed:{},
    mounted(){
      const self = this;
      self.resetLoadingCont();
      self.getPageData();

//      console.log("不带任何 提示  关闭当前窗口，注chrome 没有权限关闭");
//      window.opener = null;
//      window.open('','_self');
//      window.close();
    },
    methods:{
      getPageData(){
        const self = this;
        const setImages = function(data){
          var data = data;
          if(typeof data == "string"){
            data = JSON.parse(data);
          }
          self.pageData = data;
          if(data && data.photos){
            self.imgList = data.photos;
          }
          else if(Config.URI.ev=="test"){
            self.imgList = Config.testData.photos
          }
        }
        if(Config.URI.ev=="test"){
          const postData = {
            "device": {
              "clientId": "xxxxx",
              "mccCode": "",
              "locale": "",
              "newsCountry": ""
            },
            "appInfo": {
              "product": 1,
              "module": 1
            },
            "protocol": {
              "id":1492961405626595
            }
          };
          this.$http.post(Config.URI.getPageData,postData).then(({data})=>{
            if(data.code==0 && data.data){
              setImages(data.data);
            }
            else{
              setImages();
            }
          });
        }
        else{
          self.timer = setInterval(function(){
            if(window.pageData){
              clearInterval(self.timer);
              setImages(window.pageData);
            }
          },50);
          setTimeout(function(){
            clearInterval(self.timer);
          },15000);
        }

      },
      resetLoadingCont(){
        const windowHeight = document.documentElement.clientHeight;
        this.lineStyle = {
          height: windowHeight+"px",
          width: "100%"
        }
      }
    },
    beforeDestroy(){
      if(this.timer){
        clearInterval(this.timer);
      }
    },
    components:{
      ViewImages,LoadingCenter,LoadingPage
    }
  }
</script>
