<template>
  <div class="sticky z-10 w-full top-0 left-0 shadow dark:bg-[#000]">
    <el-menu mode="horizontal">
      <el-menu-item index="1">Element Plus</el-menu-item>
      <el-menu-item h="full" @click="toggleDark()">
        <button
          class="border-none w-full bg-transparent cursor-pointer"
          style="height: var(--ep-menu-item-height)"
        >
          <i i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { toggleDark } from "~/composables";
</script>

<style scoped></style>
