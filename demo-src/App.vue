<template>
  <div class="container">
    <h1>Vue tabs with active line</h1>
    <simple />
  </div>
</template>

<script>
import Simple from '../example/Simple.vue';

export default {
  components: {
    Simple,
  },
};
</script>

<style>
  body {
    margin: 0;
  }

  h1 {
    text-align: center;
  }

  .container {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    min-width: 320px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

