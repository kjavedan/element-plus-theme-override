<template>
  <div class="overflow-y-scroll min-h-svh">
    <el-menu class="el-menu-vertical-demo pb-60">
      <el-sub-menu
        v-for="(subMenu, i) in navConfigData"
        :key="i"
        :index="(i + 1).toString()"
      >
        <template #title index="1">
          <i class="i-lucide:component mr-2" />
          <span>{{ subMenu.title }}</span>
        </template>

        <!-- BASEC -->
        <el-menu-item-group
          v-for="(group, index) in subMenu.groups"
          :key="index"
          :title="group.title"
        >
          <el-menu-item
            v-for="(item, j) in group.items"
            :key="j"
            :index="(i + 1 - j + 1).toString()"
            @click="router.push({ path: item.path })"
            >{{ item.title }}</el-menu-item
          >
        </el-menu-item-group>

        <el-sub-menu index="1-4">
          <template #title><span>itemdrgha four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { navConfigData } from "./config-navigation.ts";

const router = useRouter();
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
