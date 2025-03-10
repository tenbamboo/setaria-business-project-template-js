<template>
  <div class="error403Container">
    <img src="/static/images/base/403.png" class="bg" />
    <p class="title">403</p>
    <p class="info">抱歉，您无权访问此页面或联系管理员授权。</p>
    <div>
      <el-button size="large" type="primary" @click="gotoIndex">返回首页</el-button>
      <el-button size="large" type="primary" plain @click="gotoBack">返回上一页</el-button>
    </div>
  </div>
</template>
<script setup>
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();

  const gotoIndex = () => {
    router.replace("/");
  };
  const gotoBack = () => {
    router.back();
  };
</script>

<style lang="scss" scoped>
  .error403Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 20px;
    .bg {
      width: 250px;
    }
    .title {
      font-size: 30px;
      margin: 10px;
    }
    .info {
      margin: 10px 10px 20px;
    }
  }
</style>
