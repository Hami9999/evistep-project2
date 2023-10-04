
<template>
  <button @click="click" :class="[ term ?? '' ]">
    <template v-if="isIcon">
      <ImageComponent :url="iconSrc" current-class="welcome_img"/>
    </template>
    <template v-if="button?.buttonName">
      {{ button?.buttonName }}
    </template>
  </button>
</template>
<script>

import ImageComponent from "../components/ImageComponent.vue";
export default {
  name: "ButtonComponent",
  components: {ImageComponent},
  props: {
    button: {
      type: Object,
      default: () => {}
    },
    term: {
      type: String,
      default: ''
    },
    isIcon: {
      type: Boolean,
      default: true
    },
    iconSrc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    click() {
      this.$emit('clickBtn')
    }
  }
}
</script>

<style scoped>






</style>