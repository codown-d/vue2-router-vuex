import Vue from 'vue'
Vue.directive('preview', {
  acceptStatement: true,
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    // el.innerHTML =
    //   'name: ' + s(binding.name) + '<br>' +
    //   'value: ' + s(binding.value) + '<br>' +
    //   'expression: ' + s(binding.expression) + '<br>' +
    //   'argument: ' + s(binding.arg) + '<br>' +
    //   'modifiers: ' + s(binding.modifiers) + '<br>' +
    //   'vnode keys: ' + Object.keys(vnode).join(', ')
    window.PREVIEW_IMGURLS = s(binding.value)
    console.log(window.PREVIEW_IMGURLS)
  },
  inserted: function (el, binding) {
    // 聚焦元素
    // var s = JSON.stringify
    // console.log(el)
    // console.log(s(binding.value))
  },
  update: function (el, snewValue, oldValue) {
    console.log(el)
  },
  componentUpdated: function (el, binding) {
    var s = JSON.stringify
    console.log(s(binding.value))
  },
  unbind: function () {

  }
})

