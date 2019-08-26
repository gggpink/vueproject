<template>
  <div id="search">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:"聚美搜索框"
    }
  }
};
</script>

<style>
#search{
  height: 40px;
}
.mint-searchbar-inner{
  border-radius: 20px;
}
</style>