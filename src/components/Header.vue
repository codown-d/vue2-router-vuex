<template>
    <header class="header">
        <div class="item left">
            <slot name="left"></slot>
        </div>
        <div class="title">{{msg}}</div>
        <div class="item right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
<style scoped>
  .header {
      position: relative;
      line-height: 48px;
      color: #000;
      text-align: center;
      background: #ddd;
  }
  .title{
      font-size:20px;
  }
  .item {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;

  }
  a {
       color: #fff;
   }
  .left {
      left: 10px;
  }
  .right {
      right: 10px;
  }
</style>
<script>
    export default{
      props: ['msg']
    }
</script>
