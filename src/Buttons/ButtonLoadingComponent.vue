<template>
  <button @click="click" :class="[!getUserLoading ? term : newTerm ]">
    <template v-if="!getUserLoading">
      {{ button.buttonName }}
    </template>
    <template v-else>
      <div class="mt-4 flex justify-between w-full text-center">
          <svg class="border-4 border-solid border-[#E2E8F7]  border-t-4 border-t-[#4A5EC4] rounded-full w-6 h-6 animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          </svg>
        <span class="but_conect">Connecting ...</span>
      </div>
    </template>
  </button>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ButtonLoadingComponent",
  components: {},
  props: {
    button: {
      type: Object,
      default: () => {}
    },
    term: {
      type: String,
      default: 'w-32 h-10 rounded-lg bg-[#4A5EC4] text-white font-bold cursor-pointer leading-6 border-0 '
    },
    newTerm: {
      type: String,
      default: ' '
    },
  },
  data () {
    return {
      // loading: false,
      error: false,
    }
  },
  computed: {
    ...mapGetters('user', ['getUserAuth', 'getUserLoading']),
  },

  methods: {
    ...mapMutations('user',['loading', 'authUser']),
    click() {
      this.loading(true);
      setTimeout(() => {
        this.loading(false);
        this.authUser(true);
        this.error = true;
        this.$emit('clickLoadingBtn')
      },2000);
    }
  }
}
</script>

<style scoped>

</style>