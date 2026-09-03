<template>
  <form class="auth-form register" @submit.prevent="sendForm()">
    <div class="fields">
      <FieldForm v-model:value="name" label="имя" name="auth-name" placeholder="Alex" type="text"/>
      <FieldForm v-model:value="email" label="email" name="auth-login" placeholder="alex@kinoza.ru" type="email"/>
      <FieldForm v-model:value="password" label="пароль" name="auth-password" placeholder="*****" type="password"/>
      <FieldForm v-model:value="confirmPassword" label="подтвердите пароль" name="auth-confirmPassword" placeholder="*****" type="password"/>
    </div>

    <div class="reset-pass">
      <button @click="checkbox= !checkbox" :style="{'color': checkbox ? '#fff' : '#A7A297'}">Запомнить меня</button>
    </div>

    <button type="submit" class="submit">Зарегестрироваться</button>
  </form>
</template>

<script setup lang="ts">
import FieldForm from "@/components/ui/FieldForm.vue";
import {ref} from "vue";
import {validForm, type MessageValid, type DataForm } from "@/helpers.js";

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");
const checkbox = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'send', data: DataForm): void;
  (e: 'error', error: string): void;
}>();

function sendForm() {
  const data: DataForm = {
    type: 'register',
    email: email.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    checkbox: checkbox.value,
  }

  const checkForm: MessageValid = validForm(data);
  if(!checkForm.success) return emit('error', checkForm.message);

  return emit('send', data);
}
</script>
