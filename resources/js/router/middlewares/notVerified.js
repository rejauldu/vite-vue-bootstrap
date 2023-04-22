export default function notVerified ({ next, store }){
    if(store.getters.isEmailVerified) {
        return next('/profile');
    }
    return next();
}
