<template>
  <div class="callback">
    <h1>Callbacking stuff...</h1>
  </div>
</template>

<script>
import { handleAuth } from "../util/auth.js";

export default {
  name: "Callback",
  beforeMount() {
    handleAuth(err => {
      if (err) {
        console.log(err);
        return;
      }
      // login success - redirect to Todo.vue
      this.$router.push("/todo");
    });
  }
};
</script>
