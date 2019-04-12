import Vue from 'vue';
import Router from 'vue-router';
import routers from './routes';
// 加载进度条插件
import NProgress from 'nprogress';
// 加载进度条样式
import 'nprogress/nprogress.css';
Vue.use(Router);
const appRouter = new Router({
    mode: 'history',
    routes:routers
})
// 全局前置守卫
// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
appRouter.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})
// // 全局后置钩子
// // 不会接受 next 函数也不会改变导航本身
appRouter.afterEach((to, from) => {
    NProgress.done();
})
export default appRouter;