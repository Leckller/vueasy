<script setup lang="ts">
import Link from '../links/Link.vue';
import HighLightText from '../texts/HighLightText.vue';

</script>

<template>

    <header>

        <RouterLink to="/">
            <img src="../../../public/favicon.ico" alt="">
        </RouterLink>

        <nav>
            <Link path="/components">
                <HighLightText>
                    Components
                </HighLightText>
            </Link>
        </nav>

    </header>

</template>

<style scoped>
header {
    display: flex;
    width: 100%;
    border-bottom: solid 1px gainsboro;
    max-height: 70px;
    justify-content: space-between;
}

nav {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 16px;
}

a {
    text-decoration: none;
}

header img {
    height: 100%;
}
</style>