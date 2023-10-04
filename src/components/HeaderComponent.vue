<template>
  <div
      class="w-full h-[72px] border-b-[1px] border-solid accent-gray-300
      pt-[16px] pr-[32px] pb-[16px] pl-[32px]  "
  >
    <div class="flex justify-between justify-between">
      <div class="flex ">
        <img @click="back" class="cursor-pointer" src="../assets/Frame21.png" />

        <p @click="back" class="w-14 h-8 ml-1  text-2xl  font-extrabold cursor-pointer max-[640px]:hidden">NFTer</p>
      </div>
      <div class="">
        <DropDownComponent v-if="getUserAuth" :dropdown="dropdown" />
        <ButtonLoadingComponent v-else :button="button" @clickLoadingBtn="load"  />
      </div>
    </div>
  </div>
</template>

<script>
import DropDownComponent from "./DropDownComponent.vue";
import ButtonLoadingComponent from "../Buttons/ButtonLoadingComponent.vue";
import {mapGetters, mapMutations} from "vuex";


export default {
  components: {ButtonLoadingComponent, DropDownComponent},



  data() {
    return {
      button: {
        buttonName: 'Connect ',
      },
      dropdown: {
        placeholder: '0x080...4bb20 ',
        dropImg: 'image9.png',
        dropIcon:'frIcon.svg',

        items: [
          {
            dropView: 'View on Explorer',
            viewIcon: 'Frame1.png'
          },
          {
            dropView: 'Disconnect Wallet',
            viewIcon: 'Frame2.png'
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters('user', ['getUserAuth']),

  },
  methods: {
    ...mapMutations('user',["authUser"]),
    back() {
      this.$router.push({path: "/"});
    },
    load() {
      this.$router.push({path: "/product"});
    }
  }
};
</script>
<style scoped>

</style>
