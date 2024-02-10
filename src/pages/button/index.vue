<template>
  <div class="p-8 w-full">
    <div class="flex flex-col gap-6">
      <el-card>
        <template #header>
          <span>Base</span>
        </template>
        <el-button>I'm a button</el-button>
        <el-button type="primary">I'm a button</el-button>
        <el-button type="success">I'm a button</el-button>
        <el-button type="warning">I'm a button</el-button>
        <el-button type="danger">I'm a button</el-button>
        <el-button type="info">I'm a button</el-button>
        <el-button disabled>I'm a disabled</el-button>
      </el-card>

      <el-card>
        <template #header>
          <span>Outline</span>
        </template>
        <el-button>I'm a button</el-button>
        <el-button type="primary" plain>I'm a button</el-button>
        <el-button type="success" plain>I'm a button</el-button>
        <el-button type="warning" plain>I'm a button</el-button>
        <el-button type="danger" plain>I'm a button</el-button>
        <el-button type="info" plain>I'm a button</el-button>
      </el-card>

      <el-card>
        <template #header>
          <span>With Icons</span>
        </template>
        <el-button>I'm a button</el-button>
        <el-button type="primary">
          <div class="i-lets-icons:save-light mr-2" />
          <span>I'm a button</span>
        </el-button>
        <el-button type="success">
          <div class="i-lets-icons:save-light mr-2" />
          <span>I'm a button</span>
        </el-button>
        <el-button type="warning" icon="">
          <div class="i-lets-icons:save-light mr-2" />
          <span>I'm a button</span>
        </el-button>
        <el-button type="danger">
          <div class="i-lets-icons:save-light mr-2" />
          <span>I'm a button</span>
        </el-button>
        <el-button type="info">
          <div class="i-lets-icons:save-light mr-2" />
          <span>I'm a button</span>
        </el-button>
      </el-card>
      <el-card>
        <template #header>
          <span>Icons</span>
        </template>
        <el-button circle><div class="i-lets-icons:save-light" /></el-button>
        <el-button circle type="primary">
          <div class="i-lets-icons:save-light"
        /></el-button>
        <el-button circle type="success">
          <div class="i-lets-icons:save-light"
        /></el-button>
        <el-button circle type="warning">
          <div class="i-lets-icons:save-light"
        /></el-button>
        <el-button circle type="danger">
          <div class="i-lets-icons:save-light"
        /></el-button>
        <el-button circle type="info">
          <div class="i-lets-icons:save-light"
        /></el-button>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
