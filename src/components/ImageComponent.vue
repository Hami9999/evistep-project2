<template>
    <img class="" v-if="url" :src="imgUrlFunction(url)" :class="currentClass" :alt="url">
</template>

<script>



export default {
  name: "ImageComponent",
  props: {
    url: {
      type: String,
      default: ''
    },
    currentClass: {
      type: String,
      default: 'dropdown-option-image'
    }
  },
  data () {
    return {}
  },

  methods: {
    imgUrlFunction(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    }
  },
}

</script>
<style scoped>

</style>