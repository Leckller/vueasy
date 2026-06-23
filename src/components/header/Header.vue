<script setup lang="ts">
import HighLightText from '../texts/HighLightText.vue';

</script>

<template>

    <header>

        <RouterLink to="/">
            <img src="../../../public/favicon.ico" alt="">
        </RouterLink>

        <nav>
            <HighLightText>
                <RouterLink to="/components">Components</RouterLink>
            </HighLightText>
            <HighLightText>
                <RouterLink to="/help">help</RouterLink>
            </HighLightText>
        </nav>

    </header>

</template>

<style scoped>
header {
    display: flex;
    width: 100%;
    border-bottom: solid 1px gainsboro;
    max-height: 100px;
}

header img {
    height: 100%;
}
</style>