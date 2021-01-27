<template>
  <div id="app">
    {{ titulo }}
    <hr>
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        titulo: "Teste data usando Vue JS!!",
      };
    },
  };
</script>

<style>
  #app {
    background-color: chocolate;
    color: white;
  }
</style>