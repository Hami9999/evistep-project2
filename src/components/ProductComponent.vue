<template>
  <div v-if="products.length" class="pt-3.5 w-full m-auto ">
    <div  class="flex p-8 min-[1281px]:justify-center  justify-between m-auto w-5/6 flex-wrap  max-[320px]:justify-center sm:w-full sm:p-5 md:justify-start lg:justify-between  ">
      <div  class="min-[1281px]:w-56 min-[1281px]:h-80   rounded-xl border-s-gray-300 border mt-3.5 cursor-pointer hover:border-2 hover:border-[#7E9ADC] border-opacity-25
      sm:w-72 sm:h-96 md:w-56 md:h-80 md:ml-2 min-[960px]:w-52 min-[960px]:h-72"  v-for="product in products" :key="product.id">
        <div class=" rounded-xl w-full m-auto">
          <div class="m-auto pt-2" >
            <img class="rounded-xl m-auto w-52 sm:w-64 sm:h-72 md:w-52 md:h-52 min-[960px]:w-48 " :src="imgUrlFunction(product.prdImg)" />
          </div>
          <div class="flex justify-start pl-4 mt-2 h-8" style="">
            <p class="text-base font-black">{{ productName(product) }}</p>
          </div>
          <div class="flex justify-start pl-3" >
            <img class="w-5 h-5" :src="imgUrlFunction(product.prdSecImg)" />
            <span  class="flex text-xs text-center ml-1.5 text-[#4A5EC4] mt-0.5">{{product.titlle}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EmptyProductComponent v-else  :empty-products="emptyProducts"/>
</template>


<script>


import EmptyProductComponent from "./EmptyProductComponent.vue";
import {mapState} from "vuex";

export default {
  name: "ProductComponent",
  components: {EmptyProductComponent},

  computed:{
       ...mapState('products',['products','emptyProducts'])
  },
  methods: {
    imgUrlFunction(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
    productName(product) {
      return product.name.length < 28 ? product.name : `${product.name.substring(0,23)}...`
    },
  },
}
</script>

<style scoped>

</style>