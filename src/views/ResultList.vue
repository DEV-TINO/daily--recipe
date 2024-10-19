<template>
  <div class="top-nav-bar">
    <div @click="handleClickgoToParent()">&lt;</div>
    <div v-if="resultTitle == '검색결과'" class="result-title">{{ searchQuery }} ({{ displayedItems.length }})</div>
    <div v-else class="result-title">{{ mode }}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
  <div v-if="displayedItems.length"><RecipeListItemVue v-for="(value, index) in displayedItems" :key="index" @click="handleClickGoToDetail(value.recipeId)" :previewData="value"/></div>
  <div v-else class="result-title">결과가 없습니다.</div>
  <div class="margin-90px"></div>
</template>

<script>
import RecipeListItemVue from '@/components/RecipeListItem.vue'
import { useRecipeStore } from '../stores/recipeStore.js';
import { mapActions, mapGetters } from 'pinia';

export default {
  data(){
    return {
      resultTitle: this.mode || '',
      searchQuery: this.query || '',
      recipeList: JSON.parse(localStorage.getItem('recipes'))
    }
  },
  methods: {
    ...mapActions(useRecipeStore, ['viewRecipe']),
    handleClickgoToParent() {
      const currentPath = this.$route.path;
      // 현재 경로를 '/'로 분할하고 마지막 경로를 제거
      const parentPath = currentPath.split('/').slice(0, -1).join('/');
      
      if (parentPath) {
        // 상위 경로로 이동
        this.$router.push(parentPath);
      } else {
        // 이미 루트에 도달했다면 루트로 이동
        this.$router.push('/home');
      }
    },
    handleClickGoToDetail(recipeName) {
      const detailPath = this.$route.path+'/detail/'+recipeName;
      this.viewRecipe(recipeName);
      this.$router.push(detailPath);
    },
  },
  components: {
    RecipeListItemVue: RecipeListItemVue,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: false,
    }
  },
  computed: {
    ...mapGetters(useRecipeStore, ['bookmarkedRecipes']),
    displayedItems() {
      if (this.mode === '검색결과'){
        return this.recipeList = JSON.parse(localStorage.getItem('recipes')).filter(item =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      if (this.mode === '등록한 레시피'){
        return this.recipeList = JSON.parse(localStorage.getItem('recipes')).filter(item =>
          item.user_id == JSON.parse(localStorage.getItem('user')).username
        )
      }
      if (this.mode === '저장한 레시피'){
        return this.recipeList = this.bookmarkedRecipes
      }
      return this.recipeList;
    }
  }
}
</script>

<style>
.margin-90px{
  height: 90px;
}
.top-nav-bar {
  width: 100%;
  box-sizing: border-box;
  left: 0;
  position: fixed;
  z-index: 100;
  display: grid;
  grid-template-columns: 17px 1fr 17px;
  font-size: 24px;
  font-weight: bold;
  padding: 30px;
  background-color: #fff;
  top: 0;
}
.result-title {
  width: auto;
  text-align: center;
}
</style>