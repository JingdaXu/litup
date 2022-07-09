import { createRouter,createWebHistory } from 'vue-router';

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
    component: () => import('./view/user/user'),
    meta: {
      title: '用户中心',
    },
  },
  {
    name: 'orderDetail',
    path: '/orderDetail',
    component: () => import('./view/user/orderDetail/orderDetail'),
    meta: {
      title: '持仓详情',
    },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('./view/home/home'),
    meta: {
      title: '首页',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };