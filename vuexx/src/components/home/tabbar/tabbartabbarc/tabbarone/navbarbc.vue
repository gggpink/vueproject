<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="piece">
      <div class="piece_img" style="padding:10px;">
        <img :src="item.src" alt />
      </div>
      <div class="piece_text">
        <p style="font-size:13px;">{{item.p}}</p>
        <p style="font-size:20px;color:red;margin-top:10px;">{{item.price}}</p>
        <p style="height:28px;"></p>
        <p style="font-size:14px;color:#999;float:left;padding:4px;">{{item.group}}</p>
        <p style="color:#fff;font-size:15px;float:right;background: red;border-radius: 10px;padding:5px 10px;">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../../../../network/request";
export default {
  data() {
    return {
      list: null
    };
  },
  created() {
    request(
      {
        url: "xiaqi"
      },
      res => {
        this.list = res.array11;
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
.piece {
  display: flex;
}
.piece_img img {
  width: 150px;
  height: 130px;
}
.piece_text {
  margin-top: 12px;
  padding-right: 16px;
}
</style>