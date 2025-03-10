import { http } from "@setaria/setaria-ts";

const request = http.demo;

export const apiGetDataList = (query) => request.post("/user/getUserList", query);

export const apiSaveData = (query) => request.post("/user/saveUser", query);

export const apiUpdateData = (query) => request.post("/user/updateUser", query);

export const apiDeleteData = (query) => request.post("/user/deleteUser", query);
