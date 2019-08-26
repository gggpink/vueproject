<template>
 <div id="app">
    <div class="head">
       <div><img src="http://p0.jmstatic.com/mobile/touch/Image/app/guide_logo.png" alt=""></div>
       <div>聚美优品.我为我自己代言</div>
       <div class="borderr">前往聚美</div>
       <a class="h_img">x</a>
       </div>
 </div>
</template>

<script>
export default {
//     data(){
//       return{
//         hidden:'',
//       }
//     },
//     methods: {
//       hidden(){
//         this.head.splice()
//       }
//     },
}
</script>

<style>
.head{
    width:375px;
    height: 70px;
    background: #000 url("https://images.jumei.com/mobile/icon/bg_01.png") center center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
}
.head img{
    width: 70px;
    height: 70px;
    padding: 12px;
}
.borderr{
  margin-top: 14px;
  line-height: 40px;
  width: 90px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  background: #FE4070;
  padding: 0px 6px;
  border-radius: 20px;
  color: #fff;
}

.h_img{
  width: 16px;
  height: 16px;
  line-height: 14px;
  text-align: center;
  background: #fff;
  color:#999;
  border-radius: 50%;

}
</style>