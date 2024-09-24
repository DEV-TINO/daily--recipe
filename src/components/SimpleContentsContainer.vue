<template>
  <div class="three-container">
    <SimpleContentsVue v-for="(value, key, index) in simplecontents" :key="index" :simplecontents="simplecontents[value.index]"/>
  </div>
</template>

<script>
import SimpleContentsVue from './SimpleContents.vue'
export default {
  data(){
    return {
      simplecontents: [
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
    SimpleContentsVue: SimpleContentsVue,
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