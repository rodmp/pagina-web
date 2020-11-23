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
const { mapState, mapActions } = createNamespacedHelpers("ordersList");
export default {
    created() {
        this.getOrders();
    },
    mounted() {
        console.log("OrdersPage Component mounted.");
    },
    data() {
        return {
            columns: [
                {
                    header: "Order Id",
                    hash: "id",
                    render: ({ id }) => id
                },
                {
                    header: "Billing Name",
                    hash: "billing_address",
                    render: ({ billing_address }) =>
                        `${billing_address.first_name} ${billing_address.last_name}`
                },
                {
                    header: "Order Total",
                    hash: "total_ex_tax",
                    render: ({ total_ex_tax }) => total_ex_tax
                },
                {
                    header: "Order Status",
                    hash: "status",
                    render: ({ status }) => React.createElement("span", { className: status.replace(' ', '_').toLowerCase() }, status)
                },
                {
                    header: "Actions",
                    hash: "actions",
                    render: ({ id, status }) => {
                        const actionName = this.getActionName(status);
                        const className = this.getActionClassName(actionName);
                        if (actionName) {
                            return React.createElement("button", {
                                className,
                                onMouseDown: () => this.runAction(id, actionName)
                            }, actionName);
                        }
                        return null;
                    }
                }
            ],
            actions: {
                cancelOrder: "Cancel"
            },
            status: {
                incomplete: "Incomplete",
                awaitingFulfillment: "Awaiting Fulfillment"
            },
            actionClass: {
                cancel: "btn btn-danger"
            }
            // pagination: {
            //     currentPage,
            //     totalItems: this.items.length,
            //     onPageChange: setCurrentPage,
            //     itemsPerPageOptions,
            //     onItemsPerPageChange,
            //     itemsPerPage
            // }
        };
    },
    methods: {
        ...mapActions(["getOrders", "cancelOrder"]),
        getActionName(status) {
            switch(status) {
                case this.status.incomplete: {
                    return null;
                }
                case this.status.awaitingFulfillment: {
                    return this.actions.cancelOrder;
                }
                default: {
                    return null;
                }
            }
        },
        getActionClassName(actionName) {
            switch(actionName) {
                case this.actions.cancelOrder: {
                    return this.actionClass.cancel;
                }
                default: {
                    return null;
                }
            }
        },
        runAction(id, actionName) {
            if ( actionName === "Cancel" )
                this.cancelOrder(id);
        }
    },
    computed: {
        ...mapState(["orders", "currentPage", "isLoading"])
    }
};
</script>
<style src="./OrdersList.scss" lang="scss" />
