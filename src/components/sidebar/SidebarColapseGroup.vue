<script setup lang="ts">

const props = defineProps({
    title: { default: "TITULO NÃO DEFINIDO", type: String }
})

</script>

<template>

    <div class="sidebar-colapse-group">

        <p class="sidebar-colapse-group-title">
            {{ title }}
        </p>

        <div>
            <slot />
        </div>

    </div>

</template>

<style scoped>
.sidebar-colapse-group {
    display: flex;
    flex-direction: column;
}

.sidebar-colapse-group-title {
    filter: brightness(1.5);
}
</style>