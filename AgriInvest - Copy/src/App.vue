<template>
  <div id="app">
    <router-view />
    <!-- This will render the matched component for the route -->
    <Footer />
  </div>
</template>

<script>
import Footer from './components/FooterComponent.vue';

export default {
  name: "App",
  components: {
    Footer, // Register Footer inside the components object
  },
};
</script>

<style>
/* Add any styles for your app here */
</style>
