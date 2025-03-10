<template>
  <div class="box">
    <p>此Demo系列是循序渐进的,如想查看完整版,请留意标识为<b>完整版</b></p>
    <p>点击前往Demo实例,并在相关代码中,搜索<b>关注这里</b>关键字,来查看Demo中的重点内容.</p>
    <p
      >实例1：简单的表格功能 <el-button @click="gotoPage('/searchPageDemo/demo1')">前往</el-button>
    </p>
    <p
      >实例2：简单的表格功能--使用自定义插槽
      <el-button @click="gotoPage('/searchPageDemo/demo2')">前往</el-button>
    </p>
    <p
      >实例3：简单的表格功能--使用自定义插槽-处理labelMode问题
      <el-button @click="gotoPage('/searchPageDemo/demo3')">前往</el-button>
    </p>
    <p
      >实例4：简单的表格功能--使用自定义插槽-优化下拉组件为Dict组件(优化 实例3)
      <el-button @click="gotoPage('/searchPageDemo/demo4')">前往</el-button>
    </p>
    <p
      >实例5：简单的表格功能--自定义操作列
      <el-button @click="gotoPage('/searchPageDemo/demo5')">前往</el-button>
    </p>
    <p
      >实例6：简单的表格功能--配合Swagger功能
      <el-button @click="gotoPage('/searchPageDemo/demo6')">前往</el-button>
    </p>
    <p
      >实例7：简单的表格功能--配合Swagger功能来格式化内容
      <el-button @click="gotoPage('/searchPageDemo/demo7')">前往</el-button>
    </p>
    <p
      >实例8：简单的表格功能-- 动态显示表格列
      <el-button @click="gotoPage('/searchPageDemo/demo8')">前往</el-button>
    </p>
    <p
      >实例9：<b>(完整版)</b>简单的表格功能-- 通过后端接口,动态控制页面显示表格列
      <el-button @click="gotoPage('/searchPageDemo/demo9')">前往</el-button>
    </p>
    <hr />
    <p
      >实例20：表格编辑功能--基础功能
      <el-button @click="gotoPage('/searchPageDemo/demo20')">前往</el-button>
    </p>
    <p
      >实例21：表格编辑功能--表单校验功能
      <el-button @click="gotoPage('/searchPageDemo/demo21')">前往</el-button>
    </p>
    <p
      >实例22：表格编辑功能--表单校验功能--提交环节
      <el-button @click="gotoPage('/searchPageDemo/demo22')">前往</el-button>
    </p>
    <p
      >实例23：表格编辑功能--控制添加、修改、删除的显示<el-button
        @click="gotoPage('/searchPageDemo/demo23')"
        >前往</el-button
      >
    </p>
    <p
      >实例24：表格编辑功能--通过行维度控制删除、修改按钮的显示<el-button
        @click="gotoPage('/searchPageDemo/demo24')"
        >前往</el-button
      >
    </p>
    <p
      >实例25：表格编辑功能--勾选数据与勾选数据回调<el-button
        @click="gotoPage('/searchPageDemo/demo25')"
        >前往</el-button
      >
    </p>
    <p
      >实例26：表格编辑功能--导入导出<el-button @click="gotoPage('/searchPageDemo/demo26')"
        >前往</el-button
      >
    </p>
    <p
      >实例27：表格编辑功能--批量控制表单必填 非必填<el-button
        @click="gotoPage('/searchPageDemo/demo27')"
        >前往</el-button
      >
    </p>
    <p
      >实例28：表格编辑功能--批量控制表单disabled undisabled<el-button
        @click="gotoPage('/searchPageDemo/demo28')"
        >前往</el-button
      >
    </p>
    <p
      >实例29：表格编辑功能--批量控制表单hidden unhidden<el-button
        @click="gotoPage('/searchPageDemo/demo29')"
        >前往</el-button
      >
    </p>

    <hr />
    <p
      >实例40：表格其他功能--控制表格显示宽度<el-button @click="gotoPage('/searchPageDemo/demo40')"
        >前往</el-button
      >
    </p>
    <p
      >实例41：表格其他功能--控制表格上不显示某些列但是编辑时显示<el-button
        @click="gotoPage('/searchPageDemo/demo41')"
        >前往</el-button
      >
    </p>
    <p
      >实例42：表格其他功能-- 显示footer 统计行<el-button
        @click="gotoPage('/searchPageDemo/demo42')"
        >前往</el-button
      >
    </p>
    <!-- <p
      >实例43：表格其他功能-- 国际化表格与表单内容<el-button
        @click="gotoPage('/searchPageDemo/demo43')"
        >前往</el-button
      >
    </p> -->
  </div>
</template>

<script setup name="searchPageDemoIndex">
  // import { registerTabMessage } from '@/util/tabMessage';
  // import { openNewTabPage } from '@/util/';
  // import { Constant } from 'fssc-web-framework';
  import { useRouter } from "vue-router";
  const router = useRouter();
  const gotoPage = (url) => {
    router.push(url);
  };
</script>

<style lang="scss" scoped>
  .box {
    background-color: #fff;
  }
</style>
