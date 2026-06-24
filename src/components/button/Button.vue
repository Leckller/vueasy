<template>
    <button @click="emit('click')">
        <slot />
    </button>
</template>

<script lang="ts" setup>

const emit = defineEmits(['click'])

</script>

<style scoped>
button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

button:hover {
    filter: brightness(1.5);
}
</style>