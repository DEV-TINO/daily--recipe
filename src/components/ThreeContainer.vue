<template>
  <div class="three-container">
    <MiniContentsVue v-for="(value, key, index) in minicontents" :key="index" :minicontents="minicontents[value.index]"/>
  </div>
</template>

<script>
import MiniContentsVue from './MiniContents.vue'
export default {
  data(){
    return {
      minicontents: [
        {
          index: 0,
          title: "title1",
          discription: "subtitle",
          thumbnail: "",
        },
        {
          index: 1,
          title: "title2",
          discription: "subtitle",
          thumbnail: "",
        },
        {
          index: 2,
          title: "title3",
          discription: "subtitle",
          thumbnail: "",
        },
      ],
    }
  },
  components: {
    MiniContentsVue: MiniContentsVue,
  },
}
</script>

<style>
.three-container {
  margin-top: 10px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>