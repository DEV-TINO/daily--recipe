<template>
<div class="top-nav-bar">
  <div @click="handleClickGoToParent()">&lt;</div>
    <div class="result-title">레시피</div>
    <div></div>
</div>
<div class="full-recipe-container">
  <img v-if="recipe.user_id == user.username" @click="handleClickDeleteRecipe(recipe.recipeId)" class="icon" src="/images/detailview/delete_icon.png">
  <div v-else @click="handleClickBookmarkRecipe(recipe.recipeId)">
    <img v-if="bookmarked" class="icon" src="/images/detailview/bookmark_icon.png">
    <img v-else class="icon" src="/images/detailview/non_bookmark_icon.png">
  </div>
  <RecipeDetailVue :recipe="recipe"/>
  <div v-if="recipe.user_id == user.username" @click="handleClickEditRecipe(recipe.recipeId)" class="edit-create-post-button">레시피 수정하기</div>
</div>
</template>

<script>
import RecipeDetailVue from '@/components/RecipeDetail.vue'
import { useAuthStore } from '../stores/authStore.js'
import { useRecipeStore } from '../stores/recipeStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  mounted() {
    this.loadPost(this.$route.params.id.toString());
    this.isBookmarked(this.$route.params.id.toString())
  },
  data() {
    return {
      recipe: {},
      bookmarked: '',
    }
  },
  components: {
    RecipeDetailVue: RecipeDetailVue
  },
  methods: {
    ...mapActions(useRecipeStore, ['deleteRecipe', 'toggleBookmark']),
    handleClickDeleteRecipe(recipeName) {
      console.log(recipeName)
      this.deleteRecipe(recipeName);
      this.$router.push('/home');
    },
    handleClickBookmarkRecipe(recipeName) {
      this.toggleBookmark(recipeName);
      this.isBookmarked(recipeName);
    },
    handleClickGoToParent() {
      const currentPath = this.$route.path;
      // 현재 경로를 '/'로 분할하고 마지막 경로를 제거
      const parentPath = currentPath.split('/').slice(0, -2).join('/');
      if (parentPath) {
        // 상위 경로로 이동
        this.$router.push(parentPath);
      } else {
        // 이미 루트에 도달했다면 루트로 이동
        this.$router.push('/home');
      }
    },
    handleClickEditRecipe(recipeName) {
      const requestUrl = '/edit/'+recipeName
      this.$router.push(requestUrl);
    },
    isBookmarked(recipeName) {
      const bookmarkedList = JSON.parse(localStorage.getItem('bookmarks'));
      this.bookmarked = bookmarkedList.includes(recipeName)
    },
    loadPost(recipeName) {
      try {
        const responseArray = JSON.parse(localStorage.getItem('recipes'));
        const response = responseArray.find(recipe => 
        recipe.recipeId === recipeName)
        this.recipe = response
      } catch (error) {
        console.error("게시물을 불러오는 중 오류가 발생했습니다.", error);
      }
    }
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
  }
}
</script>

<style lang="scss">
.full-recipe-container {
  box-sizing: border-box;
  margin-top: 70px;
  margin-bottom:70px;
  padding: 30px;
  .icon {
    height: 30px;
    widows: 30px;
    position: absolute;
    right: 45px;
    top: 110px;
  }
}
</style>