import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";
import store from "../store";
import middlewarePipeline from './middlewares/middlewarePipeline'

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
  });
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }
    return middlewarePipeline(context, middleware, 0)
});
export default router;