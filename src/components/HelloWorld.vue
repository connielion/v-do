<template>
  <div class="container">
    <div class="row">
      <h3 class>{{msg}}</h3>
    </div>
    <div class="row">
      <a>
        <router-link to="/register">Register here!</router-link>
      </a>
    </div>
  </div>
</template>




<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  justify-content: center;
}
.row > a {
  font-size: 20px;
}
</style>
