<script setup lang="ts">

const props = defineProps({
    groupName: { type: String, default: "" },
})

</script>

<template>

    <div class="side-bar-group">

        <p class="title">
            {{ groupName }}
        </p>

        <slot />

    </div>

</template>

<style scoped>
.side-bar-group {
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: 600;
    filter: brightness(1.5);
}
</style>