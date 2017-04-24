
const testData = {
  photos: [
    {
      "origin_url": "http://p1.qhimg.com/t0181a4c0bfca820478.jpg?size=700x1050",
      "origin_width": 700,
      "origin_height": 1050,
      "photo_title": "女神经，杨紫大侠"
    },
    {
      "origin_url": "http://p3.qhimg.com/t012e8d1cddfca275f0.jpg?size=556x437",
      "origin_width": 556,
      "origin_height": 437,
      "photo_title": "关晓彤哈哈哈哈哈"
    },
    {
      "origin_url": "http://p8.qhimg.com/t01467c78a3c29dbf7c.jpg?size=500x333",
      "origin_width": 500,
      "origin_height":333,
      "photo_title": "好先生？什么啊！！"
    },
    {
      "origin_url": "http://p9.qhimg.com/t01c450f575a182c439.jpg?size=689x458",
      "origin_width":689,
      "origin_height": 458,
      "photo_title": "星爷的干女儿，叫什么来着！！"
    },
    {
      "origin_url": "http://p8.qhimg.com/t015d7f40decaf428d5.jpg?size=900x1312",
      "origin_width": 900,
      "origin_height": 1312,
      "photo_title": "关晓彤，九阴真经！！能不能别代言游戏"
    },
    {
      "origin_url": "http://p2.qhimg.com/t01d123750f224dcf2e.jpg?size=538x336",
      "origin_width": 538,
      "origin_height": 336,
      "photo_title": "《天空城》，还是关晓彤！！"
    }
  ],
  scheme: "newshunter",
  localUrl: ""
}

const URI = {
  ev: "test", //test: 测试环境 ； product: 正式环境
  getPageData : "http://test.feed.mynewshunter.com/photo/get"
}

const  F = {
  addEvent(elm, evType, fn) {
    var typeArr = evType.split(' ');
    for(var i=0; i<typeArr.length; i++){
      if (elm.addEventListener) {
        elm.addEventListener(typeArr[i], fn);//DOM2.0
      }
      else if (elm.attachEvent) {
        elm.attachEvent('on' + typeArr[i], fn);//IE5+
      }
      else {
        elm['on' + typeArr[i]] = fn;//DOM 0
      }
    }
  }
}

export default {
  testData,URI,F
}
