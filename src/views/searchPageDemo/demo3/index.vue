<template>
  <div>
    <!--
      通过本Demo可了解自定义插槽的使用和label-mode的概念
  
      自定义插槽中返回了 scope.status 这个属性是用来告诉开发者当前使用状态
  
      在不同场景下,可以使用这个数据,如:
  
      1.当需要在表格展示时不展示实际的组件构造时,就需要设置对应组件的label-mode 为true
  
      2.当需要在表格编辑时需要展示实际的组件构造时,就需要设置对应组件的label-mode 为false
  
      以上label-mode的值来源就是从 scope.status
  
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
          <el-select v-model="scope.data.sex">
            <el-option :label="'男'" :value="'1'" />
            <el-option :label="'女'" :value="'0'" />
          </el-select>
        </div>
      </template>
      <!-- table sex 自定义渲染内容 -->
      <!-- ！！！！！！！！！！！！关注这里 开始！！！！！！！！！！！！！！！！ -->
      <!-- 这块关注页面的内容不是显示下拉框的，实现机制是通过 fake-component 包裹加scope.status 判断的 -->
      <template #table.sex="scope">
        <div>
          <bf-fake-component v-model="scope.data.sex" :label-mode="scope.status">
            <el-select v-model="scope.data.sex">
              <el-option :label="'男'" :value="'1'" />
              <el-option :label="'女'" :value="'0'" />
            </el-select>
          </bf-fake-component>
        </div>
      </template>
      <!-- ！！！！！！！！！！！！关注这里 结束！！！！！！！！！！！！！！！！ -->
    </bf-search-page>
  </div>
</template>

<script setup name="searchPageDemo3">
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
