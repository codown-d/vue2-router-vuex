<template>
  <div>
    <p class = "footer">
      <router-link to="/home">tab1</router-link>
      <router-link to="/myTask">tab2</router-link>
      <router-link to="/interest">tab3</router-link>
      <router-link to="/personalCenter">tab4</router-link>
    </p>
  </div>
</template>
<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  display: flex;
  width:100%;
  height: 60px;
  -webkit-flex-direction: row;
}
.footer>a{
  line-height: 58px;
  text-align: center;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0px;
}
</style>
<script>
    export default{
    }
</script>
