import { createRouter, createWebHistory } from "vue-router";

import { paths } from "./paths";

import Home from "~/pages/home/index.vue";
import Button from "~/pages/button/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: paths.home,
      name: "home",
      component: Home,
    },
    {
      path: paths.components.button,
      name: "button",
      component: Button,
    },
  ],
});

export default router;
