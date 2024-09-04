<template>
  <div class="top-nav-bar">
    <div @click="goToParentOrRoot()">&lt;</div>
    <div class="result-title">{{mode}}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
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
    goToParent() {
      const parentPath = this.$route.path.split('/').slice(0, -1).join('/');
      this.$router.push(parentPath);
    },
    goToParentOrRoot() {
      const currentPath = this.$route.path;
      // 현재 경로를 '/'로 분할하고 마지막 경로를 제거
      const parentPath = currentPath.split('/').slice(0, -1).join('/');
      
      if (parentPath) {
        // 상위 경로로 이동
        this.$router.push(parentPath);
      } else {
        // 이미 루트에 도달했다면 루트로 이동
        this.$router.push('/');
      }
    },
  },
  components: {
    MiddleContentsVue: MiddleContentsVue,
  },
  props: {
    mode: {
      type: String,
    },
  },
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