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
    height: 100%;
    width: 200px;
    gap: 4px;
    padding: 4px;
    border-right: solid 1px gainsboro;
}
</style>