<template>
  <div class="hello">
    <div id = "start">
      <v-header msg="首页">
        <router-link slot="right" to="/signout" v-if="mapState">退出</router-link>
      </v-header>
      <div class="login-msg">
        <router-link to="/login" v-if="!mapState">
          <h2>login</h2>
        </router-link>
      </div>
      <div class="login-msg" v-if="mapState">
        <h2>hello{{mapState}}</h2>
        <router-link to="/home">
          <h1>Go Home</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    mapState(){
      return this.$store.state.cart.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    margin-bottom: 30px;
  }
  .login-msg{
    margin-top: 100px;
    text-align: center;
  }
  a{
    text-decoration:none;
  }
</style>
