<template>
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
        <div class="sidebar-wrapper">
            <sidebar-header />
            <sidebar-body v-if="sidebarHelperClose" />
            <sidebar-footer v-if="sidebarOpened" />
        </div>
    </nav>
</template>

<script>
import {mapState, mapActions} from "vuex";
import SidebarHeader from "./../SidebarHeader";
import SidebarBody from "./../SidebarBody";
import SidebarFooter from "./../SidebarFooter";

export default {
    name: "Sidebar",
    components: {
        SidebarFooter,
        SidebarHeader,
        SidebarBody,
    },
    data() {
        return {};
    },
    computed: {
        ...mapState("layout", {
            sidebarStatic: (state) => state.sidebarStatic,
            sidebarOpened: (state) => !state.sidebarClose,
            sidebarHelperClose: (state) => state.sidebarHelperClose,
        }),
    },
    created() {},
    methods: {
        ...mapActions("layout", ["changeSidebarClose"]),
        sidebarMouseEnter() {
            if (!this.sidebarStatic) {
                this.changeSidebarClose(false);
            }
        },
        sidebarMouseLeave() {
            if (!this.sidebarStatic) {
                this.changeSidebarClose(true);
            }
        },
    },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped />
