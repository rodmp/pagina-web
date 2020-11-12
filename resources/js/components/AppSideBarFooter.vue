<template>
    <footer class="cp-nav-footer" :class="isCollapsedFooter ? 'collapsed' : ''">
        <div class="cp-nav-user-menu">
            <div id="userProfile" class="userProfile selfHelp hasPin">
                <button
                    id="nav-help"
                    class="userProfile-toggle"
                    @click="handleClickSideBarFooterCollapseBtn"
                >
                    <span class="userProfile-label">Help</span>
                    <BigExpandLessIcon
                        v-if="isCollapsedFooter"
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
export default {
    mounted() {
        console.log("AppSideBarFooter Component mounted.");
    },
    props: {
        isCollapsedSideBar: Boolean,
        isCollapsedFooter: Boolean
    },
    methods: {
        handleClickSideBarFooterCollapseBtn() {
            this.$emit("update:isCollapsedFooter", !this.isCollapsedFooter);
        }
    }
};
</script>
<style scoped>
.cp-nav-footer {
    background: #44414e;
}

#nav-help {
    background-color: #44414e;
    border: 0;
    color: #e1e6eb;
    cursor: pointer;
    height: 4rem;
    padding: 0;
    position: relative;
    text-align: left;
    width: 100%;
    outline: none;
}

.userProfile-label,
.userProfile-supportPin {
    padding-left: 1.5rem;
}

.userProfile-label {
    padding-bottom: 1rem;
    cursor: pointer;
    display: block;
}

.userProfile-supportPin {
    bottom: 0.8rem;
    color: #8e919c;
    display: block;
    font-size: 0.9rem;
    position: absolute;
    white-space: nowrap;
}

.userProfile-icon {
    cursor: pointer;
    fill: #d7d6d9;
    height: 16px;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) scaleY(1);
    transform: translate(-50%, -50%) scaleY(1);
    -webkit-transition: fill 0.1s ease;
    transition: fill 0.1s ease;
    width: 16px;
}
</style>
