<template>
  <div id="Navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">xxx_Left</mt-tab-item>
      <mt-tab-item id="2">xxx_Center</mt-tab-item>
      <mt-tab-item id="3">xxx_Right</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <img
          src="http://mp5.jmstatic.com/mobile/card_material/item_0_2048_847-ipad2048_5d5b5ca2886cf.gif?t=1566268578&imageView2/2/w/640/q/90"
          alt
          class="imgbig"
        />
        <tabbartabbar />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <tabbartabbarb />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <tabbartabbarc />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import tabbartabbar from "../tabbar/tabbartabbar/tabbartabbar";
import tabbartabbarb from "../tabbar/tabbartabbarb/tabbartabbarb";
import tabbartabbarc from "../tabbar/tabbartabbarc/tabbartabbarc";


export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    tabbartabbar,
    tabbartabbarb,
    tabbartabbarc

  }
};
</script>

<style>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid red;
  color: red;
  margin-bottom: -3px;
}
.imgbig {
  width: 100%;
  height: 161px;
  border-bottom: 5px solid #f5f5f5;
  box-shadow: 0px 0px 5px #ccc;
}
</style>