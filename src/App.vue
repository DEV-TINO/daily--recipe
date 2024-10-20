<template>
  <router-view></router-view>
  <BottomNavVue v-if="this.$route.path == '/home' || this.$route.path == '/search'"/>
</template>

<script>
import BottomNavVue from "./components/BottomNav.vue";
export default {
  mounted() {
    this.initLocalStorage();
  },
  components: {
    BottomNavVue: BottomNavVue,
  },
  methods: {
    initLocalStorage() {
      const defaultData = {
        recipes: [
          {
            recipeId: "eggsoysaucerice",
            user_id: "shushu",
            thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
            title: "간장계란밥",
            description: "누구나 손쉽게 만드는 간장계란밥 비법 대공개",
            ingredient: [
              {
                name: "밥",
                quantity: "1공기"
              },
              {
                name: "간장",
                quantity: "5스푼"
              },
              {
                name: "참기름",
                quantity: "1스푼"
              },
              {
                name: "계란",
                quantity: "1개"
              },
              {
                name: "쪽파",
                quantity: "1단"
              }
            ],
            instruction: [
              {
                title: "양념장 만들기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_01.png",
                description: "간장 5스푼, 참기름 1스푼과 쪽파 1단을 다져 섞어주세요."
              },
              {
                title: "따듯한 밥 준비하기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_02.png",
                description: "따듯한 밥 1공기를 멋진 그릇에 담아주세요."
              },
              {
                title: "계란후라이 만들기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_03.png",
                description: "계란 1개를 프라이팬에 부쳐 반숙란을 만들어주세요"
              },
              {
                title: "플레이팅",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_04.png",
                description: "밥이 담겨져 있는 그릇에 반숙란을 올리고 양념장을 올려주세요"
              },
              {
                title: "완성",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_05.png",
                description: "완성입니다."
              }
            ],
            created_at: "2024-09-25"
          },
          {
            recipeId: "thinoodle",
            user_id: "shushu",
            thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
            title: "까오팟무쌉",
            description: "누구나 손쉽게 만드는 간장계란밥 비법 대공개",
            ingredient: [
              {
                name: "쌀국수",
                quantity: "1봉지"
              },
              {
                name: "간장",
                quantity: "5스푼"
              },
              {
                name: "참기름",
                quantity: "1스푼"
              },
              {
                name: "계란",
                quantity: "1개"
              },
              {
                name: "쪽파",
                quantity: "1단"
              }
            ],
            instruction: [
              {
                title: "양념장 만들기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_01.png",
                description: "간장 5스푼, 참기름 1스푼과 쪽파 1단을 다져 섞어주세요."
              },
              {
                title: "쌀국수 삶기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_02.png",
                description: "쌀국수를 3분동안 끓는 물에 삶아주세요"
              },
              {
                title: "계란후라이 만들기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_03.png",
                description: "계란 1개를 프라이팬에 부쳐 반숙란을 만들어주세요"
              },
              {
                title: "플레이팅",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_04.png",
                description: "그릇에 삶은 쌀국수, 계란후라이, 양념장을 넣고 비벼주세요"
              },
              {
                title: "완성",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_05.png",
                description: "완성입니다."
              }
            ],
            created_at: "2024-09-25"
          },
          {
            recipeId: "toppokki",
            user_id: "shushu",
            thumbnail: "/mockdata/eggsoysaucerice/image/step_05.png",
            title: "떡볶이",
            description: "누구나 쉽게 만드는 떡볶이 레시피 대공개",
            ingredient: [
              {
                name: "쌀국수",
                quantity: "1봉지"
              },
              {
                name: "간장",
                quantity: "5스푼"
              },
              {
                name: "참기름",
                quantity: "1스푼"
              },
              {
                name: "계란",
                quantity: "1개"
              },
              {
                name: "쪽파",
                quantity: "1단"
              }
            ],
            instruction: [
              {
                title: "떡 불리기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_01.png",
                description: "떡을 5분간 물에 불려주세요"
              },
              {
                title: "쌀국수 삶기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_02.png",
                description: "쌀국수를 3분동안 끓는 물에 삶아주세요"
              },
              {
                title: "계란후라이 만들기",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_03.png",
                description: "계란 1개를 프라이팬에 부쳐 반숙란을 만들어주세요"
              },
              {
                title: "플레이팅",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_04.png",
                description: "그릇에 삶은 쌀국수, 계란후라이, 양념장을 넣고 비벼주세요"
              },
              {
                title: "완성",
                imageUrl: "/mockdata/eggsoysaucerice/image/step_05.png",
                description: "완성입니다."
              }
            ],
            created_at: "2024-09-25"
          }
        ],
        bookmarks: [],
        recentlyViewed: [],

      };
      if (!localStorage.getItem('recipes')) {
        localStorage.setItem('recipes', JSON.stringify(defaultData.recipes));
      }

      if (!localStorage.getItem('bookmarks')) {
        localStorage.setItem('bookmarks', JSON.stringify(defaultData.bookmarks));
      }

      console.log('로컬스토리지 초기화 완료');
    }
  }
}
</script>

<style>
* {
  font-family: "Pretendard-Regular.ttf" !important;
}
</style>
