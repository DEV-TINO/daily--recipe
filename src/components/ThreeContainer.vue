<template>
  <div class="three-container">
    <MiniContentsVue/>
    <MiniContentsVue/>
    <MiniContentsVue/>
</div>
</template>

<script>
import MiniContentsVue from './MiniContents.vue'
export default {
  components: {
    MiniContentsVue: MiniContentsVue,
  }
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