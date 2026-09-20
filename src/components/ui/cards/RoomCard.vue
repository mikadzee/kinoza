<template>
  <div
      class="room-card"
      :style="{
      background: `url(${room.video.backdrop || '/images/banners/hero-banner.png'}) no-repeat center / cover`
    }"
  >
    <div class="wrapper">
      <div class="head">
        <div class="live">
          <div></div>
          <p>live</p>
        </div>

        <div class="live-users">
          <SvgIcon icon="users" />
          <p>{{ room.peoples.length }} чел.</p>
        </div>
      </div>

      <div class="content">
        <div class="title">
          <h2>{{ room.title }}</h2>
          <p>Фильм: {{ room.video.name }}</p>
        </div>

        <div class="peoples">
          <img
              v-for="person in visiblePeoples"
              :key="person.id"
              :src="person.avatar"
              :alt="person.name"
          />

          <div
              v-if="otherPeoplesCount > 0"
              class="other"
          >
            <p>+{{ otherPeoplesCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import SvgIcon from "@/components/icons/SvgIcon.vue";
import type { LiveRoom } from "@/types/videos.ts";

interface Props {
  room: LiveRoom;
}

const props = defineProps<Props>();

const visiblePeoples = computed(() => {
  return props.room.peoples.slice(0, 3);
});

const otherPeoplesCount = computed(() => {
  return Math.max(props.room.peoples.length - 3, 0);
});
</script>

<style lang="less">
@import "./room-card.less";
</style>