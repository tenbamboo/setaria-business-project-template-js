import Mock from "setaria-mockjs";

import dictApis from "./mock-dict";
import getAuthzInfo from "./getAuthzInfo";
import demo from "./demo";
// import systemInfoApis from'./mock-systemInfo'
// import boardApis from'./mock-dashboard'
if (import.meta.env.VITE_USE_MOCK === "true") {
  console.log("Mock已经打开");

  const mocks = [...dictApis, ...getAuthzInfo, ...demo];
  Mock.setup({
    timeout: 800, // setter delay time
    responseHeaders: {
      "content-type": "application/json",
    },
  });
  for (const i of mocks) {
    Mock.mock(i.url, i.type, i.response);
  }
}
