<template>
    <RouterLink :class="{ active: $route.path === path }" :to="path">
        <slot />
    </RouterLink>
</template>

<script lang="ts" setup>

const props = defineProps({
    path: { type: String, default: "" }
})

</script>

<style scoped>
.active {
    font-weight: bold;
    text-decoration: underline;
}

a {
    text-decoration: none;

}

a:hover {
    text-decoration: underline;
}
</style>