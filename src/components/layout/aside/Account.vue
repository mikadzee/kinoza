<template>
  <div class="account-app">
    <RouterLink to="/account" v-if="store?.dataUser?.email">
      <span>A</span>
    </RouterLink>
    <RouterLink to="/auth" v-else class="no-account">
      <span>Войти</span>
    </RouterLink>
  </div>
</template>

<script setup>
  import { useAuthStore} from "@/stores/auth.ts";

  const store = useAuthStore();


</script>

<style lang="less">
@import "./account.less";
</style>