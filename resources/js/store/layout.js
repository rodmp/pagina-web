export default {
    namespaced: true,
    state: {
        sidebarClose: false,
        sidebarStatic: true,
        sidebarHelperClose: true,
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarClose = !state.sidebarClose;
        },
        handleSwipe(state, e) {
            if ("ontouchstart" in window) {
                if (e.direction === 4) {
                    state.sidebarClose = false;
                }

                if (e.direction === 2 && !state.sidebarClose) {
                    state.sidebarClose = true;
                }
            }
        },
        toggleSidebarHelper(state) {
            state.sidebarHelperClose = !state.sidebarHelperClose;
        },
        changeSidebarStatic(state, status) {
            state.sidebarStatic = status;
        },
        changeSidebarClose(state, status) {
            state.sidebarClose = status;
        },
    },
    actions: {
        changeSidebarStatic({commit}, status) {
            commit("changeSidebarStatic", status);
        },
        changeSidebarClose({commit}, status) {
            commit("changeSidebarClose", status);
        },
        toggleSidebar({commit}) {
            commit("toggleSidebar");
        },
        handleSwipe({commit}, e) {
            commit("handleSwipe", e);
        },
        toggleSidebarHelper({commit}) {
            commit("toggleSidebarHelper");
        },
    },
};
