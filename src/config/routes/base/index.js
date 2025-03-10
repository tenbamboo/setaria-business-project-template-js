const BaseLayout = import("@/components/layout/base-layout.vue");

export default [
  { path: "/", redirect: "/dashboard" },

  {
    path: "/dashboard",
    component: () => BaseLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        meta: {
          title: "首页",
        },
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"),
      },
    ],
  },
  {
    component: () => BaseLayout,
    children: [
      {
        path: "/redirect/:path",
        name: "redirect",
        component: () => import("@/views/base/redirect/index.vue"),
        meta: {
          // requiresAuth: true,
          // hideInMenu: true,
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => BaseLayout,
    children: [
      {
        path: "",
        name: "404",
        meta: {
          title: "404",
          hideInTab: true,
        },
        component: () => import("@/views/base/404/index.vue"),
      },
    ],
  },
  {
    path: "/403",
    component: () => BaseLayout,
    children: [
      {
        path: "",
        name: "403",
        meta: {
          title: "403",
          hideInTab: true,
        },
        component: () => import("@/views/base/403/index.vue"),
      },
    ],
  },
];
