import {ApiService} from "@/utils";

export default {
    namespaced: true,
    state: {
        catalogSummary: {},
        storeInfo: {},
        isLoading: false,
    },
    mutations: {
        setStoreInfo(state, storeInfo) {
            state.storeInfo = storeInfo;
        },
        setCatalogSummary(state, catalogSummary) {
            state.catalogSummary = catalogSummary;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {
        getSummary({commit}) {
            commit("setLoading", true);
            Promise.all([
                ApiService.getResourceEntry("v2/store"),
                ApiService.getResourceEntry("v3/catalog/summary"),
            ])
                .then(([store, summary]) => {
                    commit("setStoreInfo", store.data);
                    commit("setCatalogSummary", summary.data.data);
                    commit("setLoading", false);
                })
                .catch(() => {
                    commit("setStoreInfo", {});
                    commit("setCatalogSummary", {});
                    commit("setLoading", false);
                });
        },
    },
};
