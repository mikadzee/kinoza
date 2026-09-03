<template>
  <div class="field-form">
    <label :for="props.name">{{props.label}}</label>
    <input :name="props.name" v-model="modelValue" :placeholder="props.placeholder" :type="props.type"/>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  label: string,
  name: string,
  placeholder: string,
  type: string,
}>()

const modelValue = defineModel('value', {})
</script>

<style lang="less">
@import "./field-form.less";
</style>