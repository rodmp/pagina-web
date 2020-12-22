<template>
    <div class="row">
        <div class="card w-100 pb-1 pt-4 px-4">
            <div class="card-body">
                <div class="row align-items-center justify-content-between">
                    <div class="h4">Catalog Summary</div>
                </div>
                <div class="row">
                    <div>
                        A simple overview of your catalog.
                    </div>
                </div>
                <div class="row flex-row mt-3 ">
                    <div class="col-4 p-2">
                        <div
                            class="border border-radius-2 p-3 rounded flex-column "
                        >
                            <div class="font-weight-bold">Variant Count</div>
                            <div class="h2">
                                {{ catalogSummary["variant_count"] }}
                            </div>
                        </div>
                    </div>
                    <div class="col-4 p-2">
                        <div
                            class="border border-radius-2 p-3 rounded flex-column "
                        >
                            <div class="font-weight-bold">Inventory Count</div>
                            <div class="h2">
                                {{ catalogSummary["inventory_count"] }}
                            </div>
                        </div>
                    </div>
                    <div class="col-4 p-2">
                        <div
                            class="border border-radius-2 p-3 rounded flex-column "
                        >
                            <div class="font-weight-bold">Inventory Value</div>
                            <div class="h2">
                                {{ catalogSummary["inventory_value"] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex";
const {mapState} = createNamespacedHelpers("summary");

export default {
    computed: {
        ...mapState(["catalogSummary"]),
    },
};
</script>
