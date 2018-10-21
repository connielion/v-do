import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

import { isLoggedIn } from "../util/auth";

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: "/unauthorized"
    });
  } else {
    next();
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue")
    },
    {
      path: "/todo",
      name: "todo",
      beforeEnter: requireAuth,
      component: () => import("../views/Todo.vue")
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("../views/Callback.vue")
    },
    {
      path: "/unauthorized",
      name: "unauthorized",
      component: () => import("../views/Unauthorized.vue")
    }
  ]
});
