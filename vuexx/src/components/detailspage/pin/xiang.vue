<template>
  <div>
    <div class="box" v-for="(item,index) in list" :key="index">
      <div class="imgs">
        <img :src="item.img1" class="imga" />
      </div>
      <div class="detail-words">
        <div class="dw">
          <span class="dw-numa">{{item.p}}</span>
          <span class="dw-w">{{item.text}}</span>
          <span class="dw-numb">{{item.text}}</span>
        </div>
        <div class="dw-buy">{{item.text}}</div>
      </div>
      <div class="two-w"></div>
      <div class="Countdown">
        {{item.p2}}3件
        <span>{{item.text5}}</span>
      </div>
      <div class="goods-msg">
        <span class="goods-num">{{item.text6}}</span>
        {{item.p3}}
      </div>

      <div class="wx-fuwu">
        <div class="jm-fuwu">
          <div class="fwh-icon"></div>
          <div>
            <div class="fwh-title">{{item.text7}}</div>
            <div class="fwh-words">{{item.text8}}</div>
          </div>
        </div>
        <div class="jm-fllow">
          <div class="fwh-btn">{{item.text9}}</div>
          <div class="fwh-fllow">{{item.text10}}</div>
        </div>
      </div>
      <div class="conment-title color3 fs14">{{item.p5}}</div>
      <div class="conment-item bd-top pr">
        <img class="customer-img fl" :src="item.img3" />
        <div class="conment-msg f14">
          <div class="m6">
            <span class="fs10 color9 block fr"></span>
            {{item.p6}}
            <span class="user-vip"></span>
            <span class="fs11 color9 block c-msg ellipsis">{{item.text15}}</span>
          </div>
          <div class="color6 fs14 words">{{item.text16}}</div>
          <div class="time-box-hidden">
            <span class="fs11 color9 block">{{item.text17}}</span>
            <span class="fs11 color9 block">{{item.text18}}</span>
          </div>
          <div class="conment-img-list pr">
            <img class="fl" :src="item.img4[1]" />
            <img class="fl" :src="item.img4[0]" />
            <img class="fl" :src="item.img4[2]" />
          </div>
        </div>
        <div class="conment-praise fs12 color9"></div>
      </div>

      <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">图文详情</mt-tab-item>
      <mt-tab-item id="2">商品参数</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="swiper_con s-a">
            <img
              src="http://images2.jumei.com/brand_authorization/11305/authorization_11305_global_1.jpg?t=1550745024"
              class="g_1"
            />
            <img src="http://p12.jmstatic.com/html_editor/201904/16/15553809523570.jpg" class="g_2" />
            <img src="http://p12.jmstatic.com/html_editor/201610/26/14774487308518.jpg" class="g_3" />
            <img src="http://p12.jmstatic.com/html_editor/201803/13/15209180463321.jpg" class="g_4" />
            <img src="http://p12.jmstatic.com/html_editor/201610/26/14774487474363.jpg" class="g_5" />
            <img src="http://p12.jmstatic.com/html_editor/201610/26/14774487545945.jpg" class="g_6" />
            <img src="http://p12.jmstatic.com/html_editor/201610/26/14774487702721.jpg" class="g_7" />
            <img src="http://p12.jmstatic.com/html_editor/201803/13/15209180902573.jpg" class="g_8" />
            <img src="http://p12.jmstatic.com/html_editor/201804/23/15244522276282.jpg" class="g_9" />
          </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
         <div class="swiper_con s-b">
            <div class="shop-a">
              <div>商品名称</div>
              <div>品牌</div>
              <div>功效</div>
              <div>生产地区</div>
              <div>适用人群</div>
              <div>保质期限</div>
              <div>特别说明</div>
            </div>
            <div class="shop-b">
              <div>【澳洲直邮】sw护肝片120粒*2</div>
              <div>Swisse</div>
              <div>体内调节</div>
              <div>澳大利亚</div>
              <div>适用于经常熬夜抽烟喝酒应酬人群</div>
              <div>3年</div>
              <div>此产品不能替代药品，产品包装以收到实物为准。</div>
            </div>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>

    </div>
    <div class="footer">
      <div >
        <img
          src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAAAXNSR0IArs4c6QAAAu1JREFUWAntWD1vE0EQ9Z3OdpMIyR0I4QKqpKAIBR22Ay3kB4CM8bdSIYELJEoaC6R0/kayiETFH+AjDnSgIJAQkU2NoIICLBnZZ5v3zJ21Pvm8R3JRmjvpMrszs29eZmZP3lV8//k0Go3lfr9/V1GUq+Px+CyWL1kgfsH2Be+zQCCwlUgk/ljsC6fKQqvFWKvVYrquP4Y6bDHNnYJUG+/NbDb7dq7DHKVjQiQzHA5fIiuIobwB1kPIPQT7LuJWKpUz8LmA9x70a3h1TdMuptPp96Kf3dgRIaNMnwASVlX1QSaTuQ8yYztQ6lutltbpdLZAbBO++8FgcM1J+dRFoKZtMBjcwTjMzDghw3XRaFSH/20MP4DUCvpuk3rZ44gQQK4ZQCzTwsyIAVHOAeaPqAOpDdFmN3ZECGDcTT6Q2bMDstNjzTvagHHOzkfUOyKEBZOtbW1gEchuHAqFvhq2E3Y+on7a1PgPlGq1moa8BYcVyGXR0e0xMvcbmPuI08jlcnWzFSaEsFVPjkajbTjE3A7sBA9kXuG9wQpozEy5XJ6QgZLpLfj9/tfJZPKbCVYqlSaNnM/npxk1bTLJ7d9ut9ncOtb7TX98Sk5h917CvAgO65BPIK9oLBMmMZLBB+x8KpX6aS5yQ0YikREIEWqmX41/+Gmz2Xze6/U+khQSk1IxYM/wKbhN5h+sj9nlN0k35jMiHo//gKJAJXySLNmqMdmlnPccpFQmDoKQ0LRUpl6U8NkFD34aVpnGA29pEfQwY+FzsjRT18OAurXWIyTLpJchL0OyDMjsXg95GZJlQGb3esjLkCwDMrvXQ16GZBmQ2dlDXTrxsChzPiq7ELur4hf/ZwbCL/7IUQWU4ZqxyYXnsoaxoFiv10OyxW7bjZhF4pKLgj8KUvYCch0M5x6l3SZBPJYJMSMY8ih9GnIHlw6Xp5cNUPJszTP2cTw7uCq8zvPZ9PIAZHjpkEKWkhjzNGu97nWbaJc9g1gz1zF/AZ0oLTSYEscdAAAAAElFTkSuQmCC"
        />
        <div>购物车</div>
      </div>
      <button>加入购物车</button>
      <a>立即购买</a>
    </div>
  </div>
