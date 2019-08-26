<template>
  <div>
      <div class="flex">
          <div class="flex_it">
              <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70" alt="">
              <p>海外直供</p>
          </div>
          <div class="flex_it">
              <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70" alt="">
              <p>原装正品</p>
          </div>
          <div class="flex_it">
              <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" alt="">
              <p>极速到货</p>
          </div>
          <div class="flex_it">
              <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70" alt="">
              <p>轻松退货</p>
          </div>
      </div>
    <div v-for="(item,index) in list" :key="index" class="js">
      <div class="js_imga"><img :src="item.src" alt=""></div>
      <div class="js_float">
          <div class="js_text">
          <div>{{item.texta}}</div>
      <div class="js_textb">{{item.textb}}</div>
      </div>
      <div class="js_imgb"><img :src="item.srcb" alt=""></div>
      </div>

    </div>
  </div>
</template>

<script>
import { request } from "../../../../network/request";
export default {
  data() {
    return {
      list: null
    };
  },
  created() {
    request(
      {
        url: "famous"
      },
      res => {
        this.list = res.data;
        // console.log(res)
      },
      err => {
        // console.log(err)
      }
    );
  }
};
</script>

<style>
.flex{
    display: flex;
    text-align: center;
    padding: 20px 0px;
    border-bottom:5px solid #eee;
}
.flex_it{
    flex: 1;
}
.js_imga img{
    width: 414px;
    height: 191.5px;
}
.js_float{
    padding: 10px;
}
.js_text{
    float: left;
}
.js_textb{
    padding-top: 8px;
    font-size: 12px;
    color: #999;
}
.js_imgb{
    float: right;
}
.js_imgb img{
    width: 120px;
    height: 60px;
}
</style>