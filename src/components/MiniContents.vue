<template>
  <div class="align">
    <div class="mini-thumbnail"></div>
    <div class="title">{{ minicontents.title }}</div>
    <div class="discription">{{ minicontents.discription }}</div>
  </div>
</template>

<script>
export default {
  name: 'MiniContents',
  props: {
    minicontents: Object,
    
  },
}
</script>

<style>
.mini-thumbnail {
  border-radius: 10px;
  background-color: #999;
  width: 100px;
  height: 100px;
}
</style>