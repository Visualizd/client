import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import Dashboard from "../components/Dashboard.vue";
import Projects from "../components/Projects.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:username",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/projects",
        component: Projects,
      },
      {
        path: "/",
        component: Dashboard,
      },
    ],
  },
];

const router = new VueRouter({
  mode: process.env.ROUTER_MODE,
  base: process.env.BASE_URL,
  routes,
});

export default router;
