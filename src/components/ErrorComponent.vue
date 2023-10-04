
<template>
  <div class="w-80 m-auto h-24 rounded-xl bg-[#FFF5F2] mt-6" v-if="show">
    <div class="flex w-full m-2.5">
      <ButtonComponent :isIcon="true" :iconSrc="error.errorImg"  @clickBtn="hideComponent" />
      <p class="text-base font-bold text-red-600 ml-1">{{error.errorTitle}}</p>

    </div>
    <div class="w-full">
      <p class="text-sm font-medium text-[#637282]">{{error.errorDesc}}</p>
    </div>
  </div>
</template>


<script>

import ButtonComponent from "../Buttons/ButtonComponent.vue";

export default {
  name: "ErrorComponent",
  components: { ButtonComponent },

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      error: {
        errorImg: 'Group.png',
        errorTitle: 'Error',
        errorDesc: 'There was a problem connecting the wallet to the NFTer, try again.'
      },
      button: {
        buttonName: 'Connect Wallet',
      },
    }
  },
  methods: {
    hideComponent() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>