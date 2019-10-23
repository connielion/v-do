<template>
  <div class="home">
    <img src="../assets/logo.png" alt="vue logo" class="logo" />
    <HelloWorld msg="Wecome to Vuedo" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style>
.logo {
  width: 100px;
  margin: 20px;
}
</style>

