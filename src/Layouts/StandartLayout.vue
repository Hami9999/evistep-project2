<template>
  <HeaderComponent />
  <slot />

</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";

export default {
  name: 'Layout',
  components: {
    HeaderComponent,
  }
}
</script>