<template>
  <div>
    <!--
      通过本Demo可了解自定义插槽的使用和label-mode的概念
  
      并在demo3的基础上优化了插槽中的组件内容为dict-select
  
    -->
    <bf-search-page
      :schema="schema"
      :condition-schema="conditionSchema"
      :table-schema="tableSchema"
      :request="handdlerRequest"
    >
      <!-- condition sex 自定义渲染内容 -->
      <template #condition.sex="scope">
        <div>
          <!-- ！！！！！！！！！！！！关注这里 开始！！！！！！！！！！！！！！！！ -->
          <bf-dict-select v-model="scope.data.sex" :dict-id="'sex'" />
          <!-- ！！！！！！！！！！！！关注这里 结束！！！！！！！！！！！！！！！！ -->
        </div>
      </template>
      <!-- table sex 自定义渲染内容 -->
      <template #table.sex="scope">
        <div>
          <!-- ！！！！！！！！！！！！关注这里 开始！！！！！！！！！！！！！！！！ -->
          <bf-dict-select
            v-model="scope.data.sex"
            :label-mode="scope.status !== 'edit'"
            :dict-id="'sex'"
          />
          <!-- ！！！！！！！！！！！！关注这里 结束！！！！！！！！！！！！！！！！ -->
        </div>
      </template>
    </bf-search-page>
  </div>
</template>

<script setup name="searchPageDemo4">
  import { apiGetDataList } from "./service";

  import { reactive, ref, onMounted } from "vue";

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
</script>

<style lang="scss" scoped></style>
