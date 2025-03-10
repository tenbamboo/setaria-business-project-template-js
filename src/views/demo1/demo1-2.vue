<template>
  <div>
    {{ userinfo }}
    <el-button @click="setUser">设置用户 BY Pinia</el-button>

    <hr />

    test1:{{ test1 }} test2:{{ test2 }}
    <el-button @click="setTest1">设置Test1 BY Pinia</el-button>

    <el-button @click="setTest2">设置Test2 BY Pinia</el-button>
  </div>
</template>
<script setup>
  import { computed } from "vue";
  import { useBaseStore } from "setaria-business-framework";
  import { useDemo1Store } from "@store";
  // 用户信息
  const baseStore = useBaseStore();
  const userinfo = computed(() => baseStore.getUserInfo);
  function setUser() {
    baseStore.setUserInfo({ userId: 1 });
  }

  // 本地store定义相关

  const demo1Store = useDemo1Store();

  const test1 = computed(() => demo1Store.getDemo1Test1Info);
  const test2 = computed(() => demo1Store.getDemo1Test2Info);

  const setTest1 = () => {
    demo1Store.setTest1(123);
  };
  const setTest2 = () => {
    demo1Store.setTest2(223);
  };
</script>
