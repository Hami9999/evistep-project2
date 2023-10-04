
<template>
  <div >
    <div  class="flex justify-evenly	w-full m-auto">
      <div  class="empty_first w-96 h-20 text-center mt-10" >
        <ImageComponent :url="emptyProducts.emptyImg" current-class="w-10 h-10 m-auto"/>
        <p class="text-base text-[#637282] font-bold mt-4" >{{emptyProducts.emptyTitle }} </p>
      </div>
    </div>
  </div>
</template>


<script>
import ImageComponent from "./ImageComponent.vue";
export default {
  name: "EmptyProductComponent",
  components: {ImageComponent},
  props: {

    emptyProducts: {
      type: Object,
      default: () => {}
    },

  },
  data () {
    return{

    }
  },

}
</script>

<style scoped>


</style>