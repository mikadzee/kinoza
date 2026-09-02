<script setup lang="ts">
import Logo from "@/components/layout/aside/Logo.vue";
import Pages from "@/components/layout/aside/Pages.vue";
import Account from "@/components/layout/aside/Account.vue";
</script>
<template>
  <aside class="app-aside">
    <Logo class="logo"/>

    <Pages class="pages"/>

    <Account />
  </aside>
</template>

<style lang="less">
@import "./aside.less";
</style>