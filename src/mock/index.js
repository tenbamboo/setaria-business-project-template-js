import Mock from "setaria-mockjs";

import dictApis from "./mock-dict";
// import systemInfoApis from'./mock-systemInfo'
// import boardApis from'./mock-dashboard'

console.log("VITE_USE_MOCK", import.meta.env.VITE_USE_MOCK);

const mocks = [...dictApis];
Mock.setup({
  timeout: 800, // setter delay time
  responseHeaders: {
    "content-type": "application/json",
  },
});
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response);
}
