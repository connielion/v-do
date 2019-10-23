<template>
  <div id="app">
    <div class="nav" id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/register" v-if="!isLoggedIn">Register |</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login |</router-link>
      <span v-if="isLoggedIn">
        <b>Welcome {{ currentUser }}!</b> |
      </span>
      <router-link to="/todo" v-if="isLoggedIn">Tasks |</router-link>
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link>|
      <button class="button" v-on:click="logout" v-if="isLoggedIn">Logout</button>
    </div>

    <router-view />
  </div>
</template>

<script>
import firebaseApp from "./components/firebaseInit.js";
import firebase from "firebase";

export default {
  name: "App",

  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      // is logged in
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //alert("User logged out.");
          this.$router.go({ path: this.$router.path }); // re-render
        });
    }
  }
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
  font-weight: 700px;
  margin-bottom: 20px;
}
</style>
