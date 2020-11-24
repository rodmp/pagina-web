<template>
    <v-content-loader v-if="isLoading" />
    <div v-else class="container-fluid py-4 px-5">
        <div class="row">
            <div class="card w-100">
                <div class="card-body">
                    <BigTable
                        class="big-table"
                        keyField="id"
                        itemName="Orders"
                        :columns="columns"
                        :items="orders"
                        :pagination="pagination"
                        stickyHeader="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import React from "react";

import { columns } from "./columns";
const { mapState, mapActions } = createNamespacedHelpers("ordersList");

const ordersPerPageOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export default {
    created() {
        this.getOrders({ currentPage: this.currentPage, limit: this.limit });
    },
    mounted() {
        console.log(
            "OrdersPage Component mounted.",
            this.limit,
            this.currentPage,
            this.totalOrders
        );
    },
    data() {
        return {
            columns: columns(this.runAction)
        };
    },
    methods: {
        ...mapActions([
            "getOrders",
            "cancelOrder",
            "changePage",
            "changeLimit"
        ]),
        runAction(id, actionName) {
            if (actionName === "Cancel") this.cancelOrder(id);
        },
        handleChangeLimit(newLimit) {
            this.changePage(1);
            this.changeLimit(newLimit);
            this.getOrders({
                currentPage: this.currentPage,
                limit: this.limit
            });
        },
        handleChangePage(newPage) {
            this.changePage(newPage);
            this.getOrders({
                currentPage: this.currentPage,
                limit: this.limit
            });
        }
    },
    computed: {
        ...mapState([
            "orders",
            "currentPage",
            "isLoading",
            "totalOrders",
            "limit"
        ]),
        pagination: function() {
            return {
                currentPage: this.currentPage,
                totalItems: this.totalOrders,
                onPageChange: this.handleChangePage,
                itemsPerPageOptions: ordersPerPageOptions,
                onItemsPerPageChange: this.handleChangeLimit,
                itemsPerPage: this.limit
            };
        }
    }
};
</script>
<style src="./OrdersList.scss" lang="scss" />
