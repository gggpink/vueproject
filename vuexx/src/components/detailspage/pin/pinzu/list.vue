<template>
  <div id="div">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">女装</mt-tab-item>
      <mt-tab-item id="3">名人场</mt-tab-item>
      <mt-tab-item id="4">鞋类</mt-tab-item>
      <mt-tab-item id="5">下期预告</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="(item,index) in list" :key="index" class="piece">
      <div class="piece_img">
        <img :src="item.src" alt />
      </div>
      <div class="piece_text">
        <p style="font-size:13px;">{{item.namea}}</p>
        <p style="height:50px;"></p>
        <p style="color:red;font-size:20px;">{{item.nameb}}</p>
        <p style="font-size:15px;color:#999;text-decoration:line-through;">{{item.namec}}</p>
      </div>
      
    </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="(item,index) in listt" :key="index">
          <div style="bzckground:#000;border-bottom:8px solid #f5f5f5;height:270px;">
            <div style="background:#fff;">
              <div style="position:relative">
                <div
                  style="width:62.7px;height:14px;padding:4px 7px;font-size:11px;color:#666;border:1.17px solid #eee;border-top-right-radius:15px;border-bottom-right-radius:15px;background:rgba(251,251,251,0.8);position:absolute;top:110px;"
                >{{item.title}}</div>
                <div style="display:flex;justify-content:center">
                  <a href url>
                    <img :src="item.src" style="width:150px;height:150px;" />
                  </a>
                </div>
              </div>
              <div>
                <div
                  style="font-size:14px;max-height:34px;line-height:18px;padding:0px 12px; margin-top:10px;"
                >
                  <span style="margin-left:2px;color:#fe4070">{{item.text}}</span>
                  {{item.p}}
                </div>
              </div>
              <div style="padding:12px;">
                <div style="float:left;width:64.2px;height:36rpx; ">
                  <span style="font-size:18px;color:#fe4070 ;display:inline-block">{{item.price}}</span>
                  <span style="color:#999;display:block;font-size:11px;">{{item.single}}</span>
                </div>
                <button
                  style="width:87.9px;height:26px;span-align:center;border-radius:25px;float:right;border:1.7px solid #fe4070;margin-top:4.7px;color:#fff;background:#fe4070;font-size:14px;line-height:26px;"
                  :id="item.id"
                >{{item.group}}</button>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <div v-for="(item,index) in listtt" :key="index" class="js">
      <div class="js_imga"><img :src="item.src" alt=""></div>
      <div class="js_float">
          <div class="js_text">
          <div>{{item.texta}}</div>
      <div class="js_textb">{{item.textb}}</div>
      </div>
      <div class="js_imgb"><img :src="item.srcb" alt=""></div>
      </div>
    </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="4">
        <div v-for="(item,index) in listttt" :key="index">
          <div style="bzckground:#000;border-bottom:8px solid #f5f5f5;height:270px;">
            <div style="background:#fff;">
              <div style="position:relative">
                <div
                  style="width:62.7px;height:14px;padding:4px 7px;font-size:11px;color:#666;border:1.17px solid #eee;border-top-right-radius:15px;border-bottom-right-radius:15px;background:rgba(251,251,251,0.8);position:absolute;top:110px;"
                >{{item.title}}</div>
                <div style="display:flex;justify-content:center">
                  <a href url>
                    <img :src="item.src" style="width:150px;height:150px;" />
                  </a>
                </div>
              </div>
              <div>
                <div
                  style="font-size:14px;max-height:34px;line-height:18px;padding:0px 12px; margin-top:10px;"
                >
                  <span style="margin-left:2px;color:#fe4070">{{item.text}}</span>
                  {{item.p}}
                </div>
              </div>
              <div style="padding:12px;">
                <div style="float:left;width:64.2px;height:36rpx; ">
                  <span style="font-size:18px;color:#fe4070 ;display:inline-block">{{item.price}}</span>
                  <span style="color:#999;display:block;font-size:11px;">{{item.single}}</span>
                </div>
                <button
                  style="width:87.9px;height:26px;span-align:center;border-radius:25px;float:right;border:1.7px solid #fe4070;margin-top:4.7px;color:#fff;background:#fe4070;font-size:14px;line-height:26px;"
                  :id="item.id"
                >{{item.group}}</button>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="5">
        <div v-for="(item,index) in listtttt" :key="index">
          <div style="bzckground:#000;border-bottom:8px solid #f5f5f5;height:270px;">
            <div style="background:#fff;">
              <div style="position:relative">
                <div
                  style="width:66px;height:20px;line-height:6px;padding:6px 10px;font-size:11px;color:#666;border:1.17px solid #eee;border-top-right-radius:15px;border-bottom-right-radius:15px;background:rgba(251,251,251,0.8);position:absolute;top:84px;"
                >{{item.title}}</div>
                <div style="display:flex;justify-content:center">
                  <a href url>
                    <img :src="item.src" style="width:150px;height:150px;" />
                  </a>
                </div>
              </div>
              <div>
                <div
                  style="font-size:14px;max-height:34px;line-height:18px;padding:0px 12px; margin-top:10px;"
                >
                  <span style="margin-left:2px;color:#fe4070">{{item.text}}</span>
                  {{item.p}}
                </div>
              </div>
              <div style="padding:12px;">
                <div style="float:left;width:64.2px;height:36rpx; ">
                  <span style="font-size:18px;color:#fe4070 ;display:inline-block">{{item.price}}</span>
                  <span style="color:#999;display:block;font-size:11px;">{{item.single}}</span>
                </div>
                <button
                  style="width:87.9px;height:26px;span-align:center;border-radius:25px;float:right;border:1.7px solid #fe4070;margin-top:4.7px;color:#fff;background:#fe4070;font-size:14px;line-height:26px;"
                  :id="item.id"
                >{{item.group}}</button>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { request } from "../../../../network/request";
export default {
  data() {
    return {
      selected: "1",
      list: [],
      listt: [],
      listtt: [],
      listttt: [],
      listtttt: []
    };
  },
  created() {
    request(
      { url: "shoes" },
      res => {
        this.list = res.array13;
        this.listt = res.array9;
        this.listtt = res.array12;
        this.listttt = res.array10;
        this.listtttt = res.array11;
        console.log(res.array11);
      },
      err => {
        console.log(err);
      }
    );
  }
};
</script>

<style>
#div {
  height: 100%;
}

.mint-tab-item-label {
  font-size: 16px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 4px solid #fe4070;
  color: #fe4070;
}
.piece{
  display: flex;
  
}
.piece_img img{
  width: 150px;
  height: 130px;
  margin-top: 10px;
}
.piece_text{
  margin-top: 12px;
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