<template>
    <div class="root">
        <Sidebar />
        <div class="main-container">
            <transition name="router-animation">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("layout");
import Sidebar from "@/components/Sidebar";

export default {
    name: "Layout",
    components: { Sidebar },
    methods: {
        ...mapActions([
            "handleSwipe",
            "toggleSidebar",
            "changeSidebarStatic",
            "changeSidebarClose"
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
        }
    },
    computed: {
        ...mapState(["sidebarClose", "sidebarStatic"])
    },
    created() {
        this.handleWindowResize();
        window.addEventListener("resize", this.handleWindowResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleWindowResize);
    }
};
</script>

<style src="./Layout.scss" lang="scss" scoped />
