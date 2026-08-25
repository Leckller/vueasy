<script setup lang="ts">
import Link from '../navigation/link/Link.vue';

const { back, next } = defineProps<{
    back: string,
    next: string,
}>()


</script>

<template>
    <footer>
        <div>
            <p v-if="back">Voltar</p>
            <span>
                <Link color="var(--green-10)" :path="back">
                    <slot name="back" />
                </Link>
            </span>
        </div>
        <slot />
        <div>
            <p v-if="next">Próximo</p>
            <span>
                <Link color="var(--green-10)" :path="next">
                    <slot name="next" />
                </Link>
            </span>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer div {
    display: flex;
    flex-direction: column;
}

footer div:last-child {
    align-items: flex-end;
}

span {
    color: var(--green-11) !important;
}

footer div p {
    color: var(--gray-9);
}
</style>