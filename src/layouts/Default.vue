<template>
  <main>
    <div class="container-default">
      <Aside class="aside"/>
      <div class="content">
        <Header v-if="!!store.dataUser"/>
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
import {useAuthStore} from "@/stores/auth.ts";

const store = useAuthStore();
</script>

<style lang="less">
@import "./default.less";

</style>