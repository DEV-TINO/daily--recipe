<template>
  <div class="card">
    <div class="thumbnail-container">
      <img :src="previewContent.thumbnail" class="thumbnail">
    </div>
    <div class="title">{{ previewContent.title }}</div>
    <div class="discription">{{ previewContent.discription }}</div>
  </div>
</template>

<script>
export default {
  props: {
    previewContent: Object,
  },
}
</script>

<style lang="scss">
.card {
  .thumbnail-container {
    border-radius: 10px;
    background-color: #999;
    width: 100px;
    height: 100px;
    .thumbnail {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
  .title {
    width: 100px;
    font-size: 20px;
    font-weight: bold;
  }
  .discription{ 
    width: 100px;
    height: 38px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #777777;
  }
}
</style>