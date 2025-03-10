<template>
  <div>
    <!--
    通过本Demo可了解表格导入导出的用法

    导出 方面，框架已集成导出相关操作，接口直接调用对应导出URL即可
    导入 方面，框架提供了对应的导入气泡组件，详情请查看组件

    关注以下属性
    :export-data 此属性接收一个Function的内容，且需要返回一个Promise对象已告知是否处理完成

    bf-import-dropdown 组件 是导入气泡组件

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
      :export-data="handlerExportData"
      @selection-change="handlerSelectedChange"
      @form-opened="handlerFormOpened"
    >
      <!-- ！！！！！！！！！！！！关注这里 开始！！！！！！！！！！！！！！！！ -->
      <!-- 导入的URL需要写如BASEURL -->
      <template #batchControl>
        <bf-import-dropdown
          :import-url="'/api/v1/user/importUser'"
          :download-template-url="'/api/v1/user/downloadTemplate'"
          @import-success="handlerImportSuccess"
        />
      </template>
      <!-- ！！！！！！！！！！！！关注这里 结束！！！！！！！！！！！！！！！！ -->

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

<script setup name="searchPageDemo26">
  import {
    getSchema,
    replaceSchemaLabels,
    formatPriceType,
    formatDateType,
  } from "setaria-business-framework";
  import { ElMessage } from "element-plus";

  import {
    apiGetDataList,
    apiSaveData,
    apiUpdateData,
    apiDeleteData,
    apiExportData,
  } from "./service";

  import { reactive, ref, onMounted } from "vue";

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
  // 调用导出回调
  const handlerExportData = (conditionData) => {
    console.log("执行导出行为", conditionData);
    return apiExportData(conditionData);
  };
  // 导入成功的回调
  const handlerImportSuccess = (res) => {
    if (res.code === 200) {
      // 导入成功啦，我们就刷新下表格数据
      ElMessage.success("导入成功");
      searchPageRef.value.search();
    } else {
      ElMessage({
        dangerouslyUseHTMLString: true,
        type: "error",
        message: res.message,
      });
    }
  };

  //  ！！！！！！！！！！！！关注这里 结束 ！！！！！！！！！！！！！！！！

  // 勾选之后的回调
  const handlerSelectedChange = (list) => {
    console.log("selection change ", list);
    selectedList.value = list;
  };

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
