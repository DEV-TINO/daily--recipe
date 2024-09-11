<template>
  <div class="top-nav-bar">
    <div @click="handleClickgoToParentOrRoot()">&lt;</div>
    <div class="result-title">{{procedure_list[index].title}}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
  <img :src="procedure_list[index].procedure_image" class="edit-procedure-bar">
  <div>{{procedure_list[index].subtitle}}</div>
  <div @click="handleClickNextStep()">
    다음
  </div>
  <div @click="handleClickPrevStep()">
    이전
  </div>
</template>

<script>
export default {
  data() {
    return {
      //레시피 object화
      recipe: {
        user_id: '',
        thumbnail: '',
        title: '',
        description: '',
        ingredient: [
          {
            name: '',
            quantity: '',
          }
        ],
        instruction: [
          {
            title: '',
            imageUrl: '',
            description: '',
          },
        ],
        created_at: '',
      },
      //procedure 넘어갈 때 제어할 index변수.
      index: 0,
      //ingredient 개수.
      count_ingredient: 1,
      //instruction 개수.
      count_instruction: 1,
      procedure_list: [
        {
          index: 0,
          label: 'naming',
          title: '레시피 명 등록하기',
          subtitle: '요리의 이름을 적어주세요.',
          procedure_image: '/images/procedure/naming.png'
        },
        {
          index: 1,
          label: 'introduction',
          title: '소개글 작성하기',
          subtitle: '간단한 소개글을 적어주세요.',
          procedure_image: '/images/procedure/introduction.png'
        },
        {
          index: 2,
          label: 'ingredient',
          title: '재료 등록하기',
          subtitle: '필요한 재료를 알려주세요.',
          procedure_image: '/images/procedure/ingredient.png'
        },
        {
          index: 3,
          label: 'recipe',
          title: '레시피 작성하기',
          subtitle: '이제, 레시피를 작성해주세요.',
          procedure_image: '/images/procedure/recipe.png'
        },
        {
          index: 4,
          label: 'thumbnail',
          title: '썸네일 등록하기',
          subtitle: '완성된 요리 사진으로 썸네일을 등록해주세요.',
          procedure_image: '/images/procedure/thumbnail.png'
        },
        {
          index: 5,
          label: 'preview',
          title: '미리보기',
          subtitle: '작성한 레시피는 다른사용자에게 이렇게 보여요.',
          procedure_image: '/images/procedure/preview.png'
        },
      ],
    }
  },
  methods: {
    handleClickNextStep() {
      const nowIndex = this.index;
      if (nowIndex >= 5) {
        this.index = 5;
      } else {
        this.index ++;
      }
      //다음단계 함수.
    },
    handleClickPrevStep() {
      const nowIndex = this.index;
      if (nowIndex <= 0) {
        this.index = 0;
      } else {
        this.index--;
      }
    },
    handleClickgoToParentOrRoot() {
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
}
</script>

<style>
.edit-procedure-bar{
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
}
</style>