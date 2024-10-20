<template>
  <div class="top-nav-bar">
    <div @click="handleClickGoToParent()">&lt;</div>
    <div class="result-title">{{ procedure_list[index].title }}</div>
    <div></div>
  </div>
  <div class="margin-90px"></div>
  <img :src="procedure_list[index].procedure_image" class="edit-procedure-bar">
  <div class="edit-subtitle" v-html="procedure_list[index].subtitle"></div>

  <div class="edit-editer">
    <!-- 제목 넣기 -->
    <div class="editer-container" v-if="index == 0">
      <textarea 
        class="edit-editer-title"  
        type="text" 
        v-model="recipe.title" 
        placeholder="ex) 간장계란밥" 
        maxlength="30"
      ></textarea>
      <span class="edit-text-counter">{{ recipe.title.length }}/30</span>
    </div>

    <!-- 설명 넣기 -->
    <div class="editer-container" v-if="index == 1">
      <textarea 
        class="edit-editer-title-three-lines"  
        type="text" 
        v-model="recipe.description" 
        placeholder="ex) 누구나 쉽게 만들 수 있습니다." 
        maxlength="60"
      ></textarea>
      <span class="edit-text-counter">{{ recipe.description.length }}/60</span>
    </div>

    <!-- 재료 넣기 -->
    <div v-if="index == 2">
      <div v-for="(item, count_ingredient) in recipe.ingredient" :key="count_ingredient">
        <input 
          class="edit-editer-input" 
          type="text" 
          v-model="item.name" 
          placeholder="ex) 밥 or 계란 등 종류를 적어주세요."
          maxlength="15"
        ><br>
        <input 
          class="edit-editer-input" 
          type="text" 
          v-model="item.quantity" 
          placeholder="ex) 1공기 or 1개 등 양을 적어주세요."
          maxlength="15"
        >
        <button 
          class="edit-button-delete" 
          @click="handleClickDeleteIngredient(count_ingredient)"
        >삭제하기</button>
      </div>
      <button class="edit-button-add" @click="handleClickAddIngredient()">추가하기</button>
    </div>

    <!-- 레시피 넣기 -->
    <div v-if="index == 3">
      <div v-for="(item, count_instruction) in recipe.instruction" :key="count_instruction">
        <label :for="'image-input-'+count_instruction">
          <div class="edit-image-input" v-if="item.imageUrl == 0">
            <img src="/images/43icon.png" class="edit-image-input-icon">
            <div>Upload Image</div>
          </div>
        </label>
        <input 
          class="edit-image-input-button" 
          :id="'image-input-'+count_instruction" 
          @change="handleUploadFile(count_instruction)" 
          type="file"
          accept="image/*"
        />
        <div v-if="item.imageUrl" class="edit-image-container">
          <img :src="item.imageUrl"  class="edit-image-souce" @click="handleClickRemoveImage(count_instruction)">
        </div>
        <div class="edit-recipe-container">
          <div class="edit-recipe-description-title">{{ count_instruction+1 }}. 무엇을 해야하나요?</div>
          <textarea 
            class="edit-editer-title" 
            type="text" 
            placeholder="ex) 양념용 간장 만들기"
            v-model="item.title"
            maxlength="20"
          ></textarea>
          <span class="edit-text-counter-relative">{{ item.title.length }}/20</span>
        </div>
        <div class="edit-recipe-container">
          <div class="edit-recipe-description-title">어떻게 해야하나요?</div>
          <textarea
            class="edit-editer-title-three-lines" 
            type="text" 
            placeholder="ex) 쪽파 한 단을 잘게 다듬은 뒤, 간장 1큰스푼, 참기름 1스푼, 깨 1스푼을 넣고 섞어줍니다." 
            v-model="item.description"
            maxlength="60"
          ></textarea>
          <span class="edit-text-counter-relative">{{ item.description.length }}/60</span>
        </div>
        <button class="edit-button-delete" @click="handleClickDeleteInstruction(count_instruction)">삭제하기</button>
      </div>
      <button class="edit-button-add" @click="handleClickAddInstruction()">추가하기</button>
    </div>

    <!-- 썸네일 넣기 -->
    <div v-if="index == 4">
      <label :for="'input-thumbnail'"  v-if="recipe.thumbnail == 0">
        <div class="edit-thumbnail-input">
          <img src="/images/11icon.png" class="edit-image-input-icon">
          <div>Upload Image</div>
        </div>
      </label>
      <input 
        class="edit-image-input-button" 
        :id="'input-thumbnail'" 
        @change="handleUploadThumbnail()" 
        type="file"
        accept="image/*"
      />
      <div v-if="recipe.thumbnail" class="edit-thumbnail-container">
        <img :src="recipe.thumbnail" class="edit-thumbnail-souce" @click="handleClickRemoveThumbnail()">
      </div>
    </div>

    <!-- 미리 보기 -->
    <div v-if="index == 5">
      <FullRecipeContainerVue :recipe="recipe"/>
      <div v-if="this.$route.params.id" class="edit-create-post-button" @click="handleClickEditRecipe">게시물 수정하기</div>
      <div v-else class="edit-create-post-button" @click="handleClickCreateRecipe">
        게시물 생성하기
      </div>
    </div>
  </div>
  <div style="margin-bottom: 30px;"></div>

  <div class="edit-controler">
    <div v-if="index !== 0" class="edit-controler-button-left" @click="handleClickPrevStep()">
      &lt;
    </div>
    <div v-if="index !== 5" class="edit-controler-button-right" @click="handleClickNextStep()">
      &gt;
    </div>
  </div>
  
