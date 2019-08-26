<template>
  <div class="tabbaritem" @click="tiao">
    <div v-if="!isActive">
      <slot name="itemicon"></slot>
    </div>
    <div v-else>
      <slot name="itemicon_active"></slot>
    </div>
    <div :class="{active:isActive}" :style="{color:isActive?active:''}">
      <slot name="itemtitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:{
    path: {
      type: String,
      default: "/home"
    },
    active: {
      type: String,
      default: "#FE4070"
    }
  },
  data() {
    return {};
  },
  methods:{
      tiao(){
          
          this.$router.push(this.path)
      }
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.path)!=-1
      }
  },
};
</script>

<style>
.tabbaritem img {
  width: 28px;
  height: 28px;
}
.tabbaritem {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
</style>