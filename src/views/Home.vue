<script setup lang="ts">
import Button from '@/components/button/Button.vue';
import router from '@/router';

function goTo() {
    router.push("/components")
}

</script>

<template>

    <div id="content">
        <section>
            <img src="../../public/favicon.ico" alt="logo">
            <h1>VuEasy</h1>
            <Button variant="big" @click="goTo">Get Started!</Button>
        </section>
    </div>

</template>

<style scoped>
#content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
}

#content section:first-child {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
}

h1 {
    font-size: 100px;
    text-shadow: 7px 6px 1px #CCCCCC;
}

img {
    height: 300px;
    transform: translateY(80px);
    object-fit: contain;
}
</style>