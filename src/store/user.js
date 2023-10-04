import store from "./index.js";

export const user = {
    namespaced: true,

    state: {
        auth: false,
        loading:false,

    },
    actions: {},
    mutations: {
        authUser(state, payload) {
            state.auth = payload;
        },

        loading(state, payload) {
            state.loading = payload;
        },

    },
    getters: {
        getUserAuth(store) {
            return store.auth;
        },
        getUserLoading(store) {
            return store.loading;
        }
    }
};