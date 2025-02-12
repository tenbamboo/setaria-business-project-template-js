<script setup>
  // import { reactive } from "vue";
  // import type { SchemaProps } from "setaria-components";
  import MainLayout from "./components/layout/index.vue";
  import { useRouter } from "vue-router";
  const router = useRouter();

  const gotoDemo1 = () => {
    router.push({
      path: "/demo1/demo1-1",
    });
  };
  const gotoDemo2 = () => {
    router.push({
      path: "/demo1/demo1-2",
    });
  };
  const gotoDemo3 = () => {
    router.push({
      path: "/demo1/demo1-3",
    });
  };
  const gotoDemo4 = () => {
    router.push({
      path: "/demo2/demo2-1",
    });
  };
</script>

<template>
  <el-button @click="gotoDemo1">接口测试</el-button>
  <el-button @click="gotoDemo2">Pinia测试</el-button>
  <el-button @click="gotoDemo3">国际化测试</el-button>
  <el-button @click="gotoDemo4">表格组件测试</el-button>
  <hr />
  <main-layout />
</template>

<style scoped></style>
