<script setup lang="ts">
import Banner from "@/components/home/Banner.vue";
import type {Video} from "@/types/videos.ts";

const video: Video = {
  id: 1,
  name: "Interstellar",
  description: "Наше время на Земле подошло к концу. Команда исследователей отправляется в самую важную миссию в истории человечества: путешествие за пределы нашей галактики, чтобы узнать, есть ли у человечества будущее среди звезд.",

  type: "movie",

  poster: null,
  backdrop: null,

  genres: [
    {
      id: 1,
      name: "Драма"
    }
  ],

  releaseYear: 2014,
  durationSec: 150205,
  rating: 8.7,

  createdAt: "wwd",
  updatedAt: "wdwdw"
}
</script>

<template>
  <div id="home-app">
    <Banner :video="video" />

  </div>
</template>