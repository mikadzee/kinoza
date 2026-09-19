<template>
  <div :class="['switch-form', {'active': isLogin}]">
    <div class="runner"></div>
    <button @click="isLogin = true">Вход</button>
    <button @click="isLogin = false">Регистрация</button>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const isLogin = ref<boolean>(false);
const emit = defineEmits<{
  (e: 'toggleForm', toggle: boolean): void
}>();

watch(isLogin, () => {
  emit('toggleForm', isLogin.value);
})
</script>

<style lang="less">
@import "./switch-form.less";

</style>