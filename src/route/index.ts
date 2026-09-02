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
        path: "",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
    ]
  },
  {
    path: "/auth",
    component: () => import("@/layouts/Auth.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/Login.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/Register.vue")
      },
    ]
  }
]


  export const router = createRouter({
    routes,
    history: createWebHistory()
  })