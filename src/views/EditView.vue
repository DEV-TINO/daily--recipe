<template>
  <div class="top-nav-bar">
    <div @click="handleClickgoToParentOrRoot()">&lt;</div>
    <div class="result-title">{{procedure_list[index].title}}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
  <img :src="procedure_list[index].procedure_image" class="edit-procedure-bar">
  <div class="edit-subtitle" v-html="procedure_list[index].subtitle"></div>

  <div class="edit-editer">
    <input class="edit-eidter-input" v-if="index == 0" type="text" :value="recipe.title" placeholder="ex) 간장계란밥">
    <input class="edit-eidter-input" v-if="index == 1" type="text" :value="recipe.description" placeholder="ex) 누구나 쉽게 만들 수 있습니다.">
    <div v-for="(item, count_ingredient) in recipe.ingredient" :key="count_ingredient">
      <div v-if="index == 2">
        <input class="edit-eidter-input" type="text" :value="item.name" placeholder="ex) 밥 or 계란 등 종류를 적어주세요."><br>
        <input class="edit-eidter-input" type="text" :value="item.quantity" placeholder="ex) 1공기 or 1개 등 양을 적어주세요.">
      </div>
    </div>
    <div v-for="(item, count_instruction) in recipe.instruction" :key="count_instruction">
      <div v-if="index == 3">
        <input class="edit-eidter-input" type="text" :value="item.imageUrl"><br>
        <div>{{count_instruction+1}}. 무엇을 해야하나요?</div>
        <input class="edit-eidter-input" type="text" :value="item.title" placeholder="ex) 양념용 간장 만들기"><br>
        <div>어떻게 해야하나요?</div>
        <input class="edit-eidter-input" type="text" :value="item.description" placeholder="ex) 쪽파 한 단을 잘게 다듬은 뒤, 간장 1큰스푼, 참기름 1스푼, 깨 1스푼을 넣고 섞어줍니다."><br>
      </div>
    </div>
    <input class="edit-editer-input" v-if="index == 4" type="text" :value="recipe.thumbnail">
  </div>

  <div class="edit-controler">
    <div @click="handleClickPrevStep()">
      이전
    </div>
    <div @click="handleClickNextStep()">
      다음
    </div>
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
        title: '간장계란밥',
        description: '간단한 재료로 뚝딱뚝딱 간편 레시피로 만드는 초간단 맛있는 간장계란밥 비법공개',
        ingredient: [
          {
            name: '밥',
            quantity: '1공기',
          },
          {
            name: '',
            quantity: '',
          },
          {
            name: '',
            quantity: '',
          },
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
          subtitle: '완성된 요리 사진으로<br/>썸네일을 등록해주세요.',
          procedure_image: '/images/procedure/thumbnail.png'
        },
        {
          index: 5,
          label: 'preview',
          title: '미리보기',
          subtitle: '작성한 레시피는 <br/>다른사용자에게 이렇게 보여요.',
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
.edit-subtitle {
  box-sizing: border-box;
  padding: 30px;
  font-size: 24px;
  font-weight: bold;
  padding-top: 0px;
}
.edit-controler {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  text-align: center;
  bottom: 100px;
}
.edit-editer {
  box-sizing: border-box;
  padding: 30px;
  padding-top: 0px;
  width: 100%;
}
.edit-editer-input{
  width: 100%;
}
</style>