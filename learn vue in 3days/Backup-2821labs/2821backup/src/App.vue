<script setup lang="ts">
import Navbar from './components/Navbar.vue'; 
</script>

<template>
  <div id="app">
    <Navbar /> <!-- Use Navbar with the correct casing -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
/* All styles are scoped to this component */
</style>
