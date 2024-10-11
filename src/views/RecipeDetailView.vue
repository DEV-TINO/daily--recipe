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
export default {
  data() {
    return {
      recipe: {
        user_id: 'shushu',
        thumbnail: '',
        title: '간장계란밥',
        description: '누구나 손쉽게 만드는 간장계란밥 비법 대공개',
        ingredient: [
          {
            name: '밥',
            quantity: '1공기',
          },
          {
            name: '간장',
            quantity: '5스푼',
          },
          {
            name: '참기름',
            quantity: '1스푼',
          },
          {
            name: '계란',
            quantity: '1개',
          },
          {
            name: '쪽파',
            quantity: '1단',
          },
        ],
        instruction: [
          {
            title: '양념장 만들기',
            imageUrl: '',
            description: '간장 5스푼, 참기름 1스푼과 쪽파 1단을 다져 섞어주세요.',
          },
          {
            title: '따듯한 밥 준비하기',
            imageUrl: '',
            description: '따듯한 밥 1공기를 멋진 그릇에 담아주세요.',
          },
          {
            title: '계란후라이 만들기',
            imageUrl: '',
            description: '계란 1개를 프라이팬에 부쳐 반숙란을 만들어주세요',
          },
          {
            title: '플레이팅',
            imageUrl: '',
            description: '밥이 담겨져 있는 그릇에 반숙란을 올리고 양념장을 올려주세요',
          },
          {
            title: '완성',
            imageUrl: '',
            description: '완성입니다.',
          },
        ],
        created_at: '2024-09-25',
      },
    }
  },
  components: {
    RecipeDetailVue: RecipeDetailVue
  },
  methods: {
    handleClickGoToParent() {
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