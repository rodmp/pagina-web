import { ApiService } from "@/utils";

export default {
    namespaced: true,
    state: {
        currentPage: 1,
        orders: [],
        totalOrders: 0,
        limit: 10,
        isLoading: false
    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setPage(state, newPage) {
            state.currentPage = newPage;
        },
        setLimit(state, newLimit) {
            state.limit = newLimit;
        },
        setTotalOrders(state, count) {
            state.totalOrders = count;
        }
    },
    actions: {
        getOrders({ commit }, { currentPage, limit }) {
            commit("setLoading", true);
            Promise.all([
                ApiService.getOrders({ page: currentPage, limit: limit }),
                ApiService.getOrdersCount()
            ])
                .then(([{ data: ordersData }, { data: countData }]) => {
                    if (ordersData) {
                        commit("setOrders", ordersData);
                    }
                    if (countData) {
                        commit("setTotalOrders", countData.count);
                    } else {
                        commit("setTotalOrders", ordersData.length);
                    }
                    commit("setLoading", false);
                })
                .catch(err => {
                    commit("setOrders", []);
                    commit("setTotalOrders", 0);
                    commit("setLoading", false);
                });
        },
        cancelOrder({ commit }, id) {
            console.log(`Cancelled a order: id => ${id}`);
        },
        changePage({ commit }, newPage) {
            console.log(`Changed Page: ${newPage}`);
            commit("setPage", newPage);
        },
        changeLimit({ commit }, newLimit) {
            console.log(`Changed Limit per page: ${newLimit}`);
            commit("setLimit", newLimit);
        }
    }
};
