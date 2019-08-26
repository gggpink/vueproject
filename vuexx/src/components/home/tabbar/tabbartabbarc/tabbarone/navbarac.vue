<template>
  <div>
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
        url: "shuju"
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
</style>