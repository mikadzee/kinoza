import { createRouter, createWebHistory, } from "vue-router";


const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "auth",
        name: "auth",
        component: () => import("@/views/Auth.vue"),
      },
    ]
  },
]


  export const router = createRouter({
    routes,
    history: createWebHistory()
  })