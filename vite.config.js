import path from "path";
//
import { wrapperEnv } from "./build/utils";
import { getPluginsList } from "./build/plugins";
import { loadEnv } from "vite";

const serverProxy = {
  "^/api/": {
    // 远程服务地址
    // target: 'http://49.233.49.69:8848/', // 外网Dev
    // target: 'http://10.199.134.160:8200/', // 内网Dev
    // target: 'http://10.199.134.149:9210/', // 内网Dev Docker
    // target: 'http://10.199.134.160:9200/', // 内网Sit
    target: "http://10.199.130.50:9200/", // 内网UAT
    secure: false,
    changeOrigin: true,
  },
};

const callFun = (obj) => {
  const { command, mode } = obj;
  const root = process.cwd();

  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv;
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@store": path.resolve(__dirname, "src/config/store/"),
      },
      // alias: [
      // {
      //   find: /\/@\//,
      //   replacement: pathResolve("src") + "/",
      // },
      // // /#/xxxx => types/xxxx
      // {
      //   find: /\/#\//,
      //   replacement: pathResolve("types") + "/",
      // },
      // ],
    },
    server: {
      https: false,
      // Listening on all local IPs
      host: true,
      port: VITE_PORT,
      proxy: serverProxy,
      // Load proxy configuration from .env
      // proxy: createProxy(VITE_PROXY),
    },
    plugins: getPluginsList(viteEnv, command),
    // esbuild: {
    //   pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    // },
    define: {
      "process.env": {},
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or 'modern'
        },
      },
    },
    // optimizeDeps: {
    //   include: ["pinia", "@setaria/setaria-ts"],
    // },
  };
};

export default callFun;

// styleImport({
//   libs: [{
//     libraryName: 'element-plus',
//     esModule: true,
//     ensureStyleFile: true,
//     resolveStyle: (name) => {
//       name = name.slice(3)
//       return `element-plus/packages/theme-chalk/src/${name}.scss`;
//     },
//     resolveComponent: (name) => {
//       return `element-plus/lib/${name}`;
//     },
//   }]
// })
// export default defineConfig({
//   plugins: [vue()],
// });

// https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     },
//   },
//   plugins: [
//     vue(),
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
//   define: {
//     'process.env': {},
//   }
// })
