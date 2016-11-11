
var uA = navigator.userAgent,
  isAndroid = !!uA.match(/android/i),
  isAndroid2 = /android\s?2\./i.test(uA),
  isIos = !!uA.match(/ipad|ipod|iphone/i),
  isOS = isIos ? +uA.match(/OS\s(\d*)/)[1] : 0,
  inIE = /MSIE/gi.test(uA),
  inWeiChart = !!uA.match(/MicroMessenger/i),
  inQQ = !!uA.match(/QQ\//) || !!uA.match(/Qzone/i),
  inQQbrowser = !!uA.match(/MQQBrowser/i),
  inWeibo = !!uA.match(/weibo/i),
  isChrome = !!uA.indexOf("Chrome") !== -1,
  inYixin = !!uA.match(/yixin/i);





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


var  createIframe=(function(){
  var iframe;
  return function(){
    if(iframe){
      return iframe;
    }else{
      iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      return iframe;
    }
  }
})();

var baseScheme = "newshunter:",
    testUrl = 'http://test.feed.mynewshunter.com/common/article/view?uuid=0&pid=1&mdu=1&from=hotwordsearch&reqid=6972355605384694208&rt=1&show=11&ct=15&cnty=CN&cl=zh&id=1477445486481914&slice=%7B%22id%22%3A1477445486481914%2C%22type%22%3A1%2C%22show%22%3A11%2C%22title%22%3A%22%5Cu6768%5Cu6d0b%5Cu674e%5Cu6c81%5Cu5916%5Cu51fa%5Cu7528%5Cu9910%5Cu7591%5Cu590d%5Cu5408+6%5Cu5e74%5Cu6696%5Cu5fc3%5Cu6587%5Cu5b57%5Cu88ab%5Cu7ffb%5Cu51fa%28%5Cu56fe%29%22%2C%22ourl%22%3A%22http%3A%5C%2F%5C%2Fwww.chinanews.com%5C%2Fyl%5C%2F2016%5C%2F10-26%5C%2F8043526.shtml%22%2C%22surl%22%3A%22http%3A%5C%2F%5C%2Fwww.chinanews.com%5C%2Fyl%5C%2F2016%5C%2F10-26%5C%2F8043526.shtml%22%2C%22durl%22%3A%22http%3A%5C%2F%5C%2Ftest.feed.mynewshunter.com%5C%2Fcommon%5C%2Farticle%5C%2Fview%3Fuuid%3D0%26pid%3D1%26mdu%3D1%26from%3Dhotwordsearch%26reqid%3D6972355605384694208%26rt%3D1%26show%3D11%26ct%3D15%26cnty%3DCN%26cl%3Dzh%26id%3D1477445486481914%22%2C%22images%22%3A%5B%7B%22url%22%3A%22http%3A%5C%2F%5C%2Fwww.chinanews.com%5C%2F2016%5C%2F1026%5C%2F201610268492.bmp%22%2C%22width%22%3A%22500%22%2C%22height%22%3A%22436%22%7D%5D%2C%22category%22%3A15%2C%22summary%22%3A%22%22%2C%22source%22%3A%22%5Cu4e2d%5Cu56fd%5Cu65b0%5Cu95fb%5Cu7f51%22%2C%22mark%22%3A0%2C%22comments%22%3A0%2C%22pubtime%22%3A1477444061000%2C%22showtime%22%3A1477444061000%7D';

/*测试*/
baseScheme+= testUrl;



var createScheme=function(options){
  var urlScheme=baseScheme;
  var hasOption = false;
  for(var item in options){
    hasOption = true;
    urlScheme=urlScheme+item + '=' + encodeURIComponent(options[item]) + "&";
  }
  if(hasOption){
    urlScheme = urlScheme.substring(0, urlScheme.length - 1);
  }
  return encodeURIComponent(urlScheme);
}



var openApp=function(){
  //生成你的scheme你也可以选择外部传入
  var localUrl=createScheme();
  var openIframe=createIframe();

  if(isIos()){
    //判断是否是ios,具体的判断函数自行百度
    if(isIos9()){
      //判断是否为ios9以上的版本,跟其他判断一样navigator.userAgent判断,ios会有带版本号
      location.href = localUrl;//实际上不少产品会选择一开始将链接写入到用户需要点击的a标签里
      return;
    }
    window.location.href = localUrl;
    var loadDateTime = Date.now();
    setTimeout(function () {
      var timeOutDateTime = Date.now();
      if (timeOutDateTime - loadDateTime < 1000) {
        //window.location.href = "你的下载页面";
      }
    }, 25);
  }else if(isAndroid()){
    //判断是否是android，具体的判断函数自行百度
    if (isChrome) {
      //chrome浏览器用iframe打不开得直接去打开，算一个坑
      window.location.href = localUrl;
    } else {
      //抛出你的scheme
      openIframe.src = localUrl;
    }
    setTimeout(function () {
      //window.location.href = "你的下载页面";
    }, 500);
  }else{
    //主要是给winphone的用户准备的,实际都没测过，现在winphone不好找啊
    openIframe.src = localUrl;
    setTimeout(function () {
      //window.location.href = "你的下载页面";
    }, 500);
  }
}
