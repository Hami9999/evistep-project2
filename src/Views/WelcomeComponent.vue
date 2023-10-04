
<template>
  <div>
    <div  class="mt-9 flex justify-evenly w-72 m-auto h-56">
      <div  class=" w-full h-full text-center mt-1" >
        <ImageComponent :url="welcome.welcomeImg" current-class="w-24 h-24 m-auto"/>
        <p class=" mt-3 text-2xl font-bold text-gray-900" >{{ welcome.welcomeTitle }} </p>
        <p class=" mt-2 text-xs text-[#637282]" >{{ welcome.welcomeDescribe }} </p>
      <div class="w-full mt-4">
        <ButtonLoadingComponent  :button="button" @clickLoadingBtn="connectWallet" />
      </div>
        <ErrorComponent :show="getProductError" @close="hideError"/>
      </div>
    </div>
  </div>
</template>


<script>
import ImageComponent from "../components/ImageComponent.vue";
import ErrorComponent from "../components/ErrorComponent.vue";
import ButtonLoadingComponent from "../Buttons/ButtonLoadingComponent.vue";
import store from "../store/index.js";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "WelcomeComponent",
  components: {
    ButtonLoadingComponent,
    ImageComponent,
    ErrorComponent
  },
  props: {
    emptyProducts: {
      type: Object,
      default: () => {}
    },

  },
  data () {
    return {
      button: {
        buttonName: 'Connect Wallet',
      },
      welcome: {
        welcomeImg:'welcome.png',welcomeTitle:'Welcome',welcomeDescribe:'Connect your wallet via MetaMask to continue'
      },
    }
  },
  computed:{
    ...mapGetters('products', ['getProductError']),
  },
  methods: {
    ...mapMutations('user',["authUser"]),
    ...mapMutations('products',["productError"]),
    connectWallet() {

      this.button.buttonName ='Retry';
      this.authUser(true);
      this.$router.push({path: "/product"});
    },
    hideError(){
      this.productError(false) ;
    }

  }

}
</script>

<style scoped>


</style>