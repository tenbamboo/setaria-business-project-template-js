import { http } from "@setaria/setaria-ts";

const request = http.demo;

export const apiGetDataList = (query) => request.post("/user/getUserList", query);

export const apiGetColumnList = (query) => request.post("/user/getColumnList", query);
