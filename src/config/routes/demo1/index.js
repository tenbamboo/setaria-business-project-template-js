const BaseLayout = import("@/components/layout/base-layout.vue");

export default [
  {
    path: "/demo1",
    name: "demo1",
    component: () => BaseLayout,
    children: [
      {
        path: "demo1-1",
        name: "demo1-1",
        meta: {
          title: "演示1",
        },
        component: () => import(/* webpackChunkName: "demo1-1" */ "@/views/demo1/demo1-1.vue"),
      },
      {
        path: "demo1-2",
        name: "demo1-2",
        meta: {
          title: "演示2",
        },
        component: () => import(/* webpackChunkName: "demo1-2" */ "@/views/demo1/demo1-2.vue"),
      },
      {
        path: "demo1-3",
        name: "demo1-3",
        meta: {
          title: "演示3",
        },
        component: () => import(/* webpackChunkName: "demo1-3" */ "@/views/demo1/demo1-3.vue"),
      },
    ],
  },
];
