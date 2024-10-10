<template>
  <div class="align">
    <div class="simple-thumbnail"></div>
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

<style>
.simple-thumbnail {
  border-radius: 10px;
  background-color: #999;
  width: 100px;
  height: 100px;
}
</style>