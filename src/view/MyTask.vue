<template>
  <div class="app appMT">
    <v-header msg="tab3">
      <router-link slot="right" to="/">login</router-link>
    </v-header>
    <div class="parent">
      <router-link to="/myTask">tabParent</router-link>
      <router-link to="/myTask/TaskDoing">tabChildren</router-link>
      <router-link to="/myTask/TaskEnding">tabChildren</router-link>
      <div class = "content">
        <transition :name="transitionName">
          <router-view class="child-view"></router-view>
        </transition>
      </div>
    </div>
    <zh-footer></zh-footer>
  </div>
</template>
<style scoped lang = "scss">
  .appMT {
      height:100%;
    .parent{
      overflow: hidden;
      a{
        display: inline-block;
        padding: 20px 10px;
      }
    }
    .content{
      overflow: hidden;
    }
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
<script>
  import Footer from '../components/Footer'
  export default{
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    // dynamically set transition based on route change
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    components: {
      'zh-footer': Footer,
    }
  }
</script>
