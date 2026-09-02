<template>
  <nav class="nav-app">
    <ul class="list">
      <li v-for="page in pages">
        <RouterLink :to="page.link">
          <SvgIcon :icon="page.icon" />
          <span>{{page.name}}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="less">
@import "./pages.less";
</style>

<script setup lang="ts">
import SvgIcon from "@/components/icons/SvgIcon.vue";

interface Page {
  link: string;
  id: number;
  name: string;
  icon: string;
}

const pages: Page[] = [
  {
    link: "/",
    id: 0,
    name: "Главная",
    icon: "home",
  },
  {
    link: "/catalog",
    id: 1,
    name: "Каталог",
    icon: "catalog",
  },
  {
    link: "/serials",
    id: 2,
    name: "Сериалы",
    icon: "serials",
  },
  {
    link: "/favorites",
    id: 3,
    name: "Избранное",
    icon: "heart",
  },
  {
    link: "/search",
    id: 4,
    name: "Поиск",
    icon: "search",
  },
]
</script>