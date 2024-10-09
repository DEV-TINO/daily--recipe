<template>
  <div class="recipe-container">
      <div class="recipe-main-title">{{ recipe.title }}</div>
      <div class="recipe-description">{{ recipe.description }}</div>
      <div class="recipe-metadata">{{ recipe.user_id }} • {{ recipe.created_at }}</div>
      <div v-if="recipe.thumbnail" style="width: 100%; aspect-ratio: auto 1/1; object-position: center; margin-top: 30px;">
        <img :src="recipe.thumbnail" style="object-fit: cover; height: 100%; width: 100%;border-radius:10px;">
      </div>
      <div class="recipe-instruction-title">재료</div>
      <div class="recipe-ingredient" v-for="(value, index) in recipe.ingredient" :key="index">
        <div class="recipe-ingredient-value">{{ value.name }}</div>
        <div class="recipe-ingredient-value">{{ value.quantity }}</div>
      </div>
      <div v-for="(value, index) in recipe.instruction" :key="index">
        <div class="recipe-instruction-title">{{ index + 1 }}. {{ value.title }}</div>
        <div v-if="value.imageUrl" style="width: 100%; height: 100%; aspect-ratio: auto 4/3;  object-position: center;">
          <img :src="value.imageUrl"  style="object-fit: cover; height: 100%; width: 100%; border-radius:10px;">
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

<style>

</style>