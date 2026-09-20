<template>
  <div class="title-selection">
    <img v-if="img" :src="img"  />
    <div v-if="mark" class="mark" ></div>
    <h2>{{title}}</h2>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  img?: string,
  mark?: boolean,
}
defineProps<Props>()

</script>

<style lang="less">
@import "./title-selection";
</style>