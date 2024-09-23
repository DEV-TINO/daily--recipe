<template>
  <div class="top-nav-bar">
    <div @click="handleClickGoToParentOrRoot()">&lt;</div>
    <div class="result-title">{{ procedure_list[index].title }}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
  <img :src="procedure_list[index].procedure_image" class="edit-procedure-bar">
  <div class="edit-subtitle" v-html="procedure_list[index].subtitle"></div>

  <div class="edit-editer">
    <!-- 제목 넣기 -->
    <input class="edit-editer-input" v-if="index == 0" type="text" v-model="recipe.title" placeholder="ex) 간장계란밥">
    <!-- 설명 넣기 -->
    <input class="edit-editer-input" v-if="index == 1" type="text" v-model="recipe.description" placeholder="ex) 누구나 쉽게 만들 수 있습니다.">
    <!-- 재료 넣기 -->
    <div v-if="index == 2">
      <div v-for="(item, count_ingredient) in recipe.ingredient" :key="count_ingredient">
        <input class="edit-editer-input" type="text" v-model="item.name" placeholder="ex) 밥 or 계란 등 종류를 적어주세요."><br>
        <input class="edit-editer-input" type="text" v-model="item.quantity" placeholder="ex) 1공기 or 1개 등 양을 적어주세요.">
        <button class="edit-button-delete" @click="handleClickDeleteIngredient(count_ingredient)">삭제하기</button>
      </div>
      <button class="edit-button-add" @click="handleClickAddIngredient()">추가하기</button>
    </div>
    <!-- 레시피 넣기 -->
    <div v-if="index == 3">
      <div v-for="(item, count_instruction) in recipe.instruction" :key="count_instruction">
        <input class="edit-editer-input" type="text" :value="item.imageUrl"><br>
        <div>{{ count_instruction+1 }}. 무엇을 해야하나요?</div>
        <input class="edit-editer-input" type="text" placeholder="ex) 양념용 간장 만들기" v-model="item.title"><br>
        <div>어떻게 해야하나요?</div>
        <input class="edit-editer-input" type="text" placeholder="ex) 쪽파 한 단을 잘게 다듬은 뒤, 간장 1큰스푼, 참기름 1스푼, 깨 1스푼을 넣고 섞어줍니다." v-model="item.description"><br>
        <button class="edit-button-delete" @click="handleClickDeleteInstruction(count_instruction)">삭제하기</button>
      </div>
      <button class="edit-button-add" @click="handleClickAddInstruction()">추가하기</button>
    </div>
    <!-- 썸네일 넣기 -->
    <input class="edit-editer-input" v-if="index == 4" type="text" :value="recipe.thumbnail">
    <!-- 미리 보기 (컴포넌트로 구분 예정) -->
    <div v-if="index == 5">
      <div>{{ recipe.thumbnail }}</div>
      <div>{{ recipe.title }}</div>
      <div>{{ recipe.user_id }}</div>
      <div>{{ recipe.description }}</div>
      <div v-for="(value, key, index) in recipe.ingredient" :key="index">
        {{ value.name }}{{ value.quantity }}
      </div>
      <div v-for="(value, index) in recipe.instruction" :key="index">
        {{ value.title }} <br>
        {{ value.description }}
      </div>
    </div>
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
        title: '',
        description: '',
        ingredient: [
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
      if (this.index >= 5) {
        this.index = 5;
      } else {
        this.index ++;
      }
      //다음단계 함수.
    },
    handleClickPrevStep() {
      if (this.index <= 0) {
        this.index = 0;
      } else {
        this.index--;
      }
    },
    handleClickGoToParentOrRoot() {
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
    handleClickAddIngredient() {
      this.recipe.ingredient.push({name: '',quantity: '',});
    },
    handleClickDeleteIngredient(index) {
      this.recipe.ingredient.splice(index, index);
    },
    handleClickAddInstruction() {
      this.recipe.instruction.push({title: '', imageUrl: '', description: '',})
    },
    handleClickDeleteInstruction(index) {
      this.recipe.instruction.splice(index, index)
    }
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
  box-sizing: border-box;
}
.edit-button-add {
  color:orange;
}
.edit-button-delete {
  color: red;
}
</style>