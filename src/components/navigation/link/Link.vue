<template>
    <RouterLink :class="{ active: $route.path === path }" :style="{ color: color }" :to="path">
        <slot />
    </RouterLink>
</template>

<script lang="ts" setup>

const props = defineProps({
    path: { type: String, default: "" },
    color: { type: String, default: "" }
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