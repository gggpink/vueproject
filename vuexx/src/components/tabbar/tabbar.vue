<template>
  <div id="tabbar">
      <slot></slot>
      
  </div>
</template>

<script>

export default {

}
</script>

<style>
#tabbar{
    height: 49px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 5px #ccc;
  background: #f5f5f5;
  padding-top: 4px;
}
</style>