import { defineStore } from "pinia";
import { ref } from "vue";
import {type User} from "@/types/user.ts";

export const useAuthStore = defineStore("auth", () => {
  const dataUser = ref<User | null>(null);

  function setUser(user: User) {
    dataUser.value = user;
  }

  function clearUser() {
    dataUser.value = null;
  }

  return {
    dataUser,
    setUser,
    clearUser,
  };
});