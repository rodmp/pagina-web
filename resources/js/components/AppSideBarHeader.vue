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
            @click="handleClickSideBarCollapseBtn"
        >
            <BigArrowBackIcon color="#b7c6fe" size="20"></BigArrowBackIcon>
        </button>
    </header>
</template>
<script>
export default {
    mounted() {
        console.log("AppSideBarHeader Component mounted.");
    },
    props: {
        isCollapsedSideBar: Boolean,
        isCollapsedFooter: Boolean
    },
    methods: {
        handleClickSideBarCollapseBtn() {
            this.$emit("update:isCollapsedSideBar", !this.isCollapsedSideBar);
        }
    }
};
</script>
<style scoped>
.cp-nav-header {
    background-color: #273a8a;
}

.cp-nav-logo {
    margin: 1rem;
    display: inline-block;
    width: 100%;
    color: #768598;
    text-decoration: none;
}

@media (min-width: 1100px) {
    .cp-nav-logo-image--small {
        opacity: 0;
    }
}

.cp-nav-logo-image--small {
    transition: opacity 0.2s cubic-bezier(0.21, 0.61, 0.35, 1);
    position: absolute;
}

.cp-nav-header-toggleNav {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    outline: none;
}

.collapsed .cp-nav-header-toggleNav {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}
</style>
