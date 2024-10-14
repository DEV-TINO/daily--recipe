<template>
  <div class="recipe-container">
      <div class="recipe-main-title">{{ recipe.title }}</div>
      <div class="recipe-description">{{ recipe.description }}</div>
      <div class="recipe-metadata">{{ recipe.user_id }} • {{ recipe.created_at }}</div>
      <div v-if="recipe.thumbnail" class="recipe-thumbnail-container">
        <img :src="recipe.thumbnail" class="image">
      </div>
      <div class="recipe-instruction-title">재료</div>
      <div class="recipe-ingredient" v-for="(value, index) in recipe.ingredient" :key="index">
        <div class="recipe-ingredient-value">{{ value.name }}</div>
        <div class="recipe-ingredient-value">{{ value.quantity }}</div>
      </div>
      <div v-for="(value, index) in recipe.instruction" :key="index">
        <div class="recipe-instruction-title">{{ index + 1 }}. {{ value.title }}</div>
        <div v-if="value.imageUrl" class="recipe-image-container">
          <img :src="value.imageUrl" class="image">
        </div>
        <div class="recipe-description">{{ value.description }}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
  }
}
</script>

<style lang="scss">
.recipe-container {
  width: 100%;
  box-sizing: border-box;
}
.recipe-main-title {
  font-size: 40px;
  font-weight: bold;
}
.recipe-description {
  margin-top: 20px;
  font-size: 18px;
}
.recipe-metadata {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 100;
}
.recipe-ingredient {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  border-bottom: solid 1px orange;
  margin-bottom: 5px;
  padding-bottom: 2px;
  padding-left: 2px;
  width: 100%;
  font-size: 15px;
}
.recipe-instruction-title {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: bold;
}
.recipe-image-container {
  width: 100%; 
  height: 100%; 
  aspect-ratio: auto 4/3;
  object-position: center;
  .image {
    object-fit: cover; 
    height: 100%; 
    width: 100%; 
    border-radius:10px;
  }
}
.recipe-thumbnail-container {
  width: 100%; 
  aspect-ratio: auto 1/1; 
  object-position: center; 
  margin-top: 30px;
  .image {
    object-fit: cover; 
    height: 100%; 
    width: 100%;
    border-radius:10px;
  }
}
</style>