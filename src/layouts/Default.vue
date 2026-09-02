<template>
  <main>
    <div class="container-default">
      <Aside class="aside"/>
      <RouterView />
    </div>
  </main>
  <SvgSprite />
</template>

<script setup lang="ts">
import SvgSprite from "@/components/icons/SvgSprite.vue";
import Aside from "@/components/layout/aside/Aside.vue";
</script>

<style lang="less">
@import "./default.less";

</style>