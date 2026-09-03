<template>
  <form class="auth-form login" @submit.prevent="sendForm()">
    <div class="fields">
      <FieldForm v-model:value="email" label="email" name="auth-login" placeholder="alex@kinoza.ru" type="email"/>
      <FieldForm v-model:value="password" label="пароль" name="auth-password" placeholder="*****" type="password"/>
    </div>
    <div class="reset-pass">
      <button @click="checkbox= !checkbox" :style="{'color': checkbox ? '#fff' : '#A7A297'}">Запомнить меня</button>

      <RouterLink to="/reset-password">Забыли пароль?</RouterLink>
    </div>
    <button type="submit" class="submit">Войти</button>
  </form>
</template>

<script setup lang="ts">
import FieldForm from "@/components/ui/FieldForm.vue";
import {ref} from "vue";
import {validForm, type MessageValid, type DataForm } from "@/helpers.js";

const checkbox = ref<boolean>(false);
const email = ref<string>("");
const password = ref<string>("");
const emit = defineEmits<{
  (e: 'send', data: DataForm): void;
  (e: 'error', error: string): void;
}>();

function sendForm() {
  const data: DataForm = {
    email: email.value,
    password: password.value,
    checkbox: checkbox.value,
  }
  const checkForm: MessageValid = validForm(data);

  if(!checkForm.success) return emit('error', checkForm.message);

  return emit('send', data);
}
</script>

<style lang="less">
</style>