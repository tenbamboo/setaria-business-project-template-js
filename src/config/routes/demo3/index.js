const BaseLayout = import("@/components/layout/base-layout.vue");
export default [
  {
    path: "/demo3",
    name: "demo3",
    component: () => BaseLayout,
    children: [
      {
        path: "demo3-1",
        name: "demo3-1",
        meta: {
          title: "demo3",
        },
        component: () => import(/* webpackChunkName: "demo1-1" */ "@/views/demo3/demo3-1.vue"),
      },
    ],
  },
];
