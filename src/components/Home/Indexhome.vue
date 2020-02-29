<template>
    <div class="home">
      我是首页
      <routers></routers>
    </div>
</template>

<script>
  import routers from "../routers";
    export default {
      name: "Indexhome",
      components: {routers}
    }
</script>

<style scoped>
.home{
  font-size: .16rem;
  text-align: center;
}
</style>
