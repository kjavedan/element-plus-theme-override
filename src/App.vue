<template>
  <div>
    <el-config-provider namespace="ep">
      <Layout>
        <RouterView />
      </Layout>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import Layout from "~/layouts/index.vue";
</script>

<style scoped></style>
