<template>
  <div class="account-app">
    <RouterLink to="/account" v-if="store?.dataUser?.email">
      <span>A</span>
    </RouterLink>
    <RouterLink to="/auth" v-else class="no-account">
      <SvgIcon icon="register" />
    </RouterLink>
  </div>
</template>

<script setup>
  import { useAuthStore} from "@/stores/auth.ts";
  import SvgIcon from "@/components/icons/SvgIcon.vue";

  const store = useAuthStore();


</script>

<style lang="less">
@import "./account.less";
</style>