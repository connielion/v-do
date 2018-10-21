<template>
  <div class="hello">

    <h3>{{ msg }}</h3>
    <!--if not logged in-->
    <div v-if="!this.isLoggedIn">

    <button type="button" class="button button-outline loginbtn" @click="login()">Login</button>
    </div>

    <!--if logged in-->

    <div v-if="this.isLoggedIn">
        <h2>Hi {{ user.name }}</h2>
        <button class="button button-outline logoutbtn" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import { login, isLoggedIn, getProfile, logout } from "../util/auth.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    login() {
      login();
    },
    logout() {
      logout();
      this.isLoggedIn = false;
    }
  },
  data() {
    return {
      isLoggedIn: isLoggedIn(),
      user: getProfile()
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginbtn {
  color: #42b883;
  border-color: #42b883;
}
.loginbtn:hover {
  color: #fff;
  background-color: #42b883;
  border-radius: #35495e;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
