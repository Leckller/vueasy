<template>
    <div class="code-preview">
        <div class="code-preview__header">
            <span class="code-preview__lang">{{ lang }}</span>
            <button class="code-preview__copy" @click="copy">
                {{ copied ? 'Copiado!' : 'Copiar' }}
            </button>
        </div>
        <div class="code-preview__body" v-html="highlighted" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps<{
    code: string
    lang?: string
}>()

const lang = props.lang ?? 'vue'
const highlighted = ref('')
const copied = ref(false)

async function render() {
    highlighted.value = await codeToHtml(props.code, {
        lang,
        theme: 'github-dark'
    })
}

async function copy() {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
}

onMounted(render)
watch(() => props.code, render)
</script>

<style scoped>
.code-preview {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--gray-a6);
    width: 100%;
}

.code-preview__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--gray-a6);
    font-size: 12px;
}

.code-preview__copy {
    background: transparent;
    border: 1px solid var(--gray-a7);
    border-radius: 4px;
    padding: 2px 8px;
    cursor: pointer;
    font-size: 12px;
}

.code-preview__body {
    max-height: 400px;
    background-color: #24292e;
    overflow-y: auto;
}

.code-preview__body :deep(pre) {
    margin: 0;
    padding: 16px;
}
</style>