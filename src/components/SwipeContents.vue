<template>
  <div class="large-content-view">
    <div class="large-thumbnail">
      <img :src="contentData.thumbnail" class="thumbnail">
    </div>
    <div class="contents">
      <div class="title">{{ contentData.title }}</div>
      <div class="discription">{{ contentData.discription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentData: Object,
  }
}
</script>

<style lang="scss">
.large-content-view {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 180px 1fr;
  .large-thumbnail {
    border-radius: 10px;
    background-color: #999;
    width: 180px;
    height: 180px;
    .thumbnail {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>