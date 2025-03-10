import { http } from "@setaria/setaria-ts";

const request = http.demo;

export const apiGetDataList = (query) => request.post("/user/getUserList", query);

export const apiSaveData = (query) => request.post("/user/saveUser", query);

export const apiUpdateData = (query) => request.post("/user/updateUser", query);

export const apiDeleteData = (query) => request.post("/user/deleteUser", query);

//  ！！！！！！！！！！！！关注这里 开始 ！！！！！！！！！！！！！！！！
// 这里需要指定返回流的类型
export const apiExportData = (query) =>
  request.post("/user/deleteUser", query, {
    responseType: "arraybuffer",
  });
//  ！！！！！！！！！！！！关注这里 结束 ！！！！！！！！！！！！！！！！
