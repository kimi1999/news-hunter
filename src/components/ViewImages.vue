<template>
  <!-- 查看大图 弹出层 -->
  <div class="main">
    <TopTitle v-if="!showOnlyImg" :page-title="pageTitle">
      <a href="javascript:void(0);" @click="tools.showDownload=true" class="iconfont icon-download"></a>
    </TopTitle>

    <!-- 图片查看区域 -->
    <div class="img-list-cont" :style="{'height':tools.window.height+'px'}" @click="showOnlyImg = !showOnlyImg">
      <!-- 左右滑动查看的图片 -->
      <div  class="swiper-container">
        <ul  class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,idx) in images">
            <div class="img-box flex-box flex-justify-center flex-align-center">
              <!--<span class="cover"> </span>-->
              <img v-if="item.loaded && item.src" :src="item.src" :height="item.height" :width="item.width">
              <LoadingCenter v-else :style="getLoadingSize(item,idx)" class="flex-box flex-justify-center flex-align-center" style="background-color:rgba(255, 255, 255, 0.5);"></LoadingCenter>
            </div>
            <div class="text-cont" :style="{maxHeight:tools.window.height/3+'px'}"  v-if="!showOnlyImg">
              <!--
              <p class="title ellipsis-2" v-if="item.photo_title">
                {{item.photo_title}}
              </p>
              -->
              <p class="desc" v-if="item.photo_title">
                {{item.photo_title}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 提示下载弹窗 -->
    <div v-show="tools.showDownload" class="download-main" :style="downloadLineStyle">
      <div  @click="tools.showDownload=false" class="wrapper flex-justify-center flex-align-center" :style="downloadLineStyle">
        <div class="pop ui-border" @click="$event.stopPropagation();">
          <p>
            Please install News Hunter App, and then save images in the App
          </p>
          <div class="btn-cont">
            <a  id="downloadBtn" class="install" href="javascript:void(0);">Install</a>
            <a @click="tools.showDownload=false" class="cancel" href="javascript:void(0);">Cancel</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="less" scoped>
  .main{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .icon-download{
    display: inline-block;
    position: absolute;
    left: auto;
    top:10px;
    right: 12px;
    width: 24px;
    height: 24px;
    color: #fff;
    font-size: 20px;
  }
  .img-list-cont{
    overflow: hidden;
    position: relative;
    width: 100%;
    float: left;
    background-color: #fff;
    .swiper-container{
      height: 100%;
    }
    ul{
      height: 100%;
    }
    li{
      width: 100%;
      height: 100%;
      float: left;
      background-color: #000;
      .img-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      /*.cover{*/
        /*display: inline-block;*/
        /*width: 100%;*/
        /*height: 200px;*/
        /*background-color: #00ee00;*/
      /*}*/
      .text-cont{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 1011;
        box-sizing: border-box;
        padding: 12px;
        max-height: 300px;
        overflow-y: scroll;
        background-color: rgba(26, 26, 26, .5);
        .title{
          color: #fff;
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 12px;
        }
        .desc{
          color: #B0B0B0;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  .download-main{
    position: absolute;
    top:0;
    left: 0;
    z-index: 9000;
    .wrapper{
      position: relative;
      display: flex;
      .pop{
        width: 90%;
        max-width: 350px;
        box-sizing: border-box;
        height: auto;
        padding: 20px;
        background-color: #fff;
        p{
          font-family: PingFangSC-Regular;
          font-size:16px;
          line-height: 25px;
          color: #444444;
          margin-bottom: 15px;
        }
        .btn-cont{
          margin-top: 16px;
          height: 20px;
          line-height: 20px;
          width: 100%;
          a{
            float: right;
            padding: 0 15px;
            letter-spacing: .5px;
            font-size: 16px;
            text-decoration: none;
          }
          .cancel{
            color: rgba(68,68,68,0.40);
          }
          .install{
            color: #ED2B4B;
          }
        }
      }
    }
  }
</style>

<script>
  import Config from '../assets/js/config'
  import appDownload from '../assets/js/apus.appDownload'
  import LoadingCenter from './LoadingCenter.vue'
  import TopTitle from './TopTitle.vue'
  import Swiper from '../../static/swiper-3.4.2.min'
  require('../assets/css/swiper-3.4.2.min.css')

  export default{
    props:["img-list","page-data"],
    computed:{
      pageTitle(){
        return this.nowImg.index +"/" +this.images.length;
      },
      downloadLineStyle(){
        return {
          width: this.tools.window.width+"px",
          height: this.tools.window.height+"px"
        }
      }
    },
    data(){
      return {
        tools:{
          window:{
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
          },
          showDownload:false,
          timer: null
        },
        nowImg: {
          index:1,
          src: ""
        },
        mySwiper: null,
        images: [],
        showOnlyImg: false
      }
    },
    mounted(){
      const self = this;
      //窗口大小改变（横屏/竖屏切换）
      Config.F.addEvent(window,"resize",function(){
        self.tools.window.width = document.documentElement.clientWidth;
        self.tools.window.height = document.documentElement.clientHeight;
        self.setSlideComfortable();
        self.$parent.lineStyle = {
          height: self.tools.window.height+"px",
          width: "100%"
        }
      });
      this.images = this.imgList;
      this.setSlideComfortable();
      this.loadNowImg(0);
      this.nowImg.src = this.images[0].origin_url || "";
      setTimeout(function(){
        self.mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          //width: document.documentElement.clientWidth,
          loop: false,
          onSlideChangeEnd: function(swiper){
            self.nowImg.src = self.images[swiper.activeIndex];
            self.nowImg.index = swiper.activeIndex+1;
            self.loadNowImg(swiper.activeIndex);
          }
        });

        /* new 一个下载 引导按钮，若已安装APP 点击此按钮就打开app */
        if(Config.URI.ev=="product"){
          let download = {
            ios : "http://itunes.apple.com/app/id1160147643",
            android: "https://play.google.com/store/apps/details?id=com.newshunter"
          }
          let _scheme = this.pageData.deeplink;

          new appDownload.apusDownloadHandel({
            clickDom: document.getElementById("downloadBtn"),
            androidScheme: _scheme,
            iosScheme: _scheme,
            androidDownloadUrl: download.android,
            iosDownloadUrl: download.ios
          });
        }
      },10);
    },
    components:{
      TopTitle,LoadingCenter
    },
    methods: {
      // 设置每个slide和其中的图片 显示最佳大小
      setSlideComfortable(){
        const self = this;
        this.images.forEach((v)=>{
          const wW = self.tools.window.width;
          const wH = self.tools.window.height;
          let percent = 1;
          let computedSize = function(w,h,type){
            if(type=="width"){
              // 根据 图片 宽度 最佳适应视角
              if(wW*percent*h/w > wH){
                percent -= 0.001;
                computedSize(w,h,type);
              }
              else{
                //console.log("width: "+percent);
                self.$set(v,"width",wW*percent);
                self.$set(v,"height","auto");
                percent = 1;
              }
            }
            else{
              // 根据 图片 高度 最佳适应视角
              if(wH*percent*w/h > wW){
                percent -= 0.001;
                computedSize(w,h,type);
              }
              else{
                //console.log("height: "+percent);
                self.$set(v,"height",wH*percent);
                self.$set(v,"width","auto");
                percent = 1;
              }
            }
          }
          if(wW >= wH){
            //横屏 窗口宽度 > 窗口高度
            if(v.origin_width <= v.origin_height){
              //竖图
              self.$set(v,"height",wH);
              self.$set(v,"width","auto");
            }
            else{
              //横图
              computedSize(v.origin_width,v.origin_height,"width");
            }
          }
          else{
            //竖屏
            if(v.origin_width <= v.origin_height){
              //竖图
              computedSize(v.origin_width,v.origin_height,"height");
            }
            else{
              //横图
              self.$set(v,"width",wW);
              self.$set(v,"height","auto");
            }
          }
        });
        //重置Swiper 尺寸
        if(self.mySwiper){
          for(var i=0; i<self.mySwiper.slides.length; i++){
            const slide = self.mySwiper.slides[i];
            slide.style.width = self.tools.window.width +"px";
            slide.style.height = self.tools.window.height +"px";
          }
          self.mySwiper.onResize();
        }
      },
      //设置每张图片 占位的 等待动画盒子的宽高
      getLoadingSize(item){
        let style = {};
        if(item.width=="auto"){
          style.height = item.height+"px";
          style.width = item.height*item.origin_width/item.origin_height +"px";
        }
        else{
          style.width = item.width+"px";
          style.height = item.width*item.origin_height/item.origin_width +"px";
        }
        return style;
      },
      //加载 滑动到的具体某张图片
      loadNowImg(index){
        const self = this;
        if(this.images[index]){
          if(!self.images[index].src){
            let img = new Image();
            img.src = self.images[index].origin_url;
            img.onload = function(){
              self.$set(self.images[index],"src",self.images[index].origin_url);
              self.$set(self.images[index],"loaded",true);
            }
          }
        }
        else{
          self.$set(self.images[index],"loaded",true);
        }
      }
    }
  }
</script>
