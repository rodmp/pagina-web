<template>
    <footer
        class="cp-nav-footer"
        :class="sidebarHelperClose ? 'collapsed' : 'flex-grow-1'"
    >
        <div class="cp-nav-user-menu">
            <div id="userProfile" class="userProfile selfHelp hasPin">
                <button
                    id="nav-help"
                    class="userProfile-toggle"
                    @click="toggleSideBarFooterBtn"
                >
                    <span class="userProfile-label">Help</span>
                    <BigExpandLessIcon
                        v-if="sidebarHelperClose"
                        class="userProfile-icon"
                        color="#d7d6d9"
                        size="large"
                    />
                    <BigExpandMoreIcon
                        v-else
                        class="userProfile-icon"
                        color="#d7d6d9"
                        size="large"
                    />
                </button>
                <div
                    class="userProfile-supportPin"
                    ng-if="userProfileMenuCtrl.supportPin"
                >
                    Support PIN: 89565756
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    mounted() {
        console.log("AppSideBarFooter Component mounted.");
    },
    computed: {
        ...mapState("layout", ["sidebarHelperClose"])
    },
    methods: {
        ...mapActions("layout", ["toggleSidebarHelper"]),
        toggleSideBarFooterBtn() {
            this.toggleSidebarHelper();
        }
    }
};
</script>
<style src="./SidebarFooter.scss" lang="scss" scoped></style>
