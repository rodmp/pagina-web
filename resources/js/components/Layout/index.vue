<template>
    <div class="root">
        <sidebar v-if="showSideBar" />
        <div class="main-container">
            <transition name="router-animation">
                <router-view />
            </transition>
        </div>
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex";
const {mapState, mapActions} = createNamespacedHelpers("layout");
import Sidebar from "@/components/Sidebar";
import {isAppInstalled} from "@/utils";

export default {
    name: "Layout",
    components: {Sidebar},
    data() {
        return {
            showSideBar: true,
        };
    },
    computed: {
        ...mapState(["sidebarClose", "sidebarStatic"]),
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleWindowResize);
    },
    created() {
        if (!isAppInstalled()) {
            this.showSideBar = true;
        } else {
            this.showSideBar = false;
        }
        this.handleWindowResize();
        window.addEventListener("resize", this.handleWindowResize);
    },
    methods: {
        ...mapActions([
            "handleSwipe",
            "toggleSidebar",
            "changeSidebarStatic",
            "changeSidebarClose",
        ]),
        handleWindowResize() {
            const width = window.innerWidth;
            if (width <= 768) {
                this.changeSidebarStatic(false);
                this.changeSidebarClose(true);
            } else {
                this.changeSidebarStatic(true);
                this.changeSidebarClose(false);
            }
        },
    },
};
</script>

<style src="./Layout.scss" lang="scss" scoped />
