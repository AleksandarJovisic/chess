<template>
    <Navbar />
    <div class="row home-div" >
      <ChessBoard class="col-xl-6 offset-xl-2 col-lg-6 offset-lg-2 col-md-8 offset-md-2 col-12"/>
      <Sidebar class="col-xl-2 offset-xl-2 col-lg-3 offset-lg-1 col-md-8 offset-md-2 col-12"/>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import ChessBoard from "../components/ChessBoard.vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
    name: 'Home',
    components:{
        ChessBoard,
        Sidebar,
        Navbar
    }
})
</script>
  
<style scoped lang="scss">
@import "@/scss/home.scss";
</style>
  