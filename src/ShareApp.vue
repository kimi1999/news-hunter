<template>
    <div class="app">
       <div v-if="testType&&false" style="height:200px;padding:20px; word-break:break-all; box-sizing:border-box; border:1px solid red;">
          {{uA}}
       </div>
        <!-- 页面等待动画 -->
        <LoadingCenter v-if="loading.show" :loadingPosition="loading.position"></LoadingCenter>
        <div  v-if="!loading.show">
          <!-- 当前新闻区域 -->
          <news-area :data='pageData'></news-area>
          <!-- 相关新闻区域 -->
          <related-news  v-if="!hideDownloadBar" :data='pageData.related' :titleTxt='pageData.text.related'></related-news>
          <!-- 评论区域 -->
          <!--<comment-list :data=''></comment-list>-->
        </div>
        <!-- 下载 引导条 -->
        <news-download-bar v-if="!hideDownloadBar && pageData.text" :pageData='pageData'></news-download-bar>

    </div>
</template>

<script lang="babel">
    import NewsArea from './components/NewsArea';
    import NewsDownloadBar from "./components/news-download-bar";
    import RelatedNews from './components/RelatedNews';
    import CommentList from './components/CommentList';
    import LoadingCenter from './components/LoadingCenter';

    //userAgent
    var uA = navigator.userAgent;
    //是否为开发环境 上线时请 改为false
    var testType = true;
    //测试环境时 页面展示的测试数据
    var testData = {
      "langStyle": 1,
      "hasTranscoded": 1,
      "localUrl": "http://test.feed.mynewshunter.com/common/article/view?uuid=0&pid=1&mdu=1&from=share&reqid=570957969221478366&rt=1&show=&ct=1&cnty=CN&cl=zh&dlv=&id=1478679122698431",
      "scheme": "newshunter",
      "downloadUrlAndroid": "https://play.google.com/store/apps/details?id=com.newshunter&referrer=id%3D650010",
      "downloadUrlIOS": "http://itunes.apple.com/app/id1160147643",
      "behavior": {
        "like": 0,
        "comment": 0,
        "share": 0,
        "saved": 0
      },
      "tags": [
        {
          "text": "世界",
          "url": "http://test.feed.mynewshunter.com/static/search.html?uuid=0&pid=1&mdu=1&type=2&from=tagsearch&reqid=570957969221478366&cnty=CN&cl=zh&api=1&size=10&wd=%E4%B8%96%E7%95%8C"
        },
        {
          "text": "基金",
          "url": "http://test.feed.mynewshunter.com/static/search.html?uuid=0&pid=1&mdu=1&type=2&from=tagsearch&reqid=570957969221478366&cnty=CN&cl=zh&api=1&size=10&wd=%E5%9F%BA%E9%87%91"
        },
        {
          "text": "金融",
          "url": "http://test.feed.mynewshunter.com/static/search.html?uuid=0&pid=1&mdu=1&type=2&from=tagsearch&reqid=570957969221478366&cnty=CN&cl=zh&api=1&size=10&wd=%E9%87%91%E8%9E%8D"
        }
      ],
      "related": [
        {
          "id": 1485215252189725,
          "type": 1,
          "show": 11,
          "title": "公募基金加仓金融汽车等板块 部分中小创遭减仓",
          "ourl": "http://funds.hexun.com/2017-01-24/187914236.html",
          "surl": "http://test.feed.mynewshunter.com/static/share.html?id=1485215252189725&p=ke0eZIhQmsnytDFo9KWl5E8ehBlNkCrw%2B7Va51J6Hf6B4eUfTLT1ytjc24lXUtHYMZJNhbWOMcS0xO98hrD5T7cXZI2W2dlm7ZQICRDC6OLj6HBZX6HOVAquYW0r3zUm5gZIwGdocytPttLn7oSylZs7wGpTqOCR3R7MSVk%2BUPw%3D",
          "durl": "http://test.feed.mynewshunter.com/common/article/view?uuid=0&pid=1&mdu=1&from=related&reqid=570957969221478366&rt=1&show=11&ct=8&cnty=CN&cl=zh&dlv=&id=1485215252189725",
          "images": [
            {
              "url": "http://static.update.mynewshunter.com/news/img_test/20170123/d6da8e38105a9308424d3862ffdaa019.jpg",
              "width": 204,
              "height": 151
            }
          ],
          "category": 8,
          "summary": "",
          "source": "和讯网",
          "mark": 0,
          "comments": 0,
          "pubtime": 1485214273612,
          "position": 2147483647,
          "showtime": 1485214273612,
          "dlv_from": ""
        },
        {
          "id": 1484646640606139,
          "type": 1,
          "show": 11,
          "title": "发改委召集金融机构开会：推动金融支持东北振兴发展",
          "ourl": "http://finance.ifeng.com/a/20170117/15151002_0.shtml",
          "surl": "http://test.feed.mynewshunter.com/static/share.html?id=1484646640606139&p=ke0eZIhQmsnytDFo9KWl5E8ehBlNkCrw%2B7Va51J6Hf6B4eUfTLT1ytjc24lXUtHYMZJNhbWOMcS0xO98hrD5T7cXZI2W2dlm7ZQICRDC6OLj6HBZX6HOVAquYW0r3zUm2vrkK9QMqbt5eUjLq4b4n%2BKCn%2BF8YSgxIkisnxPN3bY%3D",
          "durl": "http://test.feed.mynewshunter.com/common/article/view?uuid=0&pid=1&mdu=1&from=related&reqid=570957969221478366&rt=1&show=11&ct=8&cnty=CN&cl=zh&dlv=&id=1484646640606139",
          "images": [
            {
              "url": "http://static.update.mynewshunter.com/news/img_test/20170117/9bd8b0f5d33dd45b3a0a34883af9f364.jpg",
              "width": 656,
              "height": 364
            }
          ],
          "category": 8,
          "summary": "",
          "source": "凤凰网",
          "mark": 0,
          "comments": 0,
          "pubtime": 1484646462988,
          "position": 2147483647,
          "showtime": 1484646462988,
          "dlv_from": ""
        },
        {
          "id": 1484747104145397,
          "type": 1,
          "show": 11,
          "title": "全球最大对冲基金掌门：民粹主义已成市场担忧的头号问题",
          "ourl": "http://www.yicai.com/news/5208911.html",
          "surl": "http://test.feed.mynewshunter.com/static/share.html?id=1484747104145397&p=ke0eZIhQmsnytDFo9KWl5E8ehBlNkCrw%2B7Va51J6Hf6B4eUfTLT1ytjc24lXUtHYMZJNhbWOMcS0xO98hrD5T7cXZI2W2dlm7ZQICRDC6OLj6HBZX6HOVAquYW0r3zUmDIeTFhrQGgFV7Idpm%2FCHJMH7FlKOXX3UoyASaIwBEGM%3D",
          "durl": "http://test.feed.mynewshunter.com/common/article/view?uuid=0&pid=1&mdu=1&from=related&reqid=570957969221478366&rt=1&show=11&ct=8&cnty=CN&cl=zh&dlv=&id=1484747104145397",
          "images": [
            {
              "url": "http://static.update.mynewshunter.com/news/img_test/20170118/7921fd36df6e9dc916f85b5d4c19d2f0.jpg",
              "width": 204,
              "height": 152
            }
          ],
          "category": 8,
          "summary": "",
          "source": "第一财经",
          "mark": 0,
          "comments": 0,
          "pubtime": 1484746415620,
          "position": 2147483647,
          "showtime": 1484746415620,
          "dlv_from": ""
        }
      ],
      "text": {
        "download": "下载",
        "related": "大家都在看"
      },
      "article": {
        "news_id": 1478679122698431,
        "title": "杭州玉皇山南基金小镇：钱塘江畔财富新高地“联动”世界",
        "lang": "zh",
        "pubtime": 1478677522000,
        "category": 1,
        "source": "中国新闻网",
        "body": "<div class=\"news-mainbody\"><div class=\"left_zw\">  \r\n<div><img alt=\"玉皇山南基金小镇。小镇提供\" src=\"http://i2.chinanews.com/simg/2016/161109//61289760.jpg\" title=\"玉皇山南基金小镇。小镇提供\"></div>\r\n\n<div class=\"pictext\">玉皇山南基金小镇。小镇提供</div>\r\n\n<p>　　<span>中新网</span>杭州10月9日电(记者 赵晔娇 实习生 梅芳燕)这几天，世界对冲基金之都智囊团代表——美国格林威治市长经济顾问委员会首席顾问James Aiello受邀来到杭州。引起世界金融大腕兴趣的是杭州玉皇山南基金小镇(下称基金小镇)，这里紧邻上海国际金融中心，依托浙江省雄厚的民间资本，与创新创业的氛围，成为“新金融”的试验场，成为杭州市推动供给侧改革、促进经济转型升级和建设财富管理中心的重要平台之一。</p>\r\n\n<p>　　<strong>“新金融”试验场：资本激荡引来国际创新人才</strong></p>\r\n\n<p>　　钱塘江畔，玉皇山南，八卦田旁，八百多年前这里是南宋郊坛，是皇家最为重要的礼制场所。八百多年后，这里山清水秀，粉墙黛瓦，苍翠欲滴，占地5平方公里、由80多幢中式庭院组成的基金小镇盘踞而起。</p>\r\n\n<p>　　当下，基金小镇以故为新、续写繁华，依托浙江省雄厚的民间资本，集聚股权投资、证券期货和财富管理类机构，成为钱塘江畔的财富新高地。</p>\r\n\n<p>　　据统计，截至今年10月底，基金小镇集聚股权投资类、证券期货类和财富管理类机构1010家，资金管理规模突破5740亿元，税收9.31亿元，同比增长155%。</p>\r\n\n<p>　　杭州市上城区委常委、常务副区长金承涛说：“杭州玉皇山南基金小镇已形成新金融产业的高地，构建起了新金融产业生态圈，未来将打造成浙江金融改革试点之一。”</p>\r\n\n<p>　　金融新地标，吸引了国际金融人才纷纷入驻。</p>\r\n\n<p>　　王黎是一位列入浙江省“千人计划”的创新人才。在回国前，王黎先后获得弗吉尼亚理工大学计算机科学、美国密歇根大学统计学、金融学和工程及运筹学等4个专业的硕士，又完成罗斯商学院工商管理学博士学位，是位不折不扣的“学霸”。王黎曾在全球最大的资产管理公司任贝莱德大中华地区首席基金经理及量化分析师，其研制的量化投资模型在亚洲、新兴市场及北美股票市场中控制着上百亿美元资产的交易。</p>\r\n\n<p>　　如今，王黎的身份是杭州风禾资产管理有限公司董事长兼总经理。去年9月，风禾资产在基金小镇注册成立，6个月后，其发售了第一批金融产品，至今，短短9个月时间，其已发行15个产品，总规模约10亿元(人民币，下同)，并通过量化投资，给客户创造了超过10%的稳定收益。</p>\r\n\n<p>　　“创新是一个量化团队、量化机构最最重要的力量，失去了这个力量，失去了这个热情，只是靠过去的一些模型是无法生存的。”王黎认为。</p>\r\n\n<p>　　王黎是国际高端金融人才来基金小镇创新创业的一个缩影，他的故事凸显了基金小镇在国际“新金融”行业的影响力与日俱增。不仅王黎，基金小镇还引来金融大腕，如朴盛资本创始人、高盛集团前董事总经理王铁飞，和美银美林董事总经理王昌南等。</p>\r\n\n<p>　　在引智的过程中，小镇内的企业也发挥出了引才作用，如浙江玉皇山南对冲基金投资管理有限公司就架起了小镇和国际沟通的桥梁，从海外引进了10多家企业、机构，其中大部分落户在基金小镇。</p>\r\n\n<p>　　2014年，浙江玉皇山南对冲基金投资管理有限公司，在美国首次遇到王锋和他的合伙人毛煜春。王锋曾就职于美国著名量化对冲基金Citadel，从事统计套利策略开发与交易，他所开发的日内分钟段策略在2008-2009年金融危机期间，创造了八个月收益105%的业绩。</p>\r\n\n<p>　　在沟通中，双方发现彼此对基金发展的眼光和专业性相互契合。于是，浙江玉皇山南对冲基金投资管理有限公司入股王锋及其团队的项目，在基金小镇成立了浙江安诚数盈投资管理有限公司。去年10月，该公司对外发型私募基金产品，目前，整体规模达8亿元。</p>\r\n\n<p>　　王锋内心还有更大的“野心”，他希望以基金小镇为据点，参与国际股票或者期货衍生品市场的交易，使基金小镇真正成为又一个格林威治。</p>\r\n\n<p>　　如今，作为杭州金融人才管理改革试验区，国际化金融人才正在集聚。基金小镇累计吸引国内外高端金融专业人才逾2000名，包括海归人才200余人，国内领军人才30余人。</p>\r\n\n<p>　　玉皇山南基金小镇管委会党组书记袁维民认为，这些高端人才和人才项目的落地，有利于小镇为实体经济的转型升级、创新创业服务。</p>\r\n\n<p>　　<strong>“走出去”少壮派：寻找新技术燎原的星星之火</strong></p>\r\n\n<p>　　基金小镇的规模与集聚效应不仅吸引海外人才“走进来”，也触发浙江投资机构裹挟雄厚民间资本“走出去”，去国际市场寻找新技术、新模式等，为浙江经济的转型升级储备新动能。</p>\r\n\n<p>　　在“走出去”方面，浙江赛伯乐投资管理有限公司不得不提。该公司起源于美国硅谷，是首批入驻基金小镇的金融企业，其是一家专注于服务中早期科技创新和模式创新的创业投资基金管理公司。基金管理规模超过100亿元。</p>\r\n\n<p>　　据赛伯乐总裁、创始合伙人陈斌介绍，该公司实施“G10国际化战略”，即赛伯乐在美国、德国、以色列和日本等10个国家，选择如纽约的金融、波士顿的医疗生物等国际化产业集聚高地城市建立基金对接点，通过投资锁定海外人才项目。在国内，赛伯乐和杭州市、宁波市和绍兴市等地方政府的产业引导基金合作，引导海外优质人才项目落户中国。</p>\r\n\n<p>　　如赛伯乐在硅谷投资了生捷项目，该项目主要围绕高清晰第三代生物芯片展开，科学家利用唾液和血液进行DNA测序，获得高清晰、低成本的超长基因测序，这种技术可用来预测、治疗人体疾病或者弥补、修正基因缺陷。今年，陈斌和团队将此精准医疗项目引进了中国，并在杭州落地。</p>\r\n\n<p>　　11月2日，陈斌和团队刚刚签下一个项目，他兴奋不已。“我在美国看到一个膨胀机余热发电项目，这种技术最早应用于美国潜艇发电系统中，其发电的过程中几乎没什么损耗。”陈斌说。目前，赛伯乐已与膨胀机余热发电项目完成签约，注资支持研发转化，并着手将此项目引进浙江拟组建合资公司。</p>\r\n\n<p>　　据赛伯乐硅谷合伙人薛宏介绍，在过去的两年半中，赛伯乐光在硅谷就投了30多个项目，涉及大数据、云计算、网络安全、金融科技和精准医疗等。</p>\r\n\n<p>　　在海外市场，凯泰资本也大展身手。在凯泰资本首席合伙人徐永红看来，伟大中国梦，没有能力走出去，终究是一个梦。</p>\r\n\n<p>　　据介绍，该公司沿着技术创新和消费升级两方面进行投资，在技术创新方面重点关注生物医疗和生物农业，组建了美国团队。据徐永红介绍，该公司今年已投了10个早期团队，此后计划每年投资10-15个团队，并连续投三年。“我们认为，本次经济危机自2016年进入萧条期，萧条期将持续到2026—2027年。引领我们走出本次经济危机的技术创新就是生物技术。”他说。</p>\r\n\n<p>　　这种预判，在基金小镇“走出去”的企业中基本达成了共识。浙江赛领岳佑投资管理有限公司，用6500万美金，购买了一家制作心脏瓣膜医疗器械的美公司部分股权，将其技术和产品引到中国。</p>\r\n\n<p>　　“海外并购是一个趋势。”浙江赛领岳佑投资管理有限公司总经理何前说。</p>\r\n\n<p>　　杭州绩优投资管理有限公司(绩优资本)创始合伙人胡敏翔认为：“资本是逐利的，目前国际上一些标的价格比国内还低，这诱发国内投资机构关注海外市场。”</p>\r\n\n<p>　　据悉，该公司在杭州乃至中国，投资新技术、大数据、大健康和互联网金融等方面的同时，也受小镇国际化氛围的感染，正在酝酿将投资范围扩大到海外。</p>\r\n\n<p>　　“浙江的基金如果在全世界都有投入，这意味着全球项目、人才，在早期的时候，浙江的资本就能进入。那么，中国人就站在整个产业链高端，让中国的技术、消费和工业4.0与美国、德国和日本实现同步。”陈斌说。</p>\r\n\n<p>　　如其所述，在基金小镇，这些“走出去”的金融机构们，是海外投资中的“少壮派”，它们已点燃新技术燎原的星星之火。</p>\r\n\n<p>　　<strong>“店小二”般的关怀：政府高效陪跑筑梦未来</strong></p>\r\n\n<p>　　一年多以来，基金小镇从中国蜚声海外，其聚啸的资本惠及浙江实体经济，更在市场的作用下与国际高端人才、高新技术等形成嫁接。而支撑起浙江资本叱咤国际的背后，是各级政府部门“店小二”般贴心的关怀，是政府对企业创新创业给予精准、高效的国际化配套服务。</p>\r\n\n<p>　　“我们的合作方大多是境外优秀对冲基金管理机构或团队，最终吸引他们来基金小镇的是小镇整体的生态氛围和办事效率。如工商方面，基金小镇有专人负责来对接，对于我们公司这样的战略投资人来说，项目公司新设和变更整个流程非常顺畅。”浙江玉皇山南对冲基金投资管理有限公司高级副总裁赵利君说。</p>\r\n\n<p>　　对此，王黎也深有感触，他说：“自从风禾资产去年9月在基金小镇注册以来，经过多次变更和调整。这期间，工商提供了全程通的帮办服务，指导我们具体变更的流程，又快又方便。”</p>\r\n\n<p>　　不仅如此，浙江各级政府对待人才的真诚，让王锋倍感温暖。王锋和他的团队项目，被列为杭州市上城区“1211”人才计划A类项目，获得政府奖励200万元启动资金，今年他们又获得杭州市全球引才“521”计划创新人才项目支持。“这种支持让我们拥有更好的条件，招到更符合要求的人才。”王锋说。</p>\r\n\n<p>　　除了快捷高效的行政服务，在基金小镇工作的国内外金融人才，足不出镇即可享受便捷的国际医疗、国际教育和人才公寓等生活配套设施。</p>\r\n\n<p>　　在国际医疗方面，基金小镇的配套可谓独具创新。</p>\r\n\n<p>　　去年5月，邵逸夫医院杭州玉皇山南基金小镇国际医疗中心落成，它符合JCI标准(全世界公认的医疗服务标准JCI：JointCommissionInternational，代表了医院服务和医院管理的最高水平，也是世界卫生组织认可的认证模式)，通过1名全科医生和几位护士，加远程云诊室链接的全国医疗专家，该中心为基金小镇及附加居民提供了一站式的医疗服务。</p>\r\n\n<p>　　服务项目覆盖了心电图和B超检验室，常见病和多发病等基本医疗服务。医疗中心还通过纳里健康应用，提供远程门诊和员工健康管理等特需医疗服务。持CIgna、aetna等商业保险的外籍患者，就医时可享受商业医疗保险服务。</p>\r\n\n<p>　　前不久，在小镇工作的一基金公司副总裁，在体检结果中发现肝功能异常，基金小镇国际医疗中心全科医生陈建华建议他注意饮食，适当休息。一个月后，这位患者在此中心复查后，指标依然偏高。陈建华帮助患者成功预约了邵逸夫医院消化内科的专家，并通过纳里健康的医生端，在医疗中心的远程云诊室，完成了远程就诊。</p>\r\n\n<p>　　从进入云诊室到开出临床医嘱和健康处方，整个看病过程只用了20分钟。</p>\r\n\n<p>　　“中心面还向基金小镇，提供医疗宣讲服务。”陈建华说。他利用中午时间深入各企业，进行健康保健知识宣讲等。</p>\r\n\n<p>　　在国际教育上，基金小镇的配套也便捷了小镇的创客们和员工们。</p>\r\n\n<p>　　徐永红就体会到了这份实实在在的方便，他的孩子在娃哈哈双语学校就读，而娃哈哈双语学校和娃哈哈外籍子女学校都在基金小镇范围内，距离徐永红的公司约十五分钟车程。“希望通过国际化的教育，培养孩子的创新精神。”徐永红说。</p>\r\n\n<p>　　据娃哈哈双语学校校长、四年级数学老师罗永军介绍，如今娃哈哈双语学校共有学生330人，娃哈哈外籍人员子女学校有学生约50人。两校共有来自美国、英国、澳洲、爱尔兰、加拿大和印度等国，共计30位外籍教师。国际化的教学氛围，带来了多元的文化。两所学校的总校长Bruce认为：“多元的文化将尊重、理解和包容这些美好的品德，注入孩子内心。”</p>\r\n\n<p>　　为了让来自海内外的人才生活更便利，基金小镇周边也规划了相应的高端住宅、精品公寓项目作为配套，为了方便国际人才出入境，基金小镇内设有出入境服务站。</p>\r\n\n<p>　　“这些配套让小镇将更具国际化、更有包容度。”杭州市上城区委书记缪承潮说。</p>\r\n\n<p>　　此外，基金小镇还在上下产业链服务上动足脑筋。如从2015年开始，上城区政府携手浙江省金融产业促进会等，举办全球私募基金西湖峰会，为新金融发展提供专业化、精品化和国际化的高端对话平台，引全球智力聚焦基金小镇，探讨行业发展热点、难点，研讨未来发展方向等。</p>\r\n\n<p>　　当下，基金小镇以人才和资本的力量，架起了中国通向世界的桥梁。面对未来，从基金小镇布局往全球的新技术、新模式，蓬勃发展之时，其带动经济转型升级成效至几何令人期待。(完)</p>  \r\n\n      </div></div>",
        "status": 0,
        "url": "http://www.chinanews.com/cj/2016/11-09/8057906.shtml"
      }
    };

    export default {
        name: 'share',
        data(){
            return {
                domPageData : "",//php 输出在页面的 decodeURIComponent 的data数据
                testType : testType,//是为测试（显示测试数据）
                uA: uA,
                hideDownloadBar: false,//是都隐藏 下载条 和相关新闻
                //页面等待动画
                loading:{
                  show: true,
                  position:{
                    "margin-top":"100px"
                  }
                },
                pageData:{}// 已decodeURIComponent 的data数据
            }
        },
        components: {
            NewsArea,
            CommentList,
            NewsDownloadBar,
            RelatedNews,
            LoadingCenter
        },
      mounted(){
        var self = this;
        self.domPageData = document.getElementById("pageDataCont").innerHTML;
        var setPageData = function(d){
          if(typeof d == "string"){
            var data = JSON.parse(d);
          }
          else{
            var data = d;
          }
          //console.log(data);
          for(var i=0; i<data.related.length; i++){
            switch (data.related[i].images.length){
              case 0 :
                data.related[i].type = "NewsWord";
                break;
              case 1 :
                data.related[i].type = "NewsWordImgRight";
                break;
              case 3 :
                data.related[i].type = "NewsWordImgThree";
                break;
              default :
                data.related[i].type = "NewsWord";
            }
          }
          self.$data.pageData = data;
          var cla = data.langStyle==1 ? " " : " arab";
          document.body.className = document.body.className + cla
          self.$data.loading.show = false;
        }
        var myTimer = setInterval(function(){
          if((/^[ ]*$/g.test(self.domPageData) ||
            self.domPageData == '<?php echo rawurlencode(json_encode($detail)); ?>') ||
            !testType){
            //console.log("php数据 未渲染");
            self.domPageData = document.getElementById("pageDataCont").innerHTML;
            const fromHtml =  document.getElementById("from").innerHTML.replace(/^[ ]+/g,"").replace(/[ ]+$/g,"");
            self.hideDownloadBar = false;
            if(fromHtml=="detail"){
              //此时不显示 相关新闻和下载引导条
              self.hideDownloadBar = true;
            }
          }
          else{
            clearInterval(myTimer);
            var pageData = null;
            if(testType){
              pageData = testData;
            }
            else{
              pageData = decodeURIComponent(self.domPageData);
            }
            pageData && setPageData(pageData);

          }
        },50);

      }
    }

</script>
<style lang="less" src='assets/css/index.less'></style>