</template>

<script>
import { request } from "../../../network/request";
export default {
  data() {
    return {
      selected: '1',
      list: []
    };
  },
  created() {
    request(
      { url: "contentzt" },
      res => {
        this.list = res.data;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<style>
.imga {
  width: 100%;
  height: 375px;
  position: relative;
}

.imgb {
  width: 60px;
  height: 47px;
  position: absolute;
  left: 0px;
  top: 0px;
}

.detail-words {
  display: flex;
  justify-content: space-between;
  padding: 15px 12px 0px 15px;
}

.dw-numa {
  font-size: 23px;
  color: #f33873;
}

.dw-numb {
  margin-left: 5px;
  font-size: 16px;
  color: #666;
}

.dw-w {
  margin-left: 5px;
  font-size: 13px;
  color: #fff;
  border-radius: 6px;
  background: #fe4070;
  padding: 2px 8px;
}

.dw-buy {
  padding-top: 8px;
  font-size: 15px;
  color: #666;
}

.Countdown {
  padding: 5px 15px 10px 15px;
  font-size: 15px;
  color: #000;
  border-bottom: 10px solid #f5f5f5;
}
.Countdown span {
  float: right;
  color: #666;
}

.two-w {
  font-size: 14px;
  color: #333;
  padding: 10px 12px;
}

.goods-msg {
  padding: 12px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  border-bottom: 10px solid #f5f5f5;
}
.goods-num {
  color: #fe4070;
  margin-left: 0.125rem;
  display: inline-block;
  margin-right: 5px;
}

.wx-fuwu {
  border-bottom: 10px solid #f5f5f5;
}
.jm-fuwu {
  padding: 13px 12px;
  display: table;
}
.fwh-icon {
  width: 50px;
  height: 50px;
  background: url(http://a4.jmstatic.com/3917f15b23ae1ca0/logowxffh.png)
    no-repeat;
  background-size: contain;
  display: table-cell;
}
.fwh-title {
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 4px;
}
.fwh-words,
.fwh-fllow {
  font-size: 13px;
  color: #999;
  line-height: 13px;
  margin-left: 10px;
}
.jm-fllow {
  padding: 8px 10px;
  display: table;
}
.fwh-btn {
  width: 65px;
  height: 19px;
  font-size: 11px;
  line-height: 19px;
  color: #fff;
  /* span-align: center; */
  background-color: #fe4070;
  border-radius: 20px;
  display: table- cell;
  margin-right: 10px;
}
.fwh-fllow {
  display: table-cell;
}

.conment-title {
  line-height: 2.34667rem;
  padding-left: 0.64rem;
  padding-right: 0.64rem;
  border-bottom: 2rpx solid #f5f5f5;
}

.conment-item {
  width: 90%;
  margin-right: 0.96rem;
  margin-left: 0.96rem;
  padding-top: 0.64rem;
  padding-bottom: 0.64rem;
}

.customer-img {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
}

.conment-msg {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  line-height: 0.875rem;
  background: #fff;
}
.m6 {
  margin-bottom: 0.75rem;
  margin-left: 2.13333rem;
}
.fs10 {
  font-size: 10px;
}
.block {
  display: block;
}
.fr {
  float: right;
}
.color9 {
  color: #999;
}
.user-vip {
  display: inline-block;
  margin-left: 0.29rem;
  width: 0.64rem;
  height: 0.64rem;
}
.fs11 {
  font-size: 11px;
}
.c-msg {
  margin-top: 0.2rem;
}
.conment-msg > p.color3,
.ellipsis {
  overflow: hidden;
  /* span-overflow: ellipsis; */
}
.words {
  line-height: 1.125rem;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* span-overflow: ellipsis; */
  margin-bottom: 0.375rem;
}
.fs14 {
  font-size: 14px;
}
.color6 {
  color: #666;
}
.time-box-hidden {
  margin-bottom: 0.375rem;
  overflow: hidden;
}
.conment-img-list {
  overflow: hidden;
  margin-top: 0.43rem;
}
.pr {
  position: relative;
}
.conment-img-list > img {
  display: block;
  width: 5.97rem;
  height: 5.97rem;
  margin-right: 0.08rem;
}
.fl {
  float: left;
}

.tab {
  display: inline-block;
  padding: 5px 0;
  margin-left: 30px;
}

.topTabSwiper {
  zoom: 1;
  display: flex;
  justify-content: space-evenly;
}

.topTabSwiper:after {
  content: "";
  clear: both;
  display: block;
}

.tabBorer {
  border-bottom: 1px solid #f00;
  color: #f00;
}

.s-a > div:nth-child(10) img {
  height: 21.5px;
}

.s-b {
  padding: 21px 12px;
  display: flex;
}

.shop-a {
  width: 142px;
  color: #999;
}

.shop-a > div {
  margin-top: 15px;
}

.shop-b > div {
  margin-top: 15px;
}

.footer {
  width: 375px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  /* span-align: center; */
  position: fixed;
  left: 00px;
  bottom: 0px;
  background: #fff;
}
.footer > div:first-child {
  width: 116px;
  /* span-align: center; */
  color: #979797;
  font-size: 10px;
  margin-top: 5px;
}
.footer > div:nth-child(2) {
  line-height: 50px;
  width: 178px;
  /* span-align: center; */
  background: #ffcfdf;
  color: #fe4070;
}
.footer > a:nth-child(3) {
  width: 178px;
  line-height: 50px;
  /* span-align: center; */
  background: #fe4070;
  color: #fff;
}
.footer img {
  width: 25px;
  height: 25px;
}
.g_1 {
  width: 100%;
  height: 530px;
}
.g_2 {
  width: 100%;
  height: 390px;
}
.g_3 {
  width: 100%;
  height: 250px;
}
.g_4 {
  width: 100%;
  height: 260rpx;
}
.g_5 {
  width: 100%;
  height: 265px;
}
.g_6 {
  width: 100%;
  height: 350px;
}
.g_7 {
  width: 100%;
  height: 320px;
}
.g_8 {
  width: 100%;
  height: 350px;
}
.g_9 {
  width: 100%;
  height: 310px;
}
</style>