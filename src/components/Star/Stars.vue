<template>
  <div class="star">
    我是星星页面
    <routers></routers>
  </div>
</template>

<script>
  import routers from "../routers";
    export default {
        name: "Stars",
      components: {routers}
    }
</script>

<style scoped>
  .star{
    font-size: .16rem;
    text-align: center;
  }
</style>
