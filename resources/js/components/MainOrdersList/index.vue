<template>
    <v-content-loader v-if="isLoading" />
    <div v-else class="container-fluid py-4 px-5">
        <div class="row">
            <div class="card w-100">
                <div class="card-body">
                    <BigTable
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
                { header: "Order Id", hash: "id", render: ({ id }) => id },
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
                    render: ({ status }) => status
                }
            ]
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
        ...mapActions(["getOrders"])
    },
    computed: {
        ...mapState(["orders", "currentPage", "isLoading"])
    }
};
</script>
<style src="./OrdersList.scss" lang="scss" scoped />
