<script setup lang="ts">
import Search from "@/components/layout/header/Search.vue";
import CreateRoomLink from "@/components/layout/header/CreateRoomLink.vue";
import Notification from "@/components/layout/header/Notification.vue";
</script>
<template>
  <header class="header-app">
    <Search />

    <div class="other">
      <CreateRoomLink />
      <Notification />
    </div>
  </header>
</template>

<style lang="less">
@import "./header.less";
</style>