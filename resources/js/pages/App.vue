<template>
    <div class="container-fluid">
        <div class="row">
            <app-side-bar></app-side-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import AppSideBar from "./../components/AppSideBar";
import AppMain from "./../components/AppMain";

export default {
    mounted() {
        console.log("App Component mounted.");
    },
    components: {
        AppMain,
        AppSideBar,
    },
};
</script>
