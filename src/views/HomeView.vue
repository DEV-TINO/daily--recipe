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
    <RecentViewVue/>
  </div>

  <div class="home-main-container">
    <div class="threecontainertitle">
      <div class="main-title">저장한 레시피</div>
      <router-link to="/bookmarked" class="more">
        <div>더보기  &gt;</div>
      </router-link>
    </div>
    <SimpleContentsContainerVue/>
  </div>

  <div class="home-main-container">
    <div class="threecontainertitle">
      <div class="main-title">등록한 레시피</div> 
      <router-link to="/posted" class="more">
        <div>더보기  &gt;</div>
      </router-link>
    </div>
    <SimpleContentsContainerVue/>
  </div>
</template>

<script>
  import SwipeContainer from '@/components/SwipeContentsContainer.vue';
import SimpleContentsContainer from '@/components/SimpleContentsContainer.vue';
  export default {
    components: {
      RecentViewVue: SwipeContainer,
      SimpleContentsContainerVue: SimpleContentsContainer,
    }
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
.threecontainertitle {
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