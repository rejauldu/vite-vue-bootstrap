export default function verified ({ next, store }){
    if(!store.getters.isEmailVerified) {
        return next('/verify');
    }
    return next();
}
