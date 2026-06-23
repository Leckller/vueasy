<template>
    <p class="text">
        <slot />
    </p>
</template>

<style scoped>
.text {
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.text:hover {
    color: green;
}
</style>