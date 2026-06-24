<script setup lang="ts">
import Footer from '../footer/Footer.vue';
import Header from '../header/Header.vue';

</script>

<template>

    <Header />
    <main>
        <slot />
    </main>
    <Footer v-show="!$route.path.includes('components')" />

</template>

<style scoped>
main {
    width: 100%;
    height: 100%;
    min-height: calc(100% - 70px);
}
</style>