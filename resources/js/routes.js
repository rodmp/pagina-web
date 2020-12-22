import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout";
import ErrorPage from "@/pages/Error";
import MainPage from "@/pages/Main";
import OrdersList from "@/components/MainOrdersList";
import Summary from "@/components/MainSummary";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/error",
            name: "Error",
            component: ErrorPage,
        },
        {
            path: "/",
            name: "Layout",
            component: Layout,
            redirect: "/main",
            children: [
                {
                    path: "main",
                    name: "Main",
                    component: MainPage,
                    redirect: "main/summary",
                    children: [
                        {
                            path: "summary",
                            name: "Summary",
                            component: Summary,
                        },
                        {
                            path: "orders-list",
                            name: "Orders List",
                            component: OrdersList,
                        },
                    ],
                },
            ],
        },
    ],
});
