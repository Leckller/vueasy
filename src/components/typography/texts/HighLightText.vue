<template>
    <p>
        <slot />
    </p>
</template>

<style scoped>
p {
    transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-weight: 500;
}

p:hover {
    color: rgb(123, 123, 123);
}
</style>