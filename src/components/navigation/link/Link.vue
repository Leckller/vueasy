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
    color: black
}

a:hover {
    text-decoration: underline;
    text-decoration-color: rgb(123, 123, 123);
}
</style>