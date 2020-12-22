<template>
    <div><router-view /> <alerts-manager :manager="manager" /></div>
</template>

<script>
import {AlertsManager} from "@bigcommerce/big-design";
import {ReactInVue} from "vuera";

export default {
    name: "App",
    components: {
        "alerts-manager": ReactInVue(AlertsManager),
    },
    data() {
        return {
            manager: this.$alertManager,
        };
    },
    created() {},
};
</script>

<style src="~/theme.scss" lang="scss" />
