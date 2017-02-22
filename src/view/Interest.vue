<template>
  <div class="app appI">
    <v-header msg = "tab2"></v-header>
    <zh-preview :current = "current" :flag.sync = 'flag' v-on:child-tell-me-something="listenToMyBoy"></zh-preview>
    <div class = "preview" v-preview="imgs">
      <img v-for="(img,index) in imgs"  :src="img" @click="clicked(index)">
    </div>
    <zh-footer></zh-footer>
  </div>
</template>
<style scoped lang="scss">
  .appI {
    height:100%;
    .preview{
      img{
        width: 100%;
      }
    }
  }
</style>
<script>
  import Footer from '../components/Footer'
  import Preview from '../components/Preview'
  export default{
    data () {
      return {
        current: 0,
        flag: false,
        txt: '123',
        imgs: [
          'http://covteam.u.qiniudn.com/ka2.jpg',
          'http://covteam.u.qiniudn.com/poster.png',
          'http://covteam.u.qiniudn.com/ka2.jpg'
        ]
      }
    },
    events: {
    },
    methods: {
      clicked (index) {
        this.current = index
        this.flag = true
      },
      listenToMyBoy (msg) {
        this.flag = false
      }
    },
    components: {
      'zh-footer': Footer,
      'zh-preview': Preview
    }
  }
</script>
