<template>
<div class="top-nav-bar">
  <div @click="handleClickGoToParent()">&lt;</div>
    <div class="result-title">레시피</div>
    <div></div>
</div>
<div class="full-recipe-container"><RecipeDetailVue :recipe="recipe"/></div>
</template>

<script>
import RecipeDetailVue from '@/components/RecipeDetail.vue'
import axios from 'axios'
export default {
  mounted() {
    this.loadPost(this.$route.params.id.toString());
  },
  data() {
    return {
      recipe: {},
    }
  },
  components: {
    RecipeDetailVue: RecipeDetailVue
  },
  methods: {
    handleClickGoToParent() {
      const currentPath = this.$route.path;
      // 현재 경로를 '/'로 분할하고 마지막 경로를 제거
      const parentPath = currentPath.split('/').slice(0, -2).join('/');
      if (parentPath) {
        // 상위 경로로 이동
        this.$router.push(parentPath);
      } else {
        // 이미 루트에 도달했다면 루트로 이동
        this.$router.push('/');
      }
    },
    async loadPost(recipeName) {
      try {
        const requestUrl = "/mockdata/"+recipeName+"/recipe.json";
        const response = await axios.get(requestUrl);
        this.recipe = response.data;
      } catch (error) {
        console.error("게시물을 불러오는 중 오류가 발생했습니다.", error);
      }
    }
  }
}
</script>

<style>
.full-recipe-container {
  box-sizing: border-box;
  margin-top: 70px;
  margin-bottom:70px;
  padding: 30px;
}
</style>