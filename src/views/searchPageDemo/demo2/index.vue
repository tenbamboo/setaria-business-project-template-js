<template>
  <div>
    <!--
      通过本Demo可了解自定义插槽的使用
      需要注意的是：插槽分为2个类别，condition、table
      如想往搜索区域字段中添加组件需要 condition.*的格式来定义插槽名
      插槽的scope 返回了一组数据，包含了以下内容：
      scope.data 表格维度 -> 当前行的数据
                 搜索维度 -> 当前搜索表单的数据
  
      scope.status 表格维度 -> 当前表格行是否是可编辑模式返回的枚举值为:
                              edit ->编辑模式
                              default ->默认模式
  
      scope.status会在稍后环节说明
    -->
    <bf-search-page
      :schema="schema"
      :condition-schema="conditionSchema"
      :table-schema="tableSchema"
      :request="handdlerRequest"
    >
      <!-- ！！！！！！！！！！！！关注这里 开始！！！！！！！！！！！！！！！！ -->
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
      <template #table.sex="scope">
        <div>
          <!-- 这里有个小问题，将在下一节解决 -->
          <el-select v-model="scope.data.sex">
            <el-option :label="'男'" :value="'1'" />
            <el-option :label="'女'" :value="'0'" />
          </el-select>
        </div>
      </template>
      <!-- ！！！！！！！！！！！！关注这里 结束！！！！！！！！！！！！！！！！ -->
    </bf-search-page>
  </div>
</template>

<script setup name="searchPageDemo2">
  import { apiGetDataList } from "./service";

  import { reactive, } from "vue";


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
