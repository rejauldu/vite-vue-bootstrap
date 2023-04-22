export default function auth ({ next, store }){
    if(!store.getters.isLoggedin) {
        return next('/login');
    }
    return next();
}
