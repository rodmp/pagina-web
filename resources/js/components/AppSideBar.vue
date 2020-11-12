<template>
    <div class="bg-dark d-none d-md-block sidebar">
        <div
            class="d-flex flex-column left-sidebar"
            :class="[isCollapsedSideBar ? 'collapsed' : '']"
        >
            <app-side-bar-header
                :isCollapsedSideBar.sync="isCollapsedSideBar"
                :isCollapsedFooter="isCollapsedFooter"
            />
            <app-side-bar-body
                :isCollapsedSideBar="isCollapsedSideBar"
                :isCollapsedFooter="isCollapsedFooter"
            />
            <app-side-bar-footer
                :isCollapsedSideBar="isCollapsedSideBar"
                :isCollapsedFooter.sync="isCollapsedFooter"
            />
        </div>
    </div>
</template>
<script>
import AppSideBarHeader from "./AppSideBarHeader";
import AppSideBarBody from "./AppSideBarBody";
import AppSideBarFooter from "./AppSideBarFooter";

export default {
    mounted() {
        console.log("AppSideBar Component mounted.");
    },
    components: {
        AppSideBarFooter,
        AppSideBarHeader,
        AppSideBarBody,
    },
    data() {
        return {
            isCollapsedFooter: true,
            isCollapsedSideBar: false,
        };
    },
};
</script>
<style scoped>
.sidebar {
    position: fixed;
    width: 260px;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 100;
    padding: 0 0 0 0px;
    border-right: 1px solid #34313f;
}

.left-sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
}
</style>
