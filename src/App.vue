<template>
  <div id="app">
    <transition  name="custom-classes-transition"
                 enter-active-class="animated fadeInLeft"
                 leave-active-class="animated fadeOutLeft"
                 mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
body,html,#app{
  width: 100%;
  height:100%;
}
a{
  text-decoration: none;
}
</style>
