import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'home',
    },
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('./view/user'),
    meta: {
      title: '用户中心',
    },
  },
  {
    name: 'order',
    path: '/order',
    component: () => import('./view/order'),
    meta: {
      title: '合约',
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('./view/home'),
    meta: {
      title: '首页',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };