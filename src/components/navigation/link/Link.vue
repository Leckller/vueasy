<template>
    <RouterLink :to="path">
        <slot />
    </RouterLink>
</template>

<script lang="ts" setup>

const props = defineProps({
    path: { type: String, default: "" }
})

</script>

<style scoped>
a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>