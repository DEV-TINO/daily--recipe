<template>
  <div class="list-item">
    <div class="thumbnail-container">
      <img :src="previewData.thumbnail" class="thumbnail">
    </div>
    <div class="info-container">
      <div class="metadata">
        <div class="date">{{ previewData.created_at }}</div>
        <div class="name">{{ previewData.user_id }}</div>
      </div>
      <div class="title">{{ previewData.title }}</div>
      <div class="discription">{{ previewData.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previewData: Object,
  },
}
</script>

<style lang="scss">
.list-item {
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 20px;
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
}
.info-container {
  margin-left: 10px;
  .metadata {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .name {
      text-align: right;
      font-size: 14px;
    }
    .date {
      font-size: 10px;
    }
  }
}
</style>