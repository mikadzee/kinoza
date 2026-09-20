<template>
  <section
      v-if="props.video.name"
      class="video-backdrop"
      :style="{
      background: `url(${props.video.backdrop || '/images/banners/hero-banner.png'}) no-repeat center / cover`
    }"
  >
    <div class="wrapper">
      <div class="content">
        <div class="info">
          <div class="rating">
            <SvgIcon icon="star" />
            <span>{{ props.video.rating }}</span>
          </div>

          <p>{{ dataInfo }}</p>
        </div>

        <h2 class="title">
          {{ props.video.name }}
        </h2>

        <p class="description">
          {{ props.video.description }}
        </p>
      </div>

      <div class="actions">
        <RouterLink to="#">
          <SvgIcon icon="play" />
          <span>Смотреть вместе</span>
        </RouterLink>

        <RouterLink to="#">
          <SvgIcon icon="plus" />
          <span>В библиотеку</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Video } from "@/types/videos.ts";

import SvgIcon from "@/components/icons/SvgIcon.vue";

interface Props {
  video: Video;
}

const props = defineProps<Props>();

const dataInfo = computed(() => {
  return `${props.video.genres[0]?.name ?? ""} • ${props.video.releaseYear} • ${Math.round(
      props.video.durationSec / 60
  )} мин.`;
});
</script>

<style lang="less">
@import "./banner.less";
</style>