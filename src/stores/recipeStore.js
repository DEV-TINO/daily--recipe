import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [],  // 등록된 레시피 리스트
    bookmarks: [],  // 북마크된 레시피 리스트
    recentlyViewed: [] // 최근 본 레시피 리스트
  }),

  actions: {
    // 로컬스토리지에서 레시피, 북마크, 최근 본 레시피 로드
    loadRecipes() {
      const recipes = localStorage.getItem('recipes');
      this.recipes = recipes ? JSON.parse(recipes) : [];
    },

    loadBookmarks() {
      const bookmarks = localStorage.getItem('bookmarks');
      this.bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    },

    loadRecentlyViewed() {
      const recentlyViewed = localStorage.getItem('recentlyViewed');
      this.recentlyViewed = recentlyViewed ? JSON.parse(recentlyViewed) : [];
    },

    // 레시피 추가
    addRecipe(newRecipe) {
      this.recipes.push(newRecipe);
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    },

    // 레시피 삭제
    deleteRecipe(recipeId) {
      this.recipes = this.recipes.filter(recipe => recipe.recipeId !== recipeId);
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    },

    // 레시피 북마크 추가/삭제
    toggleBookmark(recipeId) {
      if (this.bookmarks.includes(recipeId)) {
        this.bookmarks = this.bookmarks.filter(id => id !== recipeId);
      } else {
        this.bookmarks.push(recipeId);
      }
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    },

    // 레시피 보기 -> 최근 본 레시피에 추가
    viewRecipe(recipeId) {
      if (this.recentlyViewed.includes(recipeId)) {
        // 이미 목록에 있으면 제거하고 다시 추가 (최근 본 목록 업데이트)
        this.recentlyViewed = this.recentlyViewed.filter(id => id !== recipeId);
      }
      this.recentlyViewed.unshift(recipeId); // 가장 앞에 추가
      if (this.recentlyViewed.length > 5) { // 최근 본 레시피는 최대 5개로 제한
        this.recentlyViewed.pop();
      }
      localStorage.setItem('recentlyViewed', JSON.stringify(this.recentlyViewed));
    }
  },

  getters: {
    bookmarkedRecipes: (state) => {
      return state.recipes.filter(recipe => state.bookmarks.includes(recipe.recipeId));
    },
    recentlyViewedRecipes: (state) => {
      return state.recipes.filter(recipe => state.recentlyViewed.includes(recipe.recipeId));
    }
  }
});