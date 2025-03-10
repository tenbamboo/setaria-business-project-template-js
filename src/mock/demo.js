import { errorCallback, successCallback } from "./common";
import { formatDate } from "setaria-business-framework";
const apis = [
  {
    url: "/api/demo/user/getUserList",
    type: "post",
    response: (config) => {
      const list = [];
      for (let index = 0; index < 10; index += 1) {
        list.push({
          id: index,
          fullName: `小明${index}`,
          sex: index % 2 === 0 ? "1" : "0",
          userName: `小明username${index}`,
          userNum: `小明usernum${index}`,
          workDate: formatDate(Date.now()),
          whomodified: `小明whomodified${index}`,
          accountMoney: Math.random() * 100,
          accountMinMoney: Math.random() * 10,
          accountMaxMoney: Math.random() * 1000,
          money: Math.random() * 1000,
        });
      }

      const res = successCallback({
        list,
        pageNo: 1,
        pageSize: 10,
        total: 30,
      });
      console.log(res);
      return res;
    },
  },

  {
    url: "/api/demo/user/getColumnList",
    type: "post",
    response: (config) => {
      let data = [];
      if ((Math.random() * 10).toFixed() % 2 === 0) {
        data = [
          "fullName", // 用户名
          "sex", // 性别
          "userName", // 用户号
          "userNum", // 用户分类
          "workDate", // 工作时间
          "whomodified", // 编辑人
        ];
      } else {
        data = [
          "fullName", // 用户名
          "sex", // 性别
        ];
      }

      const res = successCallback({ data });
      console.log(res);
      return res;
    },
  },
  {
    url: "/api/demo/user/saveUser",
    type: "post",
    response: (config) => {
      const res = successCallback({});
      console.log(res);
      return res;
    },
  },
  {
    url: "/api/demo/user/updateUser",
    type: "post",
    response: (config) => {
      const res = successCallback({});
      console.log(res);
      return res;
    },
  },
  {
    url: "/api/demo/user/deleteUser",
    type: "post",
    response: (config) => {
      const res = successCallback({});
      console.log(res);
      return res;
    },
  },
];

export default apis;
