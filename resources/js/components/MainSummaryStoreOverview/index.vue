<template>
    <div class="row mb-3">
        <div class="card w-100 pb-1 pt-4 px-4">
            <div class="card-body">
                <div class="row align-items-center justify-content-between">
                    <div class="h4">Store Overview</div>
                    <big-button
                        variant="secondary"
                        @onClick="handleClickViewStore"
                    >
                        View Storefront
                    </big-button>
                </div>
                <div class="row">
                    <div>
                        A view into your default BigCommerce storefront
                    </div>
                </div>
                <div
                    class="row border border-radius-2 p-3 rounded mt-3 flex-column"
                >
                    <div class="font-weight-bold">Domain</div>
                    <div>{{ storeInfo.domain }}</div>
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
        ...mapState(["storeInfo"]),
    },
    methods: {
        handleClickViewStore: function() {
            window.open(`https://${this.storeInfo.domain}`, "_blank");
        },
    },
};
</script>
