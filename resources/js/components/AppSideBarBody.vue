<template>
    <section
        v-if="isCollapsedFooter"
        class="cp-nav-container flex-grow-1"
    ></section>
</template>
<script>
export default {
    mounted() {
        console.log("AppSideBarBody Component mounted.");
    },
    props: {
        isCollapsedSideBar: Boolean,
        isCollapsedFooter: Boolean
    }
};
</script>
<style scoped></style>
