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
        <BigModal
            :header="'Cancel Order?'"
            :isOpen="isOpen"
            :children="modalChildren"
            :actions="[
                { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },
                { text: 'Apply', onClick: handleApply },
            ]"
        />
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
        this.getOrders({
            currentPage: this.currentPage,
            limit: this.limit
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
    data() {
        return {
            columns: columns(this.runAction),
            cancelOrderId: null,
            isOpen: false,
            modalChildren: React.createElement('div', null, 'Will you cancel the order?')
        };
    },
    methods: {
        ...mapActions([
            "getOrders",
            "cancelOrder",
            "changePage",
            "changeLimit"
        ]),
        setIsOpen(isOpen) {
            this.isOpen = isOpen;
        },
        handleApply() {
            this.isOpen = false;
            setTimeout(() => {
                if(this.cancelOrderId) this.cancelOrder(this.cancelOrderId);
            }, 100);
        },
        runAction(id, actionName) {
            if (actionName === "Cancel") {
                this.setIsOpen(true);
                this.cancelOrderId = id;
            };
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
    },
    watch: {
        currentPage() {
            this.refreshOrders()
        },
        limit() {
            this.refreshOrders()
        }
    }
};
</script>
<style src="./OrdersList.scss" lang="scss" scoped />
