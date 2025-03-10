const BaseLayout = import("@/components/layout/base-layout.vue");

export default [
  {
    path: "/searchPageDemo",
    name: "searchPageDemo",
    component: () => BaseLayout,
    children: [
      {
        path: "",
        name: "searchPageDemoIndex",
        meta: { title: "SearchPage导航页" },
        component: () =>
          import(/* webpackChunkName: "searchPageDemo" */ "@/views/searchPageDemo/index.vue"),
      },
      {
        path: "demo1",
        name: "searchPageDemo1",
        meta: { title: "SearchPageDemo1" },
        component: () =>
          import(
            /* webpackChunkName: "searchPageDemo1" */ "@/views/searchPageDemo/demo1/index.vue"
          ),
      },
      {
        path: "demo2",
        name: "searchPageDemo2",
        meta: { title: "SearchPageDemo2" },
        component: () =>
          import(
            /* webpackChunkName: "searchPageDemo2" */ "@/views/searchPageDemo/demo2/index.vue"
          ),
      },
      {
        path: "demo3",
        name: "searchPageDemo3",
        meta: { title: "SearchPageDemo3" },
        component: () =>
          import(
            /* webpackChunkName: "searchPageDemo3" */ "@/views/searchPageDemo/demo3/index.vue"
          ),
      },
      {
        path: "demo4",
        name: "searchPageDemo4",
        meta: { title: "SearchPageDemo4" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo4" */ "@/views/searchPageDemo/demo4/index.vue"
          ),
      },
      {
        path: "demo5",
        name: "searchPageDemo5",
        meta: { title: "SearchPageDemo5" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo5" */ "@/views/searchPageDemo/demo5/index.vue"
          ),
      },
      {
        path: "demo6",
        name: "searchPageDemo6",
        meta: { title: "SearchPageDemo6" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo6" */ "@/views/searchPageDemo/demo6/index.vue"
          ),
      },
      {
        path: "demo7",
        name: "searchPageDemo7",
        meta: { title: "SearchPageDemo7" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo7" */ "@/views/searchPageDemo/demo7/index.vue"
          ),
      },
      {
        path: "demo8",
        name: "searchPageDemo8",
        meta: { title: "SearchPageDemo8" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo8" */ "@/views/searchPageDemo/demo8/index.vue"
          ),
      },
      {
        path: "demo9",
        name: "searchPageDemo9",
        meta: { title: "SearchPageDemo9" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo9" */ "@/views/searchPageDemo/demo9/index.vue"
          ),
      },
      {
        path: "demo20",
        name: "searchPageDemo20",
        meta: { title: "SearchPageDemo20" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo20" */ "@/views/searchPageDemo/demo20/index.vue"
          ),
      },
      {
        path: "demo21",
        name: "searchPageDemo21",
        meta: { title: "SearchPageDemo21" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo21" */ "@/views/searchPageDemo/demo21/index.vue"
          ),
      },
      {
        path: "demo22",
        name: "searchPageDemo22",
        meta: { title: "SearchPageDemo22" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo22" */ "@/views/searchPageDemo/demo22/index.vue"
          ),
      },
      {
        path: "demo23",
        name: "searchPageDemo23",
        meta: { title: "SearchPageDemo23" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo23" */ "@/views/searchPageDemo/demo23/index.vue"
          ),
      },
      {
        path: "demo24",
        name: "searchPageDemo24",
        meta: { title: "SearchPageDemo24" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo24" */ "@/views/searchPageDemo/demo24/index.vue"
          ),
      },
      {
        path: "demo25",
        name: "searchPageDemo25",
        meta: { title: "SearchPageDemo25" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo25" */ "@/views/searchPageDemo/demo25/index.vue"
          ),
      },
      {
        path: "demo26",
        name: "searchPageDemo26",
        meta: { title: "SearchPageDemo26" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo26" */ "@/views/searchPageDemo/demo26/index.vue"
          ),
      },
      {
        path: "demo27",
        name: "searchPageDemo27",
        meta: { title: "SearchPageDemo27" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo27" */ "@/views/searchPageDemo/demo27/index.vue"
          ),
      },
      {
        path: "demo28",
        name: "searchPageDemo28",
        meta: { title: "SearchPageDemo28" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo28" */ "@/views/searchPageDemo/demo28/index.vue"
          ),
      },
      {
        path: "demo29",
        name: "searchPageDemo29",
        meta: { title: "SearchPageDemo29" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo29" */ "@/views/searchPageDemo/demo29/index.vue"
          ),
      },
      {
        path: "demo40",
        name: "searchPageDemo40",
        meta: { title: "SearchPageDemo40" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo40" */ "@/views/searchPageDemo/demo40/index.vue"
          ),
      },
      {
        path: "demo41",
        name: "searchPageDemo41",
        meta: { title: "SearchPageDemo41" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo41" */ "@/views/searchPageDemo/demo41/index.vue"
          ),
      },
      {
        path: "demo42",
        name: "searchPageDemo42",
        meta: { title: "SearchPageDemo42" },
        component: () =>
          import(
            /* webpackChunkName: "SearchPageDemo42" */ "@/views/searchPageDemo/demo42/index.vue"
          ),
      },
    ],
  },
];
