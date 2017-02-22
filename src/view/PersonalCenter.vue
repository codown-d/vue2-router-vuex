<template>
    <div class="app appPC">
        <v-header msg="tab4">
            <router-link slot="left" to="/home">home</router-link>
        </v-header>
      <div class= "bg" >this is empty body</div>
      <img src = "../assets/logo.png">
      <zh-footer></zh-footer>
    </div>
</template>
<style scoped lang="scss">
  .appPC {
      height:100%;
    .bg{
        /*background: url("../assets/flow-cover.png")*/
    };
    img{
      width: 40px;
    }
  }
</style>
<script>
  import Footer from '../components/Footer'
  import Header from '../components/Header'
  export default{
    components: {
      'zh-footer': Footer,
      'zh-header': Header
    }
  }
</script>
