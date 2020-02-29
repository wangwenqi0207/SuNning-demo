<template>
    <div>
      <Headerlist></Headerlist>
      <Nowtime></Nowtime>
      <Goodproduct></Goodproduct>
      <Rushbuy></Rushbuy>
      <routers></routers>
    </div>
</template>

<script>
    import Headerlist from "./Headerlist";
    import Nowtime from "./Nowtime";
    import Goodproduct from "./Goodproduct";
    import Rushbuy from "./Rushbuy";
    import routers from "../routers";
    export default {
        name: "Index",
      components: {routers, Rushbuy, Goodproduct, Headerlist, Nowtime}
    }
</script>

<style scoped>
</style>
