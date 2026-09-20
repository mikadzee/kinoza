<script setup lang="ts">
import Banner from "@/components/home/Banner.vue";
import ListVideo from "@/components/ui/ListVideo.vue";

import type {
  LiveRoom,
  Video,
} from "@/types/videos.ts";

const video: Video = {
  id: 1,

  name: "Interstellar",

  description:
      "Наше время на Земле подошло к концу. Команда исследователей отправляется в самую важную миссию в истории человечества: путешествие за пределы нашей галактики, чтобы узнать, есть ли у человечества будущее среди звезд.",

  type: "movie",

  poster: "/images/movies/interstellar-poster.jpg",
  backdrop: "/images/banners/hero-banner.png",

  genres: [
    {
      id: 1,
      name: "Драма",
    },
    {
      id: 2,
      name: "Фантастика",
    },
  ],

  releaseYear: 2014,

  durationSec: 10140,

  rating: 8.7,

  isActive: true,

  createdAt: "2026-09-20T10:00:00Z",
  updatedAt: "2026-09-20T10:00:00Z",
};

const liveRooms: LiveRoom[] = [
  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },
  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },
  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },
  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },
  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },
  {
    id: 1,

    title: "Окунаемся в черные дыры 🌌",

    video,

    peoples: [
      {
        id: 1,
        name: "juzz",
        avatar: "/images/banners/people.png",
      },
      {
        id: 2,
        name: "alex",
        avatar: "/images/banners/people.png",
      },
      {
        id: 3,
        name: "max",
        avatar: "/images/banners/people.png",
      },
      {
        id: 4,
        name: "nikita",
        avatar: "/images/banners/people.png",
      },
      {
        id: 5,
        name: "artem",
        avatar: "/images/banners/people.png",
      },
    ],
  },

  {
    id: 2,

    title: "Пересматриваем Интерстеллар 🚀",

    video,

    peoples: [
      {
        id: 6,
        name: "dima",
        avatar: "/images/banners/people.png",
      },
      {
        id: 7,
        name: "kirill",
        avatar: "/images/banners/people.png",
      },
      {
        id: 8,
        name: "roma",
        avatar: "/images/banners/people.png",
      },
    ],
  },

];

const liveRoomsTitle = {
  title: "Смотрят сейчас",
  mark: true,
  img: "",
};
</script>

<template>
  <div id="home-app">
    <Banner :video="video"/>

    <ListVideo
        :title-data="liveRoomsTitle"
        :select-type="true"
        :list-data="liveRooms"
    />
  </div>
</template>