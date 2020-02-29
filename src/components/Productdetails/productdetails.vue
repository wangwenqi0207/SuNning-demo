<template>
    <div>
      <Swiperdetails></Swiperdetails>
      <Detailsheader></Detailsheader>
      <Detailcontent></Detailcontent>
      <Detailfooter></Detailfooter>
    </div>
</template>

<script>
    import Swiperdetails from "./Swiperdetails";
    import Detailsheader from "./Detailsheader";
    import Detailcontent from "./Detailcontent";
    import Detailfooter from "./Detailfooter";
    export default {
      name: "productdetails",
      components: {Detailsheader,Detailcontent,Swiperdetails,Detailfooter},
    }
</script>

<style scoped>

</style>
