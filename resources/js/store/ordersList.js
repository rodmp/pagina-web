import { ApiService } from "@/utils";

export default {
    namespaced: true,
    state: {
        currentPage: 1,
        orders: [],
        total: 0,
        isLoading: false
    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        }
    },
    actions: {
        getOrders({ commit }) {
            commit("setLoading", true);
            ApiService.getOrders({}).then(({ data }) => {
                if (data) {
                    commit("setOrders", data);
                }
                commit("setLoading", false);
            });
        }
    }
};
