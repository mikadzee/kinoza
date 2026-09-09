<template>
  <main>
    <div class="container-default">
      <Aside class="aside"/>
      <div class="content">
        <Header/>
        <RouterView/>
      </div>
    </div>
  </main>
  <SvgSprite/>
</template>

<script setup lang="ts">
import SvgSprite from "@/components/icons/SvgSprite.vue";
import Aside from "@/components/layout/aside/Aside.vue";
import Header from "@/components/layout/header/Header.vue";
</script>

<style lang="less">
@import "./default.less";

</style>