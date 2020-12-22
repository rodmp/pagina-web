<template>
    <div class="container-fluid">
        <div class="row p-3 h3 pt-5 pl-4">Sample App</div>
        <div class="row border-bottom pt-0 pl-5">
            <big-tabs
                :items="tabItems"
                :activeTab="activeTab"
                @onTabClick="handleTabClick"
            />
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {mainPageTabs} from "@/data";

export default {
    data() {
        return {
            tabItems: mainPageTabs,
            activeTab: this.getCurrentTab().id,
        };
    },
    mounted() {
        console.log("MainPage Component mounted.");
    },
    methods: {
        handleTabClick(tabId) {
            this.activeTab = tabId;
            const activeTabInfo = _.find(mainPageTabs, {id: tabId});
            if (activeTabInfo) {
                this.$router.push({name: activeTabInfo.title});
            }
        },
        getCurrentTab() {
            return _.find(mainPageTabs, {
                title: this.$router.history.current.name,
            });
        },
    },
};
</script>
<style src="./Main.scss" lang="scss" scoped />
