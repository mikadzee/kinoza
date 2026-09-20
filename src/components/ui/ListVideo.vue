<template>
  <div class="selection-videos">
    <TitleSelection
        :title="titleData.title"
        :mark="titleData.mark"
        :img="titleData.img"
    />

    <div class="list">
      <template v-if="selectType">
        <RoomCard
            v-for="room in rooms"
            :key="room.id"
            :room="room"
        />
      </template>

      <template v-else>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleSelection from "@/components/ui/TitleSelection.vue";
import RoomCard from "@/components/ui/cards/RoomCard.vue";

import type {
  LiveRoom,
  Video,
} from "@/types/videos.ts";

interface TitleData {
  title: string;
  mark: boolean;
  img: string;
}

interface Props {
  titleData: TitleData;

  selectType: boolean;

  listData: Video[] | LiveRoom[];
}

const props = defineProps<Props>();

const rooms = props.listData as LiveRoom[];
</script>

<style lang="less">
@import "list-video.less";
</style>