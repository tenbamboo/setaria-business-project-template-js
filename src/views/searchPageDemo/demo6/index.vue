<template>
  <div>
    <!--
    通过本Demo可了解通过Swagger生成的Schema来生成页面的元素
  -->
    <bf-search-page
      :schema="schema"
      :condition-schema="conditionSchema"
      :table-schema="tableSchema"
      :show-oper="true"
      :oper-buttons="getOperButton"
      :oper-width="'200'"
      :request="handdlerRequest"
      @oper-button-click="handlerOperButtonClick"
    >
      <!-- condition sex 自定义渲染内容 -->
      <template #condition.sex="scope">
        <bf-dict-select v-model="scope.data.sex" :dict-id="'sex'" />
      </template>
      <!-- table sex 自定义渲染内容 -->
      <template #table.sex="scope">
        <bf-dict-select
          v-model="scope.data.sex"
          :label-mode="scope.status !== 'edit'"
          :dict-id="'sex'"
        />
      </template>
    </bf-search-page>
  </div>
</template>

<script setup name="searchPageDemo6">
  import { getSchema } from "setaria-business-framework";
  import { ElMessage } from "element-plus";

  import { apiGetDataList } from "./service";

  import { reactive } from "vue";

  //  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！
  // Demo 为 src/config/schema/的内容,这里的内容通过构建脚本自动生成的
  // 请配置 项目根目录下的 .swagger-to-jsonschema-config 内容,指定Swagger地址和Swagger的实例名称
  // UserInfo 为Swagger接口中的操作实体Bean名称
  // 通过 getSchema 方法直接抓取对应config.json下的 UserInfo 对象
  //  以下代码等同于 在data中定义的schema内容
  const schema = reactive(getSchema("Demo", "UserInfo"));

  // const schema = reactive({
  //   properties: {
  //     fullName: { type: "string", title: "用户名" },
  //     sex: { type: "string", title: "性别" },
  //     status: {
  //       type: "integer",
  //       title: "状态",
  //     },
  //     userName: { type: "string", title: "用户姓名" },
  //     userNum: { type: "string", title: "用户号" },
  //     whomodified: { type: "string", title: "编辑人" },
  //     workDate: {
  //       type: "string",
  //       description: "",
  //       format: "date-time",
  //       title: "工作时间",
  //     },
  //   },
  // });

  //  ！！！！！！！！！！！！关注这里 结束 ！！！！！！！！！！！！！！！！
  // 通过schema 初始化 conditionData model内容
  const conditionSchema = reactive(["sex", "userNum", "fullName", "workDate"]);

  const tableSchema = reactive([
    "fullName", // 用户名
    "sex", // 性别
    "userName", // 用户号
    "userNum", // 用户分类
    "workDate", // 工作时间
    "whomodified", // 编辑人
  ]);

  const handdlerRequest = (pageInfo) => {
    return apiGetDataList(pageInfo);
  };

  const getOperButton = ({ row }) => {
    // 这里返回一个数组
    // 也可以通过item的当前行数据,来动态控制显示按钮
    console.log("渲染当前操作行数据", row);
    return [
      {
        key: "sync",
        label: "同步",
      },
      {
        key: "roolback",
        label: "回滚",
      },
    ];
  };
  // 点击按钮之后的回调
  const handlerOperButtonClick = (key, { row }) => {
    // 通过key 来判断用户点击的什么按钮
    // 通过row 可获取当前行的数据
    console.log("你点击的当前操作行", row);
    if (key === "sync") {
      ElMessage.success("你点击了同步");
    } else if (key === "roolback") {
      ElMessage.success("你点击了回滚");
    }
  };
</script>

<style lang="scss" scoped></style>
