<template>
  <Header />
  <div class="container">
    <ToDo />
  </div>
</template>

<script>
import Header from '@/components/partials/Header.vue';
import ToDo from '@/components/toDo/ToDo.vue';

export default {
  name: 'App',
  components: {
    Header,
    ToDo,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
  @import '../node_modules/reset-css/reset.css';

  #app {
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
