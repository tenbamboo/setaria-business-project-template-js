<template>
  <span>点击Input框选取数据:</span>
  <bf-basic-input-search-help
    v-model="selectedList"
    v-model:displayValue="displayValueList"
    :value-key="'fldValue'"
    :display-key="'dispValue'"
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :table-schema="tableSchema"
    :request="handlerRequest"
    @submit="handdlerSubmit"
  />

  选择的数据: {{ selectedList }} <br />选择的显示数据: {{ displayValueList }}
</template>

<script setup>
  import { reactive, ref } from "vue";
  import { http } from "@setaria/setaria-ts";
  import { getSchema } from "setaria-business-framework";

  const request = http.admin;
  const selectedList = ref([]);
  const displayValueList = ref([]);
  const baseSchema = reactive(getSchema("Claim", "Dict"));

  const tableSchema = ["dictName", "dispValue", "fldValue", "orderId", "status"];

  const conditionSchema = ["dictName", "dispValue", "fldValue", "orderId", "status"];

  const handlerRequest = (pageInfo) => {
    return request.post("/t-rmbs-dict/pageSize", pageInfo);
  };
  const handdlerSubmit = (list) => {
    console.log("选择的数据为：", list);
    // selectedList.value = list
  };
</script>
