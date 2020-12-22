<template>
    <div class="content-loader-wrapper" :class="asOverlay">
        <big-progress-circle size="small" />
        <slot class="content" />
    </div>
</template>
<script>
export default {
    name: "ContentLoader",
    props: {
        asOverlay: Boolean,
    },
};
</script>
<style src="./ContentLoader.scss" lang="scss" scoped />
