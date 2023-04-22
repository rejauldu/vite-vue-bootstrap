import { createStore } from 'vuex'

const store = createStore({
    state: {
        isLoggedin: JSON.parse(localStorage.isLoggedin || "false"),
        isEmailVerified: JSON.parse(localStorage.isEmailVerified || "false"),
        user: JSON.parse(localStorage.user || "{}"),
    },
    getters: {
        isLoggedin: (state) => {
            return state.isLoggedin;
        },
        isEmailVerified: (state) => {
            return state.isEmailVerified;
        },
        user: (state) => {
            return state.user;
        },
    },
    mutations: {
        login(state, data) {
            state.isLoggedin = true
            localStorage.isLoggedin = "true";
            if(data.email_verified_at) {
                state.isEmailVerified = true
                localStorage.isEmailVerified = "true"
            } else {
                state.isEmailVerified = false
                localStorage.isEmailVerified = "false"
            }
            state.user = data;
        },
        logout(state) {
            state.isLoggedin = false;
            localStorage.isLoggedin = "false";
            state.isEmailVerified = false;
            localStorage.isEmailVerified = "false";
            state.user = {};
            localStorage.user = '{}';
        },
        setUser(state, data) {
            state.isLoggedin = true;
            localStorage.isLoggedin = "true";
            state.isEmailVerified = true;
            localStorage.isEmailVerified = "true";
            state.user = data;
            localStorage.user = JSON.stringify(data);
        },
        emailVerified(state) {
            state.isEmailVerified = true;
            localStorage.isEmailVerified = "true";
        },
    },
    actions: {
        login(context, data) {
            context.commit("login", data);
        },
        logout(context) {
            context.commit("logout");
        },
        setUser(context, data) {
            context.commit("setUser", data);
        },
        emailVerified(context) {
            context.commit("emailVerified");
        },
    }
})

export default store