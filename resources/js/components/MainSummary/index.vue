<template>
    <v-content-loader v-if="isLoading" />
    <div v-else class="container-fluid py-4 px-5">
        <main-summary-store-overview />
        <main-summary-catalog-summary />
    </div>
</template>

<script>
import MainSummaryCatalogSummary from "./../MainSummaryCatalogSummary";
import MainSummaryStoreOverview from "./../MainSummaryStoreOverview";
import {createNamespacedHelpers} from "vuex";
const {mapState, mapActions} = createNamespacedHelpers("summary");

export default {
    components: {
        MainSummaryCatalogSummary,
        MainSummaryStoreOverview,
    },
    computed: {
        ...mapState(["storeInfo", "catalogSummary", "isLoading"]),
    },
    created() {
        this.getSummary();
    },
    mounted() {
        console.log("Summary Component mounted.");
    },
    methods: {
        ...mapActions(["getSummary"]),
    },
};
</script>
