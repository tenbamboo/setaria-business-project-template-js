<template>
  <div>
    <!--
    通过本Demo可了解开启勾选数据和勾选数据的回调

    关注以下属性
    :selection-type 值有 radio checkbox 和'' 当为''或者此数据无值时则不显示勾选
    @selection-change 勾选数据回调方法

    :selection-config 控制checkbox里的内容是否可以被勾选或者显示
  -->
    <bf-search-page
      ref="searchPageRef"
      :schema="schema"
      :condition-schema="conditionSchema"
      :table-schema="tableSchema"
      :request="handdlerRequest"
      :label-mode="false"
      :show-oper="true"
      :selection-type="'checkbox'"
      :form-rules="formRules"
      :form-save="handlerSaveForm"
      :selection-config="selectionConfig"
      @selection-change="handlerSelectedChange"
      @form-opened="handlerFormOpened"
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

<script setup name="searchPageDemo25">
  import {
    getSchema,
    replaceSchemaLabels,
    formatPriceType,
    formatDateType,
  } from "setaria-business-framework";
  import { ElMessage } from "element-plus";

  import { apiGetDataList, apiSaveData, apiUpdateData, apiDeleteData } from "./service";

  import { reactive, ref, onMounted } from "vue";
  import { ApplicationError } from "@setaria/setaria-ts";

  const searchPageRef = ref();

  const schema = reactive(getSchema("Demo", "UserInfo"));

  const conditionSchema = reactive(["workDate", "sex", "userNum", "fullName"]);

  const tableSchema = ref([
    "fullName", // 用户名
    "sex", // 性别
    "userName", // 用户号
    "userNum", // 用户分类
    "workDate", // 工作时间
    "whomodified", // 编辑人
  ]);

  const operItem = ref({});
  //  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！

  const selectionType = ref("checkbox");
  const selectedList = ref([]);
  // 这里的相关属性可查看 vxe-table  radio-config checkbox-config 的属性说明
  const selectionConfig = ref({
    showHeader: true, // 是否显示表头的勾选所有
    visibleMethod: ({ row }) => {
      // 是否显示勾选框控制
      return row.id % 2 === 0;
    },
    checkMethod: ({ row }) => {
      // 是否可以勾选的控制
      return row.id % 3 === 0;
    },
  });
  //  ！！！！！！！！！！！！关注这里 结束 ！！！！！！！！！！！！！！！！

  // 通过 required属性，快速设置必填字段
  schema.required = [
    "fullName", // 用户名
    "sex", // 性别
  ];
  // 也可通过 formRules，设置自定义校验
  const formRules = reactive({
    userName: [
      {
        validator: (rule, value, callback) => {
          // 这里可以拿到当前操作的对象其他属性
          console.log(operItem.value);
          if (!value) {
            callback(new Error("自定义校验错误1"));
          }
          callback();
        },
      },
    ],
  });

  //  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！
  // 勾选之后的回调
  const handlerSelectedChange = (list) => {
    console.log("selection change ", list);
    selectedList.value = list;
  };

  //  ！！！！！！！！！！！！关注这里 结束 ！！！！！！！！！！！！！！！！

  // 这里需要在dialog 打开的时候，绑定当前form的对象
  const handlerFormOpened = (currentItem, status) => {
    console.log(currentItem, status);
    operItem.value = currentItem;
  };

  const handdlerRequest = (pageInfo) => {
    return apiGetDataList(pageInfo);
  };
  // 用户点击修改新增之后的保存、行上的删除、勾选数据的批量删除之后的回到
  const handlerSaveForm = (params, key) => {
    console.log("用户操作的行为", key);
    console.log("用户操作的数据", params);
    // params 的数据在 修改、新增 返回是Object类型
    // params 的数据在 删除 返回是Array类型

    let fun = null;
    // 这里我们通过key来判断并采用动态赋值方法的方式，来搞事情
    if (key === "add") {
      fun = apiSaveData;
    } else if (key === "update") {
      fun = apiUpdateData;
    } else if (key === "delete") {
      fun = apiDeleteData;
    }

    // 此方法需要返回一个Promise 对象，也就是请求对象，用于告诉组件是否处理完成
    return fun(params).then((res) => {
      console.log(res);
      // 一般，我们处理完数据之后，我们会直接刷新也表格数据
      searchPageRef.value.search();
      ElMessage.success("操作成功");
    });
  };
</script>

<style lang="scss" scoped></style>