</template>

<script>
import FullRecipeContainerVue from '@/components/RecipeDetail.vue';
import { useRecipeStore } from '../stores/recipeStore.js'
import { useAuthStore } from '../stores/authStore.js';
import { mapActions, mapState } from 'pinia';

export default {
  mounted() {
    this.loadEditData(this.$route.params.id)
  },
  components: {
    FullRecipeContainerVue: FullRecipeContainerVue
  },
  data() {
    return {
      //레시피 object화
      recipe: {
        recipeId: '',
        user_id: '',
        created_at: '',
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
    ...mapActions(useRecipeStore, ['addRecipe', 'deleteRecipe']),

    handleClickNextStep() {
      switch (this.index) {
        case 0: 
        if (this.recipe.title != 0) {
          this.index++
        }
        break;
        case 1: 
        if (this.recipe.description != 0) {
          this.index++
        }
        break;
        case 2: 
        const ingredientCheck = this.recipe.ingredient.every(item =>
          item.name && item.quantity
        );
        if (ingredientCheck && this.recipe.ingredient != 0) {
          this.index ++;
        }
        break;
        case 3: 
        const instructionCheck = this.recipe.instruction.every(item =>
          item.description && item.imageUrl && item.title
        );
        if (instructionCheck && this.recipe.instruction != 0) {
          this.index ++;
        }
        break;
        case 4: 
        if (this.recipe.thumbnail != 0) {
          this.index++
          this.recipe.created_at = this.getToday();
          this.recipe.user_id = JSON.parse(localStorage.getItem('user')).username
          if(!this.recipe.recipeId){
            this.recipe.recipeId = self.crypto.randomUUID().toString();
          }
        }
        break;
      }
    },
    handleClickPrevStep() {
      if (this.index <= 0) {
        this.index = 0;
      } else {
        this.index--;
      }
    },
    handleClickGoToParent() {
      const currentPath = this.$route.path;
      // 현재 경로를 '/'로 분할하고 마지막 경로를 제거
      const parentPath = currentPath.split('/').slice(0, -1).join('/');
      if (parentPath) {
        // 상위 경로로 이동
        this.$router.push(parentPath);
      } else {
        // 이미 루트에 도달했다면 루트로 이동
        this.$router.push('/home');
      }
    },
    handleClickAddIngredient() {
      this.recipe.ingredient.push({name: '',quantity: ''});
    },
    handleClickDeleteIngredient(index) {
      this.recipe.ingredient.splice(index, 1);
    },
    handleClickAddInstruction() {
      this.recipe.instruction.push({title: '', imageUrl: '', description: ''})
    },
    handleClickDeleteInstruction(index) {
      this.recipe.instruction.splice(index, 1)
    },
    handleUploadFile(index) {
      const file = event.target.files[0];
      if (file) {
        this.recipe.instruction[index].imageUrl = URL.createObjectURL(file);
      }
    },
    handleUploadThumbnail() {
      const file = event.target.files[0];
      if (file) {
        this.recipe.thumbnail = URL.createObjectURL(file)
      }
    },
    handleClickRemoveImage(index) {
      this.recipe.instruction[index].imageUrl = '';
    },
    handleClickRemoveThumbnail() {
      this.recipe.thumbnail = '';
    },
    handleClickCreateRecipe() {
      this.addRecipe(this.recipe)
      this.$router.push('/home')
    },
    handleClickEditRecipe() {
      this.deleteRecipe(this.recipe.recipeId)
      this.addRecipe(this.recipe)
      this.$router.push('/home')
    },
    getToday() {
      var date = new Date();
      var year = date.getFullYear();
      var month = ("0" + (1 + date.getMonth())).slice(-2);
      var day = ("0" + date.getDate()).slice(-2);
      return year + "-" + month + "-" + day;
    },
    loadEditData(recipeName) {
      try {
        const responseArray = JSON.parse(localStorage.getItem('recipes'));
        const response = responseArray.find(recipe => 
        recipe.recipeId === recipeName)
        this.recipe = response
      } catch (error) {
        console.error("게시물을 불러오는 중 오류가 발생했습니다.", error);
      }
    }
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
  },
}
</script>

<style lang="scss">
.edit-create-post-button {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border: solid 1px orange;
  border-radius: 10px;
  color: orange;
  box-sizing: border-box;
}
.edit-procedure-bar {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.edit-subtitle {
  padding: 30px;
  padding-top: 0px;
  font-size: 24px;
  font-weight: bold;
  box-sizing: border-box;
}
.edit-controler {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  text-align: center;
  left: 0;
  top: 50%;
}
.edit-controler-button-left {
  box-sizing: border-box;
  width: 35px;
  height: 100px;
  position: absolute;
  align-content: center;
  border: 1px solid orange;
  background: white;
  border-radius: 10px;
  color: orange;
  font-size: 24px;
  font-weight: 100;
  left: 5px;
}
.edit-controler-button-right {
  box-sizing: border-box;
  width: 35px;
  height: 100px;
  position: absolute;
  align-content: center;
  border: 1px solid orange;
  background: white;
  border-radius: 10px;
  color: orange;
  font-size: 24px;
  font-weight: 100;
  right: 5px;
}
.edit-editer {
  box-sizing: border-box;
  padding: 30px;
  padding-top: 0px;
  width: 100%;
}
.edit-image-input-icon {
  width: 50px;
  height: 50px;
}
.edit-image-input-button {
  display: none;
}
.edit-image-input {
  width: 100%;
  background: #ccc;
  border-radius: 10px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 4/3;
  margin-bottom: 10px;
}
.edit-image-container {
  width: 100%; 
  height: 100%; 
  aspect-ratio: auto 4/3;  
  object-position: center;
  margin-bottom: 10px;
}
.edit-image-souce {
  object-fit: cover; 
  height: 100%; 
  width: 100%; 
  border-radius:10px;
}
.edit-thumbnail-input {
  width: 100%;
  background: #ccc;
  border-radius: 10px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
}
.edit-thumbnail-container {
  width: 100%; 
  aspect-ratio: auto 1/1;  
  object-position: center;
}
.edit-thumbnail-souce {
  object-fit: cover; 
  height: 100%; 
  width: 100%; 
  border-radius:10px;
}
.editer-container {
  position: relative;
}
.edit-text-counter {
  color: #ccc;
  position: absolute;
  bottom: 20px;
  right: 10px;
  font-weight: 100;
}
.edit-text-counter-relative {
  color: #ccc;
  position: relative; 
  bottom: 43px; 
  left: 90%;
  font-weight: 100;
}
.edit-editer-title {
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  font-size: 18px;
  background-color: white;
  background-image: linear-gradient(to bottom, transparent 95%, #ccc 96%);
  background-size: 100% 2em;
  background-repeat: repeat-y;
  line-height: 2em;
  border: none;
}
.edit-editer-title:focus {
  outline: none;
  background-image: linear-gradient(to bottom, transparent 95%, orange 96%);
}
.edit-editer-title-three-lines {
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  font-size: 18px;
  background-color: white;
  background-image: linear-gradient(to bottom, transparent 95%, #ccc 96%);
  background-size: 100% 2em;
  background-repeat: repeat-y;
  line-height: 2em;
  border: none;
  height: 108px
}
.edit-editer-title-three-lines:focus {
  outline: none;
  background-image: linear-gradient(to bottom, transparent 95%, orange 96%);
}
.edit-editer-input{
  width: 100%;
  box-sizing: border-box;
  border: none;
  font-size: 18px;
  border-bottom: solid 2px #ccc;
  padding: 0px 0px 5px 5px;
  margin-bottom: 10px;
}
.edit-editer-input:focus{
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: 18px;
  border-bottom: solid 2px orange;
  padding: 0px 0px 5px 5px;
  margin-bottom: 10px;
}
.edit-recipe-container{
  margin-bottom: -20px;
}
.edit-recipe-description-title {
  font-size: 20px; margin-bottom: 10px; font-weight: 600;
}
.edit-button-add {
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
  background: white;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  margin-top: 10px;
  left: 50%;
  border: solid 1.5px orange;
  color:orange;
  transform: translate(-50%, 0%);
}
.edit-button-delete {
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  position: relative;
  left: 100%;
  transform: translate(-100%, 0);
  border: solid 1.5px red;
  background: white;
  font-size: 18px;
  font-weight: bold;
  color: red;
}
</style>