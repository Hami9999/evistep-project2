<template>
  <div  class="relative inline-block w-44  max-[320px]:flex max-[320px]:w-36  ">
    <div class="max-[320px]:border-none  hover:border-2 hover:border-[#7E9ADC] border-opacity-25 p-1.5 flex items-center cursor-pointer w-[178px] m rounded-[8px] bg-white border-solid accent-gray-300 border" v-on:click="toggleDropdown">
      <ImageComponent :url="dropdown.dropImg" current-class="w-5 h-5"/>
      <span class="leading-[22px] font-semibold text-[14px] text-[#637282] ml-2">{{ dropdown.placeholder }}</span>
      <ImageComponent current-class="w-3 ml-1 h-3 text-gray-700 " :url="dropdown.dropIcon" />
    </div>
    <ul class="drop-shadow-md  absolute  rounded-xl w-44 max-h-32 bg-white" v-show="isDropdownOpen">
      <li class="hover:bg-gray-200 flex text-center py-3 cursor-pointer " v-for="(option, index) in dropdown.items" @click="selectOption()" :key="`dropdown-${index}`">
        <ImageComponent current-class="ml-2 " :url="option.viewIcon" />
        <span class="hover:text-black text-base text-[#637282] font-semibold text-sm ml-2">{{ option.dropView }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import ImageComponent from "./ImageComponent.vue";
export default {
  name: 'DropDownComponent',
  components: {ImageComponent},

  props: {
    dropdown: {
      type: Object,
      default: () => {}
    },

  },
  data(){
    return{
      isDropdownOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption() {
      this.isDropdownOpen = false;
    },
  },
}
</script>
<style scoped >

</style>