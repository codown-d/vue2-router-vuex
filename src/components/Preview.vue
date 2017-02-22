<template>
  <div class="rd-preview-wrapper" v-show="flag">
    <div class="rd-preview-close" >
      <i class="ion-close-round rd-preview-close-icon" @click="close">X</i>
    </div>
    <img
      class="rd-preview-img"
      v-if="preview.current.src"
      :style="getPosition"
      :src="preview.current.src"
      :alt="preview.current.title"
    >
    <div class="rd-preview-title">
      {{preview.current.title}}
    </div>
    <div class="rd-preview-nav-left" @click="preAction">
      <span class="ion-ios-arrow-left rd-preview-nav-arrow"></span>
    </div>
    <div class="rd-preview-nav-right" @click="nextAction">
      <span class="ion-ios-arrow-right rd-preview-nav-arrow"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .rd-preview-wrapper {
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    .rd-preview-close {
      position: relative;
      i{
        position: absolute;
        top:20px;
        right: 40px;
      }
    }
  }

</style>
<script>
  export default {
    props: ['current', 'flag'],
    data () {
      return {
        preview: {
          'current': {
            'src': '#',
            'title': 'text'
          }
        }
      }
    },
    computed: {
      getPosition: function () {
      }
    },
    methods: {
      close () {
        this.$emit('child-tell-me-something', 'hi')
      },
      preAction () {
      },
      nextAction () {
      }
    }
  }
</script>
