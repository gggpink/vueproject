<template>
  <div id="app">
     <search/>
     <swiper/>
     <Navbar/>
    
    
  </div>
</template>

<script>
import search from "../../components/home/search/search"
import swiper from "../../components/home/swiper/swiper"
import Navbar from "../../components/home/tabbar/Navbar"

export default {
  name:'app',
  components: {
     search,
     swiper,
     Navbar
  }
}
</script>
<style>