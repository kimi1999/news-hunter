
/* 判断是否是ios9 及以上的版本 */
function isIos9() {
  //获取固件版本
  var getOsv = function () {
    var reg = /OS ((\d+_?){2,3})\s/;
    if (navigator.userAgent.match(/iPad/i) || navigator.platform.match(/iPad/i) || navigator.userAgent.match(/iP(hone|od)/i) || navigator.platform.match(/iP(hone|od)/i)) {
      var osv = reg.exec(navigator.userAgent);
      if (osv.length > 0) {
        return osv[0].replace('OS', '').replace('os', '').replace(/\s+/g, '').replace(/_/g, '.');
      }
    }
    return '';
  };
  var osv = getOsv();
  var osvArr = osv.split('.');
  //初始化显示ios9引导
  if (osvArr && osvArr.length > 0) {
    if (parseInt(osvArr[0]) >= 9) {
      return true
    }
  }
  return false
}
/*
 Google Play下载链接：https://play.google.com/store/apps/details?id=com.newshunter&referrer=id%3D650010
 App Store下载链接：http://itunes.apple.com/app/id1160147643
 */
function apusDownloadHandel(obj){
  var uA = navigator.userAgent;
  this.isAndroid = !!uA.match(/android/i);
  this.isChrome = !!uA.indexOf("Chrome") !== -1;
  this.isAndroid2 = /android\s?2\./i.test(uA);
  this.isIos = !!uA.match(/ipad|ipod|iphone/i);
  if(false){
    this.isOS = isIos ? +uA.match(/OS\s(\d*)/)[1] : 0;
    this.inIE = /MSIE/gi.test(uA);
    this.inWeiChart = !!uA.match(/MicroMessenger/i);
    this.inQQ = !!uA.match(/QQ\//) || !!uA.match(/Qzone/i);
    this.inQQbrowser = !!uA.match(/MQQBrowser/i);
    this.inWeibo = !!uA.match(/weibo/i);
    this.inYixin = !!uA.match(/yixin/i);
  }
  this.iframe = null;

  this.clickDom = obj.clickDom;
  this.androidScheme = obj.androidScheme;
  this.iosScheme = obj.iosScheme;
  this.androidDownloadUrl = obj.androidDownloadUrl;
  this.iosDownloadUrl = obj.iosDownloadUrl;
  this.createIframe()._init();
}
apusDownloadHandel.prototype = {
  _init: function(){
    var self = this;
    this.addEvent(this.clickDom,"click",function(){
      if(self.isAndroid){
        //console.log("isAndroid");
        if (self.isChrome) {
          //chrome浏览器用iframe打不开得直接去打开
          window.location.href = self.androidScheme;
        } else {
          self.iframe.src = self.androidScheme;
        }
        setTimeout(function () {
          window.location.href = self.androidDownloadUrl;
        }, 500);
      }
      else if(self.isIos){
        //console.log("isIos");
        var loadDateTime = Date.now();
        setTimeout(function () {
          var timeOutDateTime = Date.now();
          if (timeOutDateTime - loadDateTime < 1000) {
            window.location.href = self.iosDownloadUrl;
          }
        }, 25);
      }
      else{
        //console.log("other");
        self.iframe.src = self.androidScheme;
        setTimeout(function () {
          window.location.href = self.androidDownloadUrl;
        }, 500);
      }
    });
    return this;
  },
  /* 页面新增一个隐藏的iframe */
  createIframe: function(){
    if (this.iframe) {
      return this.iframe;
    } else {
      this.iframe = document.createElement('iframe');
      this.iframe.style.display = 'none';
      document.body.appendChild(this.iframe);
    }
    return this;
  },
  /* 原生js 给dom添加事件 */
  addEvent: function(elm,evType,fn){
    var typeArr = evType.split(' ');
    for(var i=0; i<typeArr.length; i++){
      if (elm.addEventListener) {
        elm.addEventListener(typeArr[i], fn);
      }
      else if (elm.attachEvent) {
        elm.attachEvent('on' + typeArr[i], fn);
      }
      else {
        elm['on' + typeArr[i]] = fn;//DOM 0
      }
    }
    return this;
  }
};

export default {
  apusDownloadHandel : apusDownloadHandel
}
