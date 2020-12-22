<template>
    <header class="cp-nav-header">
        <a aria-label="Dashboard" class="cp-nav-logo" href="/" tabindex="-1">
            <img
                alt="BigCommerce"
                class="cp-nav-logo-image--small"
                src="https://microapps.bigcommerce.com/ng-cp2-control-panel/static/logo-small-b27acccf.svg"
            />
            <img
                alt="BigCommerce"
                class="cp-nav-logo-image"
                src="https://microapps.bigcommerce.com/ng-cp2-control-panel/static/logo-36e88e64.svg"
            />
        </a>
        <button
            aria-label="Collapse"
            class="cp-nav-header-toggleNav"
            type="button"
            @click="toggleSidebarMethod"
        >
            <big-arrow-forward-icon color="#b7c6fe" size="20" />
        </button>
    </header>
</template>
<script>
import {mapState, mapActions} from "vuex";

export default {
    computed: {
        ...mapState("layout", ["sidebarClose", "sidebarStatic"]),
    },
    mounted() {
        console.log("AppSideBarHeader Component mounted.");
    },
    methods: {
        ...mapActions("layout", ["toggleSidebar", "changeSidebarClose"]),
        toggleSidebarMethod() {
            this.changeSidebarClose(!this.sidebarClose);
        },
    },
};
</script>
<style src="./SidebarHeader.scss" lang="scss" scoped></style>
