<template>

    <div class="sidebar">

        <template v-if="$slots.header">
            <slot name="header" />
        </template>

        <template v-if="$slots.body">
            <slot name="body" />
        </template>

        <template v-if="$slots.footer">
            <slot name="footer" />
        </template>

    </div>

</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
}
</style>