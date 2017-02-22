// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import components from './components/' //加载公共组件
require('directive/preview');
/* eslint-disable no-new */

Object.keys(components).forEach((key) => {
  // console.log(key)
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
