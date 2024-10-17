<template>
  <div class="swipe-view-container" v-for="(value, index) in recentViewedPosts" :key="index">
    <SwipeContentsVue v-if="page == index" :contentData="value"/>
  </div>
  <div class="swipe-controller">
    <div @click="handleClickLeftArrow" class="left">&lt;</div>
    <div @click="handleClickRightArrow" class="right">&gt;</div>
  </div>
</template>

<script>
import SwipeContentsVue from './SwipeContents.vue'
export default {
  data() {
    return {
      page : 0
    }
  },
  components: {
    SwipeContentsVue: SwipeContentsVue,
  },
  methods: {
    handleClickLeftArrow() {
      if (this.page == 0) {
        this.page = 0
      }else {
        this.page--
      }
    },
    handleClickRightArrow() {
      if (this.page == this.recentViewedPosts.length - 1) {
        this.page = this.recentViewedPosts.length - 1
      }else {
        this.page++
      }
    },
  },
  props: {
    recentViewedPosts: Array
  }
}
</script>

<style lang="scss">
.swipe-controller {
  position: absolute;
  left: 0;
  transform: translate(0, -130px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    padding: 30px 10px 30px 10px;
    color: orange;
    border: solid orange 1px;
    border-radius: 10px;
    align-content: center;
    transform: translate(5px);
  }
  .right {
    padding: 30px 10px 30px 10px;
    color: orange;
    border: solid orange 1px;
    border-radius: 10px;
    align-content: center;
    transform: translate(-5px);
  }
}
</style>