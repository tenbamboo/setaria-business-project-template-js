<template>
  <div>
    <!--
  通过本Demo可了解控制表格上不显示某些列但是编辑时显示

    有些场景，我们不想再表格列上显示，但是还想再编辑状态下显示

    关注以下内容：

     1. tableUiSchema:{
      username:{
       visible:false,
      }
    }
    或等同于以下内容

    2. addHidden(tableUiSchema,['username'])
  -->
    <bf-search-page
      ref="searchPageRef"
      :schema="schema"
      :condition-schema="conditionSchema"
      :table-schema="tableSchema"
      :table-ui-schema="tableUiSchema"
      :request="handdlerRequest"
      :label-mode="false"
      :show-oper="true"
      :selection-type="'checkbox'"
      :form-rules="formRules"
      :form-save="handlerSaveForm"
      :export-data="handlerExportData"
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

<script setup name="searchPageDemo41">
  import { getSchema, removeFormItemHidden, addFormItemHidden } from "setaria-business-framework";
  import { ElMessage } from "element-plus";

  import { apiGetDataList, apiSaveData, apiUpdateData, apiDeleteData } from "./service";

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

  // 也可通过 formRules，设置自定义校验
  const formRules = reactive({});

  //  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！
  const tableUiSchema = reactive({
    fullName: {
      visible: false, // 这里所有的都隐藏（包含了表格和表单）
    },
    sex: {
      columnVisible: false, // 这里是表格隐藏
    },
    userName: {
      formItemVisible: false, // 这里是表单隐藏
    },
  });
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
