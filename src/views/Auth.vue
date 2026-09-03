<template>
  <section id="auth-form">
    <div class="container">
      <Intro class="intro"/>
      <WrapperForm class="wrapper-form"/>
    </div>
  </section>
</template>


<script setup lang="ts">
import Intro from "@/components/auth/Intro.vue";
import WrapperForm from "@/components/auth/WrapperForm.vue";
</script>

<style lang="less">
@import "./auth";
</style>