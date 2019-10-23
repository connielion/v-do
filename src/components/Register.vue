<template>
  <div class="container">
    <div class="row">
      <h3>Welcome! Please register first.</h3>
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

          <button class="button r-button" type="submit" v-on:click="register">
            Register
            <i class="fas fa-user-plus"></i>
          </button>
        </fieldset>
      </form>
    </div>

    <div class="row">
      <a>
        <router-link to="/login">Click here to login</router-link>
      </a>
    </div>
  </div>
</template>



<script>
import firebase from "firebase";

export default {
  name: "register",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Your account has been created.");
            this.$router.go({ path: this.$router.path }); // re-render
            // alert("You have been successfully registered.");
          },
          err => {
            console.log(err.message);
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
.r-button {
  background-color: #fff;
  color: #288eec;
  border: 1px solid #000;
}
.r-button:hover {
  color: #fff;
  background-color: #0d63b2;
}

.button {
  border: 1px solid blue;
  transition: transform 0.2s;
}

.button:hover {
  transform: scale(1.2);
}
a {
  color: blue;
}
</style>
