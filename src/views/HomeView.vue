<template>
  <div class="top-bar-banner">
    <div class="banner-icon">
      <img class="banner-icon" src="/images/homeicon.jpg">
    </div>
    <div class="user-info">
      <div class="user-name">username</div>
      <button class="logout-button">로그아웃</button>
    </div>
  </div>

  <div class="home-main-container">
    <div class="main-title">최근 본 레시피</div>
    <SwipeContainerVue :recentViewedPosts="recentViewedPosts"/>
  </div>

  <div class="home-main-container">
    <div class="card-container-title">
      <div class="main-title">저장한 레시피</div>
      <router-link to="/bookmarked" class="more">
        <div>더보기  &gt;</div>
      </router-link>
    </div>
    <RecipePreviewCardContainerVue :cardData="bookmarkedPosts"/>
  </div>

  <div class="home-main-container">
    <div class="card-container-title">
      <div class="main-title">등록한 레시피</div> 
      <router-link to="/posted" class="more">
        <div>더보기  &gt;</div>
      </router-link>
    </div>
    <RecipePreviewCardContainerVue :cardData="myPosts"/>
  </div>
</template>

<script>
import SwipeContainer from '@/components/SwipeContentsContainer.vue';
import RecipePreviewCardContainer from '@/components/RecipePreviewCardContainer.vue';

export default {
  data() {
    return {
      recentViewedPosts: [
        {
          id: "eggsoysaucerice",
          title: "간장계란밥",
          discription: "누구나 만들 수 있는 간장 계란밥 레시피 대공개",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "thinoodle",
          title: "까오팟 무쌉",
          discription: "한국에서 즐기는 태국식 볶음면",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "toppokki",
          title: "떡볶이",
          discription: "집에서 간단하게 즐기는 떡볶이 레시피",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "toppokki",
          title: "떡볶이2",
          discription: "집에서 간단하게 즐기는 떡볶이 레시피",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "toppokki",
          title: "떡볶이3",
          discription: "집에서 간단하게 즐기는 떡볶이 레시피",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
      ],
      bookmarkedPosts: [
        {
          id: "eggsoysaucerice",
          title: "간장계란밥",
          discription: "누구나 만들 수 있는 간장 계란밥 레시피 대공개",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "thinoodle",
          title: "까오팟무쌉",
          discription: "한국에서 즐기는 태국식 볶음면",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "toppokki",
          title: "떡볶이",
          discription: "집에서 간단하게 즐기는 떡볶이 레시피",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
      ],
      myPosts: [
        {
          id: "eggsoysaucerice",
          title: "간장계란밥",
          discription: "누구나 만들 수 있는 간장 계란밥 레시피 대공개",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "thinoodle",
          title: "까오팟무쌉",
          discription: "한국에서 즐기는 태국식 볶음면",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
        {
          id: "toppokki",
          title: "떡볶이",
          discription: "집에서 간단하게 즐기는 떡볶이 레시피",
          thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
        },
      ],
    }
  },
  components: {
    SwipeContainerVue: SwipeContainer,
    RecipePreviewCardContainerVue: RecipePreviewCardContainer,
  },
}
</script>

<style>
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
</style>