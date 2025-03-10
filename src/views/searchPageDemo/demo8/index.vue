<template>
  <div>
    <!--
    通过本Demo可了解通过控制tableSchema属性来动态显示表格列

    有时我们的业务要求
    A角色进到页面时,显示 A B C 3个字段
    B角色进到页面时,显示 D F E 3个字段
    当然本Demo不是最优的解决方案,这里只是说明框架具备动态控制表格列的功能
    最优的解决方案会在下一Demo说明

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

<script setup name="searchPageDemo8">
  import {
    getSchema,
    replaceSchemaLabels,
    formatPriceType,
    formatDateType,
  } from "setaria-business-framework";
  import { ElMessage } from "element-plus";

  import { apiGetDataList } from "./service";

  import { reactive, ref, onMounted } from "vue";

  const schema = reactive(getSchema("Demo", "UserInfo"));

  const conditionSchema = reactive(["money", "workDate", "sex", "userNum", "fullName"]);

  const tableSchema = ref([
    "fullName", // 用户名
    "sex", // 性别
    "userName", // 用户号
    "userNum", // 用户分类
    "workDate", // 工作时间
    "whomodified", // 编辑人
  ]);
  // 把工作时间从之前的date-time  修改为date类型
  // schema.properties.workDate.format = "date";
  schema.properties.workDate = {
    ...schema.properties.workDate,
    ...formatDateType,
  };
  // 修改薪资相关属性 ，格式化为四舍五入2位的内容
  // schema.properties.money.format = "price";
  // schema.properties.money.type = "number";
  // schema.properties.money.scale = 2;
  schema.properties.money = {
    ...schema.properties.money,
    ...formatPriceType,
  };

  // 修改workDate label显示内容
  replaceSchemaLabels(schema, {
    workDate: "自定义工作时间Label",
  });

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
  //  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！
  const initTableByRole = () => {
    if ((Math.random() * 10).toFixed() % 2 === 0) {
      tableSchema.value = [
        "fullName", // 用户名
        "sex", // 性别
        "userName", // 用户号
        "userNum", // 用户分类
        "workDate", // 工作时间
        "whomodified", // 编辑人
      ];
    } else {
      tableSchema.value = [
        "fullName", // 用户名
        "sex", // 性别
      ];
    }
  };

  onMounted(() => {
    initTableByRole();
  });
  //  ！！！！！！！！！！！！关注这里 结束 ！！！！！！！！！！！！！！！！
</script>

<style lang="scss" scoped></style>
