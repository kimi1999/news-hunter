<template>
    <div class="ui-page-padding ui-hunter-detail-title" v-bind:class="{gray:gray,green:green}">
        {{txt}}
    </div>
</template>



<style lang="less" scoped>
    /* 新闻详情页 标题 */
    .ui-hunter-detail-title {
        position: relative;
        margin-top: 20px;
        font-size: 25px;
        font-weight: bolder;
        line-height: 30px;
        &:before {
            content: "";
            height: 25px;
            width: 6px;
            position: absolute;
            left: 0;
            top: 2px;
            background-color: red;
        }
        &.gray {
            //color: #EBEFF1;
            color: #d7d8d8;
            &:before {
                display: none;
            }
        }
    }
    .green:before{
      background-color: #00bb94;
    }
</style>

<script>
    export default{
        props: ["txt", "gray"],
        data(){
            return {
              green:false
            }
        },
        mounted(){
          var urlParams = urlParamToObj(window.location.href);
          if(urlParams.pid==4){
            this.green = true;
          }
        }
    }

    /**
     * 6. 将URL后面的参数转换成一个对象
     *     url : url地址
     */
    function urlParamToObj(url){
      var reg_url =/^[^\?]+\?([\w\W]+)$/,
        reg_para=/([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
        arr_url = reg_url.exec( url ),
        ret = {};
      if( arr_url && arr_url[1] ){
        var str_para = arr_url[1],result;
        while((result = reg_para.exec(str_para)) != null){
          ret[result[1]] = result[2];
        }
      }
      return ret;
    }

</script>
