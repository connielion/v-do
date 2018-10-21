<template>
  <div id="app">
    <div class="nav" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Vue-do</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
