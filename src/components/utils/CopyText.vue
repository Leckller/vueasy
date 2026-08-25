<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
    text: string
}>()

const copied = ref(false)

async function copyText() {
    try {
        await navigator.clipboard.writeText(props.text)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 1500)
    } catch (err) {
        console.error('Erro ao copiar:', err)
    }
}
</script>

<template>
    <div class="copy-wrapper">
        <span class="copy-text">
            <slot />
        </span>
        <button class="copy-btn" @click="copyText" :title="copied ? 'Copiado!' : 'Copiar'">
            <span v-if="copied">✅</span>
            <span v-else">📋</span>
        </button>
    </div>
</template>

<style scoped>
.copy-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--gray-7);
    width: 100%;
    padding: 16px;
    justify-content: space-between;
    background-color: var(--green-3);
}

.copy-text {
    white-space: nowrap;
}

.copy-btn {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-4px);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    padding: 2px;
}

.copy-wrapper:hover .copy-btn {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}
</style>