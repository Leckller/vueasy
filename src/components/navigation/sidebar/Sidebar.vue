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
    padding: 16px 12px 64px 12px;
    border-right: solid 1px var(--gray-6);
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>