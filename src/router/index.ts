import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/home.view.vue"),
      },
      {
        path: "/worker",
        name: "Worker",
        component: () => import("@/views/worker.view.vue"),
      },
    ],
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
