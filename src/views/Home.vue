<script setup lang="ts">
import Button from '@/components/button/Button.vue';
import Footer from '@/components/footer/Footer.vue';
import router from '@/router';

function goTo() {
    router.push("/components")
}

</script>

<template>

    <div id="content">
        <section>
            <h1>VuEasy</h1>
            <Button @click="goTo">Get Started!</Button>
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
    height: 50%;
}

h1 {
    font-size: 80px;
    text-shadow: 7px 6px 1px #CCCCCC;
}
</style>