<template>
  <div class="container">
    <div class="row">
      <h3>Login</h3>
    </div>
    <div class="row">
      <form>
        <fieldset>
          <label for="email">
            Email
            <i class="fas fa-envelope"></i>
          </label>
          <input type="text" placeholder="johnsmith@gmail.com" id="email" v-model="email" />

          <label for="password">
            Password
            <i class="fas fa-lock"></i>
          </label>
          <input type="password" id="password" v-model="password" />

          <button class="button loginbtn" type="submit" v-on:click="login">
            Login
            <i class="fas fa-sign-in-alt"></i>
          </button>
        </fieldset>
      </form>
    </div>
    <div class="row">
      <a>
        <router-link to="/register">Don't have an account? Register here.</router-link>
      </a>
    </div>
  </div>
</template>



<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You're logged in.`);
            this.$router.go({ path: this.$router.path }); // re-render
          },
          err => {
            alert(err.message + ` If you are new, please go register.`);
            //console.log(err.message);
          }
        );

      e.preventDefault();
    }
  }
};
</script>




<style scoped>
.row {
  display: flex;
  justify-content: center;
}
.loginbtn {
  color: #00a1f0;
  background-color: white;
  border: 1px solid black;
  transition: transform 0.2s;
}
.loginbtn:hover {
  color: #007fbd;

  transform: scale(1.2);
}

a {
  color: #42b983;
}
</style>
