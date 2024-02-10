<template>
  <div class="min-h-dvh">
    <Header></Header>
    <div class="flex items-start h-full">
      <Aside></Aside>
      <Main>
        <slot />
      </Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Aside from "./Aside.vue";
import Main from "./Main.vue";
</script>

<style scoped></style>
