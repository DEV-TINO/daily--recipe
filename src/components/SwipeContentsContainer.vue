<template>
  <div class="swipe-view-container" v-for="(value, index) in recentViewedPosts" :key="index" @click="handleClickGoToDetail(value.recipeId)">
    <SwipeContentsVue v-if="page == index" :contentData="value" />
  </div>
  <div class="swipe-controller" v-if="recentViewedPosts.length">
    <div @click="handleClickLeftArrow" class="left">&lt;</div>
    <div @click="handleClickRightArrow" class="right">&gt;</div>
  </div>
  <div class="swipe-indicator">
    <div v-for="index in recentViewedPosts.length" :key="index">
      <div v-if="page + 1 == index" class="clicked"></div>
      <div v-else class="nonclicked" @click="handleClickIndicator(index)"></div>
    </div>
  </div>
</template>

<script>
import SwipeContentsVue from './SwipeContents.vue'
import { useRecipeStore } from '../stores/recipeStore.js';
import { mapActions } from 'pinia';

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
    ...mapActions(useRecipeStore, ['viewRecipe']),
    handleClickLeftArrow() {
      if (this.page == 0) {
        this.page = this.recentViewedPosts.length - 1
      }else {
        this.page--
      }
    },
    handleClickRightArrow() {
      if (this.page == this.recentViewedPosts.length - 1) {
        this.page = 0
      }else {
        this.page++
      }
    },
    handleClickGoToDetail(recipeId) {
      const requestUrl = '/detail/'+recipeId
      this.viewRecipe(recipeId)
      this.$router.push(requestUrl)
    },
    handleClickIndicator(index) {
      this.page = index - 1;
    }
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
.swipe-indicator{
  display: flex;
  gap: 10px;
  justify-content: center;
  font-size: 20px;
  padding-top: 10px;
  .clicked {
    background: orange;
    border-radius: 20px;
    height: 10px;
    width: 10px;
  }
  .nonclicked{
    background: #aaa;
    border-radius: 20px;
    height: 10px;
    width: 10px;
  }
}
.swipe-view-container{
  width: 100%;
  height: fit-content;
  position: relative;
  z-index: 1;
}
</style>