<template>
  <div>
    <div class="hello-would commom-css">Hello Demo1-1</div>

    <bf-hello-would> dddd </bf-hello-would>

    <el-button @click="testThrowServiceException">ServiceError</el-button>

    <el-button @click="testThrowApplicationException">ApplicationError</el-button>

    <el-button @click="test404ErrorData">测试404错误</el-button>

    <el-button @click="test500ErrorData">测试500错误</el-button>

    <el-button @click="testJsException">测试JS报错</el-button>

    <el-button @click="getDataList({})">接口调用</el-button>

    <el-button @click="getDataListByMany">controllRepeat测试</el-button>

    <el-button @click="testDownload">测试下载</el-button>
  </div>
</template>
<script setup>
  import {
    getDataList,
    getDataListMany,
    test404ErrorData,
    test500ErrorData,
    testDownload,
  } from "./service";
  import { ApplicationError, ServiceError } from "@setaria/setaria-ts";

  // console.log(Framework, MyTest);
  const testThrowServiceException = () => {
    throw new ServiceError("SYSCOM002E", "1000-粗我哦分时间段里开放时间的");
    // console.log(1111);
  };
  // function testThrowServiceException() {
  // }
  function testThrowApplicationException() {
    throw new ApplicationError("SYSCOM002E", "1000-粗我哦分时间段里开放时间的");
  }
  function getDataListByMany() {
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
    getDataListMany({});
  }

  function testJsException() {
    const a = 0;
    const cc = a.valueOf;
    console.log(cc.c.dd);
  }
</script>

<style lang="scss">
  @import url(./index.scss);
  .hello-would {
    padding: 10px;
  }
</style>
