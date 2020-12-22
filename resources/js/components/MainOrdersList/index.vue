<template>
    <v-content-loader v-if="isLoading" />
    <div v-else class="container-fluid py-4 px-5">
        <div class="row">
            <div class="card w-100">
                <div class="card-body">
                    <big-table
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
import {createNamespacedHelpers} from "vuex";
import {columns} from "./columns.react";

const {mapState, mapActions} = createNamespacedHelpers("ordersList");
const ordersPerPageOptions = [5, 10, 50, 100];

export default {
    data() {
        return {
            columns: columns(this.runOrderAction),
            cancelOrderId: null,
            modalValue: {
                headerTitle: "headerTitle",
                bodyTitle: "bodyTitle",
                isOpen: false,
            },
        };
    },
    computed: {
        ...mapState([
            "orders",
            "currentPage",
            "isLoading",
            "totalOrders",
            "limit",
        ]),
        pagination: function() {
            return {
                currentPage: this.currentPage,
                totalItems: this.totalOrders,
                onPageChange: this.handleChangePage,
                itemsPerPageOptions: ordersPerPageOptions,
                onItemsPerPageChange: this.handleChangeLimit,
                itemsPerPage: this.limit,
            };
        },
    },
    watch: {
        currentPage() {
            this.refreshOrders();
        },
        limit() {
            this.refreshOrders();
        },
    },
    created() {
        this.getOrders({
            currentPage: this.currentPage,
            limit: this.limit,
        });
    },
    mounted() {
        console.log(
            "OrdersPage Component mounted.",
            this.limit,
            this.currentPage,
            this.totalOrders
        );
    },
    methods: {
        ...mapActions([
            "getOrders",
            "cancelOrder",
            "changePage",
            "changeLimit",
        ]),
        runOrderAction(id, actionName) {
            if (actionName === "Cancel") {
                this.cancelOrder(id);
                const alert = {
                    header: `A order #${id} has been cancelled`,
                    type: "success",
                    onClose: () => null,
                    autoDismiss: true,
                };
                this.$alertManager.add(alert);
            }
        },
        handleChangeLimit(newLimit) {
            this.changePage(1);
            this.changeLimit(newLimit);
        },
        handleChangePage(newPage) {
            this.changePage(newPage);
        },
        refreshOrders() {
            this.getOrders({
                currentPage: this.currentPage,
                limit: this.limit,
            });
        },
    },
};
</script>
<style src="./OrdersList.scss" lang="scss" scoped />
