<template>
  <div class="list-item-contents">
    <div class="card-thumbnail"></div>
    <div class="list-item-info-container">
      <div class="date-name">
        <div class="date">yyyy-mm-dd</div>
        <div class="list-item-user-name">username</div>
      </div>
      <div class="title">title</div>
      <div class="discription">subtitle</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.list-item-contents {
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: 20px;
}
.date-name {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.list-item-info-container {
  margin-left: 10px;
}
.list-item-user-name {
  text-align: right;
  font-size: 14px;
}
.date {
  font-size: 10px;
}
</style>