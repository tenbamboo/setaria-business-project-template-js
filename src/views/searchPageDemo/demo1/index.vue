<template>
  <div>
    <!-- 通过本Demo基本了解search-page组件的使用  -->
    <bf-search-page
      :schema="schema"
      :condition-schema="conditionSchema"
      :table-schema="tableSchema"
      :request="handdlerRequest"
    />
  </div>
</template>

<script setup name="searchPageDemo1">
  import { apiGetDataList } from "./service";

  import { reactive } from "vue";

  const schema = reactive({
    properties: {
      fullName: { type: "string", title: "用户名" },
      sex: { type: "string", title: "性别" },
      status: {
        type: "integer",
        title: "状态",
      },
      userName: { type: "string", title: "用户姓名" },
      userNum: { type: "string", title: "用户号" },
      whomodified: { type: "string", title: "编辑人" },
      workDate: {
        type: "string",
        description: "",
        format: "date-time",
        title: "工作时间",
      },
    },
  });
  const conditionSchema = reactive(["userNum", "fullName", "workDate"]);

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
</script>

<style lang="scss" scoped></style>
