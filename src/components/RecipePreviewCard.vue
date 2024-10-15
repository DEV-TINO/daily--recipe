<template>
  <div class="card">
    <div class="thumbnail"></div>
    <div class="title">{{ simplecontents.title }}</div>
    <div class="discription">{{ simplecontents.discription }}</div>
  </div>
</template>

<script>
export default {
  name: 'SimpleContents',
  props: {
    simplecontents: Object,
  },
}
</script>

<style lang="scss">
.card {
  .thumbnail {
    border-radius: 10px;
    background-color: #999;
    width: 100px;
    height: 100px;
  }
  .title {
    padding-left: 3px;
    font-size: 20px;
    font-weight: bold;
  }
  .discription{ 
    padding-left: 3px;
    font-size: 14px;
    color: #777777;
  }
}
</style>