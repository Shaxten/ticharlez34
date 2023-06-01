<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>
  <router-view />
</template>

<script setup>
  import HelloWorld from './components/NavBar.vue'
</script>
