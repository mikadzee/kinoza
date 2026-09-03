<template>
  <div class="auth-wrapper-form">
    <h2>Продолжить просмотр</h2>

    <SwitchForm class="switch" @toggleMode="(currentMode:'register' | 'login')=> mode = currentMode"/>

    <div class="wrapper">
      <KeepAlive>
        <LoginForm @send="login" v-if="mode === 'login'"/>
        <RegisterForm @send="register" v-else/>

      </KeepAlive>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type DataForm} from "@/helpers.ts";
import SwitchForm from "@/components/auth/SwitchForm.vue";
import {ref} from "vue";
import LoginForm from "@/components/auth/forms/LoginForm.vue";
import RegisterForm from "@/components/auth/forms/RegisterForm.vue";

const mode = ref<'register' | 'login'>('login');

function register(data: DataForm) {
  console.log(data)
}

function login(data: DataForm) {
  console.log(data);
}

</script>

<style lang="less">
@import "./wrapper-form.less";
@import "./forms/form.less";
</style>