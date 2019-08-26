<template>
  <div id="tabbartabbarc">
    <mt-navbar class="page-part" v-model="selected">
  <mt-tab-item id="1">xxx_上新</mt-tab-item>
  <mt-tab-item id="2">xxx_即将上新</mt-tab-item>

</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <navbarac/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <navbarbc/>
  </mt-tab-container-item>
  
</mt-tab-container>
  </div>
</template>

<script>
import navbarac from './tabbarone/navbarac'
import navbarbc from './tabbarone/navbarbc'

export default {
  data() {
    return {
      selected: "1"
    };
  },
  components:{
navbarac,
navbarbc
  }
};
</script>

<style>
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: 3px solid red;
    color: red;
    margin-bottom: -3px;
}
</style>