const BaseLayout = import("@/components/layout/base-layout.vue");

export default [
  {
    path: "/demo2",
    name: "demo2",
    component: () => BaseLayout,
    children: [
      {
        path: "demo2-1",
        name: "demo2-1",
        meta: {
          title: "演示2-1",
        },
        component: () => import(/* webpackChunkName: "demo2-1" */ "@/views/demo2/demo2-1.vue"),
      },
      {
        path: "demo2-2",
        name: "demo2-2",
        meta: {
          title: "演示2-2",
        },
        component: () => import(/* webpackChunkName: "demo2-2" */ "@/views/demo2/demo2-2.vue"),
      },
    ],
  },
];
