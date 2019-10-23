// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import './components/firebaseInit';

const STORAGE_KEY = 'todo-storage';

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(user => {
  // check to see if !app

  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});

export default STORAGE_KEY;
/* eslint-disable no-new */
