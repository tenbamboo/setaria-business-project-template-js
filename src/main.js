import { Framework } from "setaria-business-framework";

import "vxe-table/lib/style.css";
import "element-plus/dist/index.css";
import "setaria-components/dist/index.css";
import "setaria-business-framework/dist/index.css";
import "./styles/index.scss";
import { getEnvParams } from "./utils";
import config from "./config";

import "./mock/";
// console.log(getEnvParams());
new Framework(config, getEnvParams()).mount();
