<template>

    <div id="lrgecontentview">
      <div id="largethumbnail"></div>
      <div id="contents">
        <h2>title</h2>
        <h3>discriptions</h3>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#lrgecontentview{
    display: grid;
    grid-template-columns: 180px 0fr;
}
#largethumbnail{
    width: 180px;
    height: 180px;
}
</style>