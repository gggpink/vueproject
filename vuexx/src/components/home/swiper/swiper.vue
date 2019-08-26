<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://p0.jmstatic.com//jmstore/image/000/007/7005_std/5d5e628c35688_535_212.jpg?1566544700" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://p0.jmstatic.com//jmstore/image/000/006/6845_std/5d5cbe361dfe0_535_212.jpg?1566550041" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://p0.jmstatic.com//jmstore/image/000/002/2031_std/5d5e4badafac7_535_212.jpg?1566467131" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://p0.jmstatic.com//jmstore/image/000/006/6845_std/5d5cf3d285e2e_535_212.jpg?1566457437" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://p0.jmstatic.com//jmstore/image/000/007/7139_std/5d5ca1b808a86_535_212.jpg?1566551381" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.mint-swipe-items-wrap,
.mint-swipe {
    background-color:#d9d9d9;
  width: 100%;
  height: 200px;
  text-align: center;
}

img {
  width: 100%;
  height: 190px;
  margin-top: 10px;
}
</style>