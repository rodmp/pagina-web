import Vue from "vue";
import Vuex from "vuex";

import layout from "./layout";
import ordersList from "./ordersList";
import summary from "./summary";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        layout,
        ordersList,
        summary,
    },
});
