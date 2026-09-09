<template>
  <div class="header-search">
    <SvgIcon icon="search" />
    <input placeholder="Поиск фильмов, сериалов, комнат..." v-model="valueModel" />
  </div>
</template>

<script setup>

import SvgIcon from "@/components/icons/SvgIcon.vue";

const valueModel = defineModel('search');
</script>

<style lang="less">
@import "./search.less";
</style>