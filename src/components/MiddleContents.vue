<template>
  <div id="middlecontents">
      <div id="minithumbnail"></div>
      <div>
          <div id="dateandname"><h5>yyyy-mm-dd</h5><h4>username</h4></div>
          <div><h2>title</h2></div>
          <div><h3>subtitle</h3></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#minithumbnail{
    width: 100px;
    height: 100px;
}
#dateandname{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
#middlecontents{
    display: grid;
    grid-template-columns: 100px 1fr;
}
</style>