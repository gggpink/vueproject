<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
     <tabbaritem path="/Home">
         <img src="./assets/imgs/tabbar/2.png" alt="" slot="itemicon">
         <img src="./assets/imgs/tabbar/1.png" alt="" slot="itemicon_active">
       <div slot="itemtitle">首页</div>
     </tabbaritem>
     <tabbaritem path="/DetailsPage">
         <img src="./assets/imgs/tabbar/4.png" alt="" slot="itemicon">
         <img src="./assets/imgs/tabbar/3.png" alt="" slot="itemicon_active">
       <div slot="itemtitle">拼团</div>
     </tabbaritem>
     <tabbaritem path="/shopping">
         <img src="./assets/imgs/tabbar/8.png" alt="" slot="itemicon">
         <img src="./assets/imgs/tabbar/7.png" alt="" slot="itemicon_active">
       <div slot="itemtitle">购物车</div>
     </tabbaritem>
     <tabbaritem path="/me">
         <img src="./assets/imgs/tabbar/6.png" alt="" slot="itemicon">
         <img src="./assets/imgs/tabbar/5.png" alt="" slot="itemicon_active">
       <div slot="itemtitle">我的</div>
     </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
require("./assets/css/base.css")
import tabbar from "./components/tabbar/tabbar"
import tabbaritem from "./components/tabbar/tabbaritem"


export default {
  
  components:{
    tabbar,
    tabbaritem
  }
}
</script>
<style>



</style>
