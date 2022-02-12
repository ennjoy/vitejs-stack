<script lang="ts" setup>
import logo from '~/assets/images/logo.png'

</script>

<template>
  <div class="text-center text-[#2c3e50] mt-20">
    <img alt="Vue logo" :src="logo" class="flex mx-auto" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: Default
</route>