<template>
    <div class="bg-light d-none d-md-block sidebar">
        <div class="left-sidebar">
            <header class="cp-nav-header">
                <a
                    aria-label="Dashboard"
                    class="cp-nav-logo"
                    href="/"
                    tabindex="-1"
                >
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
                >
                    <BigArrowBackIcon
                        color="#b7c6fe"
                        size="20"
                    ></BigArrowBackIcon>
                </button>
            </header>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log("AppSideBar Component mounted.");
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
    border-right: 1px solid #d3d3d3;
}

.left-sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
}

.sidebar-nav li .nav-link {
    color: #333;
    font-weight: 500;
}

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
</style>
