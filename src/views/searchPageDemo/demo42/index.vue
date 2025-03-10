<template>
  <div>
    <!--
    通过本Demo可了解控制表格的显示footer 统计行

    这里需要关注以下内容：

    :show-footer="true"
    :footer-method="footerMethod"

    我们在本demo中暴露了一个共通的 footerMethod 方法，大家可以直接做拿来主义

    拿来主义之前，需要关注data中的 footerSumBy 数据

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
      :show-footer="true"
      :footer-method="footerMethod"
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

<script setup name="searchPageDemo42">
  import numeral from "numeral";

  import { getSchema, priceFormatter } from "setaria-business-framework";
  import { ElMessage } from "element-plus";

  import { apiGetDataList, apiSaveData, apiUpdateData, apiDeleteData } from "./service";

  import { reactive, ref, onMounted } from "vue";
  import { sumBy, isNumber, isNaN, isEmpty } from "lodash";

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
    "accountMoney", // 户头金额
    "accountMaxMoney", // 户头最大金额
    "accountMinMoney", // 户头最小金额
  ]);

  const operItem = ref({});

  const selectedList = ref([]);

  // 也可通过 formRules，设置自定义校验
  const formRules = reactive({});

  //  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！

  const footerSumBy = [
    "accountMoney", // 户头金额
    "accountMaxMoney", // 户头最大金额
    "accountMinMoney", // 户头最小金额
  ];
  const footerMethod = ({ columns, data }) => {
    const list = [];
    const defaultCell = "-";

    if (data.length === 0) {
      return [];
    }
    columns.forEach((column, columnIndex) => {
      if (columnIndex === 0) {
        list.push("共");
      } else if (footerSumBy.includes(column.property)) {
        let sum = sumBy(data, (item) =>
          item[column.property] ? +item[column.property].toFixed(2) : 0,
        );
        if (!sum || sum === Infinity) {
          sum = 0;
        }

        // 向上四舍五入
        sum = sum.toFixed(2);

        const displayVal = priceFormatter(sum);
        const scaleNum = 2;
        if (
          (isNumber(displayVal) && !isNaN(displayVal)) ||
          (!isEmpty(displayVal) && displayVal !== "NaN")
        ) {
          let digitVal = numeral(displayVal).value();

          digitVal = `${digitVal.toFixed(scaleNum)}`;
          list.push(`${displayVal.split(".")[0]}.${digitVal.split(".")[1]}`);
        }
      } else {
        list.push(defaultCell);
      }
    });
    return [list];
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
