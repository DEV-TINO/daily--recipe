<template>
  <div class="top-bar-banner">
    <div class="banner-icon">
      <img class="banner-icon" src="/images/homeicon.jpg">
    </div>
    <div class="user-info" v-if="user">
      <div class="user-name" >{{ user.username }}</div>
      <button class="logout-button" @click="handleClickLogout()">로그아웃</button>
    </div>
    <div v-else>로그인해 주세요<router-link :to="{ name: 'Login' }">로그인</router-link></div>
  </div>

  <div class="home-main-container">
    <div class="main-title">최근 본 레시피</div>
    <SwipeContainerVue v-if="recentlyViewedRecipes.length" :recentViewedPosts="recentlyViewedRecipes"/>
    <div v-else class="non-swipe-view">
      <img src="/images/homeview/non_recent_icon.png" class="icon">
      <div class="title">최근 본 게시물이 없습니다.</div>
    </div>
  </div>

  <div class="home-main-container">
    <div class="card-container-title">
      <div class="main-title">저장한 레시피</div>
        <div class="more" @click="handleClickBookmarkMore()">
          더보기  &gt;
        </div>
    </div>
    <RecipePreviewCardContainerVue v-if="bookmarkedRecipes.length" :cardData="bookmarkedRecipes.slice(this.listIndex(bookmarkedRecipes.length - 3), bookmarkedRecipes.legnth)"/>
    <div v-else class="non-card-view">
      <img src="/images/homeview/non_bookmark_icon.png" class="icon">
      <div class="title">저장한 레시피가 없습니다.</div>
    </div>
  </div>

  <div class="home-main-container">
    <div class="card-container-title">
      <div class="main-title">등록한 레시피</div> 
        <div class="more" @click="handleClickPostedMore()">
          더보기  &gt;
        </div>
    </div>
    <RecipePreviewCardContainerVue v-if="myRecipe.length" :cardData="myRecipe.slice(this.listIndex(myRecipe.length - 3), myRecipe.length)"/>
    <div v-else class="non-card-view">
      <img src="/images/homeview/non_myrecipe_icon.png" class="icon">
      <div class="title">등록한 레시피가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import SwipeContainer from '@/components/SwipeContentsContainer.vue';
import RecipePreviewCardContainer from '@/components/RecipePreviewCardContainer.vue';
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '../stores/authStore';
import { useRecipeStore } from '../stores/recipeStore.js';


export default {
  data() {
    return {
      myRecipe: []
    }
  },
  components: {
    SwipeContainerVue: SwipeContainer,
    RecipePreviewCardContainerVue: RecipePreviewCardContainer,
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
    ...mapState(useRecipeStore, ['recipes', 'bookmarks', 'bookmarkedRecipes', 'recentlyViewedRecipes'])
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    ...mapActions(useRecipeStore, ['toggleBookmark', 'deleteRecipe','loadRecipes', 'loadBookmarks', 'loadRecentlyViewed']),
    handleClickLogout() {
      this.logout();
      this.$router.push({ name: 'Login' }); // 로그아웃 후 로그인 화면으로 이동
    },
    handleClickBookmarkMore() {
      this.$router.push('/bookmarked')
    },
    handleClickPostedMore() {
      this.$router.push('/posted')
    },
    loadMyRecipe() {
      this.myRecipe = JSON.parse(localStorage.getItem('recipes')).filter(item =>
          item.user_id == JSON.parse(localStorage.getItem('user')).username
        )
    },
    listIndex(index) {
      if(index < 0) {
        return 0;
      } else {
        return index;
      }
    }
  },
  created() {
    this.loadMyRecipe();
    this.loadRecipes();
    this.loadBookmarks();
    this.loadRecentlyViewed();
  }
}
</script>

<style lang="scss">
.top-bar-banner {
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.banner-icon {
  width: 130px;
  height: 80px;
}
.user-info {
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.user-name {
  width: fit-content;
  margin-right: 10px;
}
.card-container-title {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 60px;
}
.home-main-container {
  margin-top: 20px;
  margin-right: 30px;
  margin-left: 30px;
}
.more {
  font-size: 14px;
  color: #6D6767;
  text-decoration-line: none;
}
.non-swipe-view {
  padding: 40px 0 40px 0;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon {
    margin: 0 auto;
    width: 100px;
    height: 110px;
  }
  .title {
    width: 100%;
    font-size: 20px;
    color: #7C7C7C;
    font-weight: 100;
    text-align: center;
  }
}
.non-card-view {
  padding: 40px 0 40px 0;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon {
    width: 50px;
    height: 50px;
  }
  .title {
    font-size: 20px;
    color: #7C7C7C;
    font-weight: 100;
  }
}
</style>