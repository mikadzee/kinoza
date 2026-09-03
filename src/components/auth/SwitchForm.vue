<template>
  <div class="switch-form">
    <div class="runner" :class="classMode"></div>

    <button :class="mode == 'login' ? 'active' : ''" @click="sendMode('login')">Вход</button>
    <button :class="mode == 'register' ? 'active' : ''" @click="sendMode('register')">Регистрация</button>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const mode = ref<'login'|'register'>('login');
const classMode = computed<string>(() => mode.value === 'login'? 'right' : 'left');
const emit = defineEmits<{
  (e: 'toggleMode', mode: string): void
}>();

function sendMode(type: 'login'|'register') {
  mode.value = type;
  emit('toggleMode', type);
}
</script>

<style lang="less">
@import "./switch-form.less";

</style>