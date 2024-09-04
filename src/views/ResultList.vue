<template>
  <div class="top-nav-bar">
    <div @click="handleClickBackToHome()">&lt;</div>
    <div class="result-title">results</div>
    <div></div>
  </div>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
  <MiddleContentsVue/>
</template>

<script>
import MiddleContentsVue from '@/components/MiddleContents.vue'
export default {
  methods: {
    handleClickBackToHome() {
      this.$router.push("/");
    },
  },
  components: {
    MiddleContentsVue: MiddleContentsVue,
  },
}
</script>

<style>
.top-nav-bar {
  display: grid;
  grid-template-columns: 17px 1fr 17px;
  font-size: 24px;
  font-weight: bold;
  padding: 30px;
}
.result-title {
  text-align: center;
}
</style>